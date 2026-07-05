import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { lostFoundService } from "../services/lostFoundService";
import { LostFoundForm } from "../components/LostFoundForm";
import type { CreateLostFoundRequest } from "../types/lostFound.types";

const CreateLostFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: CreateLostFoundRequest) => {
    setSaving(true);
    setError(null);
    try {
      await lostFoundService.create(data);
      navigate("/lost-found");
    } catch (err: any) {
      const d = err?.response?.data;
      setError(
        typeof d === "string" && d.length > 0
          ? d
          : d?.message || "Elan yaradılarkən xəta baş verdi"
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-6">
        <Link
          to="/lost-found"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Elanlara Qayıt</span>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Yeni Elan Yarat</h1>
        <p className="text-gray-500 mt-1">
          İtirdiyiniz və ya tapdığınız əşya barədə elan verin.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-100">
          {error}
        </div>
      )}

      <LostFoundForm
        onSubmit={handleSubmit}
        isLoading={saving}
        submitLabel="Elan Yarat"
      />
    </div>
  );
};

export default CreateLostFoundPage;
