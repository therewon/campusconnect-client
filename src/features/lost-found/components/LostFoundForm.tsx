import React, { useState } from "react";
import type {
  CreateLostFoundRequest,
  LostFoundStatus,
} from "../types/lostFound.types";

interface LostFoundFormProps {
  onSubmit: (data: CreateLostFoundRequest) => Promise<void>;
  isLoading?: boolean;
  initialData?: Partial<CreateLostFoundRequest>;
  submitLabel?: string;
}

const STATUS_OPTIONS: { value: LostFoundStatus; label: string; emoji: string; desc: string }[] = [
  { value: "Lost", label: "İtirildi", emoji: "🔍", desc: "Əşyamı itirdim, tapmağa kömək edin" },
  { value: "Found", label: "Tapıldı", emoji: "✅", desc: "Birinin əşyasını tapdım" },
];

export const LostFoundForm: React.FC<LostFoundFormProps> = ({
  onSubmit,
  isLoading,
  initialData,
  submitLabel = "Elan Yarat",
}) => {
  const [formData, setFormData] = useState<CreateLostFoundRequest>({
    title: initialData?.title ?? "",
    description: initialData?.description ?? "",
    contact: initialData?.contact ?? "",
    status: initialData?.status ?? "Lost",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-5"
    >
      {/* Status picker */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">
          Elan növü <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {STATUS_OPTIONS.map((opt) => {
            const isSelected = formData.status === opt.value;
            const selectedCls =
              opt.value === "Lost"
                ? "border-red-400 bg-red-50 ring-2 ring-red-200"
                : "border-emerald-400 bg-emerald-50 ring-2 ring-emerald-200";
            return (
              <label
                key={opt.value}
                className={`flex flex-col gap-1 p-3 rounded-lg border-2 cursor-pointer transition-all duration-150 ${
                  isSelected ? selectedCls : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="status"
                  value={opt.value}
                  checked={isSelected}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-xl">{opt.emoji}</span>
                <span className="font-semibold text-gray-800 text-sm">
                  {opt.label}
                </span>
                <span className="text-xs text-gray-500">{opt.desc}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm font-semibold text-gray-700">
          Başlıq <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          maxLength={100}
          placeholder="Məs: Qara sırt çantası, Şəxsiyyət vəsiqəsi..."
          className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="description"
          className="text-sm font-semibold text-gray-700"
        >
          Açıqlama
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Əşyanın görünüşü, itirdiyi/tapıldığı yer haqqında məlumat..."
          className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-y"
        />
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact"
          className="text-sm font-semibold text-gray-700"
        >
          Əlaqə məlumatı <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          placeholder="Telefon nömrəsi, email və ya sosial media..."
          className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary mt-1 w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Gözləyin..." : submitLabel}
      </button>
    </form>
  );
};
