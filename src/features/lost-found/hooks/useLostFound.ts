import { useState, useEffect, useCallback } from "react";
import { lostFoundService } from "../services/lostFoundService";
import type {
  LostFound,
  CreateLostFoundRequest,
  LostFoundStatus,
} from "../types/lostFound.types";

// Backend returns BadRequest(string) — extract both string and object forms
function extractError(err: any, fallback: string): string {
  const data = err?.response?.data;
  if (typeof data === "string" && data.length > 0) return data;
  if (typeof data?.message === "string") return data.message;
  if (Array.isArray(data?.errors) && data.errors[0]?.message)
    return data.errors[0].message;
  return fallback;
}

export const useLostFound = () => {
  const [items, setItems] = useState<LostFound[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await lostFoundService.getAll();
      setItems(data);
    } catch (err: any) {
      setError(extractError(err, "İtirilmiş/tapılmış əşyalar yüklənərkən xəta baş verdi"));
    } finally {
      setLoading(false);
    }
  }, []);

  const createItem = async (data: CreateLostFoundRequest) => {
    try {
      await lostFoundService.create(data);
      await fetchAll();
      return true;
    } catch (err: any) {
      const msg = extractError(err, "Elan yaradılarkən xəta baş verdi");
      setError(msg);
      throw new Error(msg);
    }
  };

  const updateStatus = async (id: number, status: LostFoundStatus) => {
    try {
      await lostFoundService.updateStatus(id, status);
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, status } : i))
      );
      return true;
    } catch (err: any) {
      const msg = extractError(err, "Status yenilənərkən xəta baş verdi");
      setError(msg);
      throw new Error(msg);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      await lostFoundService.delete(id);
      setItems((prev) => prev.filter((i) => i.id !== id));
      return true;
    } catch (err: any) {
      const msg = extractError(err, "Elan silinərkən xəta baş verdi");
      setError(msg);
      throw new Error(msg);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return {
    items,
    loading,
    error,
    createItem,
    updateStatus,
    deleteItem,
    refetch: fetchAll,
  };
};
