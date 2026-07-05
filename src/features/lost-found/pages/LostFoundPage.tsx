import React, { useMemo, useState } from "react";
import { useLostFound } from "../hooks/useLostFound";
import { LostFoundCard } from "../components/LostFoundCard";
import { LostFoundFilter } from "../components/LostFoundFilter";
import { Link } from "react-router-dom";
import { Plus, PackageSearch } from "lucide-react";
import type { LostFoundStatus } from "../types/lostFound.types";

const LostFoundPage: React.FC = () => {
  const { items, loading, error, deleteItem, updateStatus } = useLostFound();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LostFoundStatus | "All">("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return items.filter((item) => {
      const matchStatus = statusFilter === "All" || item.status === statusFilter;
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.description ?? "").toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [items, search, statusFilter]);

  const counts = useMemo(
    () => ({
      All: items.length,
      Lost: items.filter((i) => i.status === "Lost").length,
      Found: items.filter((i) => i.status === "Found").length,
      Resolved: items.filter((i) => i.status === "Resolved").length,
    }),
    [items]
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <div className="flex justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            İtirilmiş &amp; Tapılmış
          </h1>
          <p className="text-gray-500 mt-1">
            Kampus daxilindəki itirilmiş və tapılmış əşyalar
          </p>
        </div>
        <Link
          to="/lost-found/create"
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shrink-0"
        >
          <Plus className="w-5 h-5" />
          <span>Yeni Elan</span>
        </Link>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-100">
          {error}
        </div>
      )}

      {/* Filters */}
      <div className="mb-6">
        <LostFoundFilter
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          counts={counts}
        />
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
          <PackageSearch className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">
            {search || statusFilter !== "All"
              ? "Axtarış nəticəsi tapılmadı."
              : "Hələ heç bir elan yoxdur."}
          </p>
          {!search && statusFilter === "All" && (
            <Link
              to="/lost-found/create"
              className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:underline"
            >
              <Plus className="w-4 h-4" />
              İlk elanı siz yaradın
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <LostFoundCard
              key={item.id}
              item={item}
              onDelete={deleteItem}
              onStatusChange={updateStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LostFoundPage;
