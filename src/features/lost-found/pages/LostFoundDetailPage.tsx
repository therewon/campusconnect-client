import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, User, Clock } from "lucide-react";
import type { LostFound } from "../types/lostFound.types";

const STATUS_CONFIG = {
  Lost: {
    label: "İtirildi",
    bg: "bg-red-100",
    text: "text-red-700",
    border: "border-red-200",
    dot: "bg-red-500",
    icon: "🔍",
    headerBg: "from-red-50 to-white",
  },
  Found: {
    label: "Tapıldı",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
    icon: "✅",
    headerBg: "from-emerald-50 to-white",
  },
  Resolved: {
    label: "Həll edildi",
    bg: "bg-gray-100",
    text: "text-gray-500",
    border: "border-gray-200",
    dot: "bg-gray-400",
    icon: "🏁",
    headerBg: "from-gray-50 to-white",
  },
};

const LostFoundDetailPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stateItem = (location.state as { item?: LostFound } | null)?.item;

  const [item] = useState<LostFound | null>(stateItem ?? null);

  useEffect(() => {
    // No GET by ID endpoint — redirect back if no state was passed
    if (!stateItem) {
      navigate("/lost-found");
    }
  }, [stateItem, navigate]);

  if (!item) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  const cfg = STATUS_CONFIG[item.status] ?? STATUS_CONFIG.Lost;
  const formattedDate = new Date(item.createdAt).toLocaleDateString("az-AZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link
        to="/lost-found"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Elanlara Qayıt</span>
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header gradient */}
        <div
          className={`bg-linear-to-b ${cfg.headerBg} px-6 py-6 border-b border-gray-100`}
        >
          <div className="flex items-start gap-3">
            <span className="text-4xl">{cfg.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{item.title}</h1>
              <span
                className={`inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-sm font-medium border ${cfg.bg} ${cfg.text} ${cfg.border}`}
              >
                <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                {cfg.label}
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col gap-5">
          {item.description && (
            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Açıqlama
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {item.description}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Əlaqə</p>
                <p className="text-sm text-gray-800 font-semibold">
                  {item.contact}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <User className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Müəllif</p>
                <p className="text-sm text-gray-800 font-semibold">
                  {item.authorName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Tarix</p>
                <p className="text-sm text-gray-800 font-semibold">
                  {formattedDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostFoundDetailPage;
