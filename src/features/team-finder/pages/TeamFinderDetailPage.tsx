import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Users,
  Calendar,
  User,
  Send,
  Loader2,
  Sparkles,
} from "lucide-react";

import { useTeamFinderById, useApplyTeamFinder } from "../hooks/useTeamFinder";

export default function TeamFinderDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const teamId = Number(id);

  const [message, setMessage] = useState("");

  // Используем кастомные хуки архитектуры приложения
  const { data: teamFinder, isLoading, isError } = useTeamFinderById(teamId);
  const applyMutation = useApplyTeamFinder(teamId);

  const handleApply = () => {
    if (!message.trim()) return;

    applyMutation.mutate(
      { message },
      {
        onSuccess: () => {
          alert("Müraciətiniz uğurla göndərildi!");
          setMessage("");
        },
        onError: () => {
          alert("Müraciət göndərilərkən xəta baş verdi.");
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
      </div>
    );
  }

  if (isError || !teamFinder) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">Team not found</h2>
        <button
          onClick={() => navigate("/team-finder")}
          className="mt-6 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Go back to list
        </button>
      </div>
    );
  }

  // Так как тип изменен на string[], деструктуризация безопасна
  const skills = teamFinder.skillsNeeded ?? [];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-slate-600 hover:text-blue-600 font-medium transition"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Users size={34} />
            </div>
            <div>
              <h1 className="text-4xl font-black">{teamFinder.title}</h1>
              <p className="mt-2 text-blue-100 flex items-center gap-1.5 text-sm">
                <Sparkles size={14} className="text-yellow-400" />
                Looking for teammates
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Left Main Column */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-bold text-xl text-slate-900 mb-4">Description</h2>
                <p className="leading-relaxed text-slate-600 whitespace-pre-wrap">
                  {teamFinder.description || "No description provided."}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.length === 0 ? (
                    <span className="text-sm text-slate-400">No skills specified</span>
                  ) : (
                    skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 font-medium text-sm flex items-center gap-2"
                      >
                        <Sparkles size={14} className="text-indigo-500" />
                        {skill}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="space-y-6">
              {/* Meta Info Box */}
              <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50 space-y-5">
                <h2 className="font-bold text-xl text-slate-900 mb-2">Information</h2>

                <div className="flex gap-3 items-center">
                  <div className="p-2.5 rounded-xl bg-white text-slate-600 border border-slate-100">
                    <User size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Author</div>
                    <div className="font-semibold text-slate-800">{teamFinder.createdByName}</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2.5 rounded-xl bg-white text-slate-600 border border-slate-100">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Created Date</div>
                    <div className="font-semibold text-slate-800">
                      {new Date(teamFinder.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2.5 rounded-xl bg-white text-slate-600 border border-slate-100">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Total Applications</div>
                    <div className="font-semibold text-slate-800">{teamFinder.applicationCount}</div>
                  </div>
                </div>
              </div>

              {/* Action Apply Box */}
              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
                <h2 className="font-bold text-slate-900 mb-3">Apply to this Team</h2>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write something about yourself or your experience..."
                  className="w-full border border-slate-200 rounded-xl p-3.5 resize-none text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 font-sans transition"
                />

                <button
                  onClick={handleApply}
                  disabled={applyMutation.isPending || !message.trim()}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
                >
                  {applyMutation.isPending ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Apply Now
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}