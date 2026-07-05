import React, { useState } from "react";
import type { LostFound, LostFoundStatus } from "../types/lostFound.types";
import {
  Clock,
  User,
  Phone,
  Trash2,
  RefreshCw,
  ChevronDown,
} from "lucide-react";
import { isAdmin, getCurrentUserId } from "../../../utils/auth";

interface LostFoundCardProps {
  item: LostFound;
  onDelete: (id: number) => Promise<boolean>;
  onStatusChange: (id: number, status: LostFoundStatus) => Promise<boolean>;
}

const STATUS_CONFIG: Record<
  LostFoundStatus,
  {
    label: string;
    bg: string;
    text: string;
    border: string;
    dot: string;
    icon: string;
    cardBorder: string;
  }
> = {
  Lost: {
    label: "İtirildi",
    bg: "bg-red-100",
    text: "text-red-700",
    border: "border-red-200",
    dot: "bg-red-500",
    icon: "🔍",
    cardBorder: "border-l-red-400",
  },
  Found: {
    label: "Tapıldı",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
    icon: "✅",
    cardBorder: "border-l-emerald-400",
  },
  Resolved: {
    label: "Həll edildi",
    bg: "bg-gray-100",
    text: "text-gray-500",
    border: "border-gray-200",
    dot: "bg-gray-400",
    icon: "🏁",
    cardBorder: "border-l-gray-300",
  },
};

const ALL_STATUSES: { value: LostFoundStatus; label: string; icon: string }[] = [
  { value: "Lost", label: "İtirildi", icon: "🔍" },
  { value: "Found", label: "Tapıldı", icon: "✅" },
  { value: "Resolved", label: "Həll edildi", icon: "🏁" },
];

export const LostFoundCard: React.FC<LostFoundCardProps> = ({
  item,
  onDelete,
  onStatusChange,
}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const userIsAdmin = isAdmin();
  const currentUserId = getCurrentUserId();
  // Case-insensitive compare because GUIDs may differ in casing
  const isOwner =
    currentUserId !== null &&
    item.authorId?.toLowerCase() === currentUserId.toLowerCase();
  const canUpdateStatus = isOwner || userIsAdmin;
  const cfg = STATUS_CONFIG[item.status];

  const formattedDate = new Date(item.createdAt).toLocaleDateString("az-AZ", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // ── Delete ──────────────────────────────────────────────────────────
  const handleDeleteClick = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 3000);
      return;
    }
    setDeleting(true);
    setLocalError(null);
    try {
      await onDelete(item.id);
    } catch (err: any) {
      const d = err?.message || err?.response?.data;
      setLocalError(
        typeof d === "string" && d.length > 0
          ? d
          : "Silmə zamanı xəta baş verdi"
      );
      setConfirmDelete(false);
    } finally {
      setDeleting(false);
    }
  };

  // ── Status update ────────────────────────────────────────────────────
  const handleStatusSelect = async (newStatus: LostFoundStatus) => {
    if (newStatus === item.status) {
      setShowStatusMenu(false);
      return;
    }
    setStatusUpdating(true);
    setShowStatusMenu(false);
    setLocalError(null);
    try {
      await onStatusChange(item.id, newStatus);
    } catch (err: any) {
      const d = err?.message || err?.response?.data;
      setLocalError(
        typeof d === "string" && d.length > 0
          ? d
          : "Status yenilənərkən xəta baş verdi"
      );
    } finally {
      setStatusUpdating(false);
    }
  };

  const isResolved = item.status === "Resolved";

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 border-l-4 ${cfg.cardBorder} p-5 flex flex-col gap-3 hover:shadow-md transition-all duration-200 ${isResolved ? "opacity-70" : ""}`}
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base">{cfg.icon}</span>
            <h3 className="text-base font-semibold text-gray-800 truncate">
              {item.title}
            </h3>
          </div>

          {/* Status badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${cfg.bg} ${cfg.text} ${cfg.border}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            {cfg.label}
          </span>
        </div>

        {/* Admin-only: Delete */}
        {userIsAdmin && (
          <button
            onClick={handleDeleteClick}
            disabled={deleting}
            title={confirmDelete ? "Bir daha klik et — silinəcək!" : "Sil"}
            className={`p-1.5 rounded-md transition-colors shrink-0 disabled:opacity-50 ${
              confirmDelete
                ? "text-white bg-red-500 hover:bg-red-600"
                : "text-gray-400 hover:text-red-500 hover:bg-red-50"
            }`}
          >
            {deleting ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Trash2 className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* Description */}
      {item.description && (
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
      )}

      {/* Meta */}
      <div className="flex flex-col gap-1.5 text-xs text-gray-500 pt-1 border-t border-gray-50">
        <div className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="truncate">{item.contact}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="truncate">{item.authorName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* ── Status UPDATE dropdown — owner or admin only ─────────────── */}
      {canUpdateStatus && (
        <div className="relative">
          <button
            onClick={() => setShowStatusMenu((p) => !p)}
            disabled={statusUpdating}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 text-xs font-semibold text-gray-700 transition-all disabled:opacity-50"
          >
            <span className="flex items-center gap-1.5">
              {statusUpdating ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-primary" />
              ) : (
                <span>{cfg.icon}</span>
              )}
              {statusUpdating ? "Yenilənir..." : "Statusu dəyiş"}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-gray-400 transition-transform ${showStatusMenu ? "rotate-180" : ""}`}
            />
          </button>

          {showStatusMenu && (
            <div className="absolute left-0 right-0 bottom-full mb-1 z-10 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              {ALL_STATUSES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => handleStatusSelect(s.value)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium hover:bg-gray-50 transition-colors ${
                    s.value === item.status
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700"
                  }`}
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                  {s.value === item.status && (
                    <span className="ml-auto text-primary text-[10px] font-semibold">
                      Cari
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Inline error */}
      {localError && (
        <p className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2 border border-red-100">
          {localError}
        </p>
      )}
    </div>
  );
};
