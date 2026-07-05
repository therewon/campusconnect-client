import React from "react";
import type { LostFoundStatus } from "../types/lostFound.types";
import { Search } from "lucide-react";

interface LostFoundFilterProps {
  search: string;
  onSearchChange: (v: string) => void;
  statusFilter: LostFoundStatus | "All";
  onStatusChange: (v: LostFoundStatus | "All") => void;
  counts: { All: number; Lost: number; Found: number; Resolved: number };
}

const STATUS_TABS: { value: LostFoundStatus | "All"; label: string; color: string }[] = [
  { value: "All", label: "Hamısı", color: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
  { value: "Lost", label: "İtirildi 🔍", color: "bg-red-100 text-red-700 hover:bg-red-200" },
  { value: "Found", label: "Tapıldı ✅", color: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" },
  { value: "Resolved", label: "Həll edildi 🏁", color: "bg-gray-100 text-gray-500 hover:bg-gray-200" },
];

const ACTIVE_COLOR: Record<string, string> = {
  All: "!bg-primary !text-white",
  Lost: "!bg-red-500 !text-white",
  Found: "!bg-emerald-500 !text-white",
  Resolved: "!bg-gray-400 !text-white",
};

export const LostFoundFilter: React.FC<LostFoundFilterProps> = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
  counts,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Başlıq və ya açıqlama axtar..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
        />
      </div>

      {/* Status tabs */}
      <div className="flex flex-wrap gap-2">
        {STATUS_TABS.map((tab) => {
          const isActive = statusFilter === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => onStatusChange(tab.value)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${tab.color} ${isActive ? ACTIVE_COLOR[tab.value] : ""}`}
            >
              {tab.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${isActive ? "bg-white/20" : "bg-white/60"}`}>
                {counts[tab.value]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
