import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  X,
  Users,
  Sparkles,
  Loader2,
  Send,
} from "lucide-react";

import { useCreateTeamFinder } from "../hooks/useTeamFinder";

export function TeamFinderForm() {
  const navigate = useNavigate();
  const createMutation = useCreateTeamFinder();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const addSkill = () => {
    const value = skillInput.trim();

    if (!value) return;

    if (skills.includes(value)) {
      setSkillInput("");
      return;
    }

    setSkills((prev) => [...prev, value]);
    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((x) => x !== skill));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;
    if (skills.length === 0) return;

    createMutation.mutate(
      {
        title,
        description,
        skillsNeeded: skills,
      },
      {
        onSuccess: () => {
          navigate("/team-finder");
        },
      }
    );
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
    >
      <div className="bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
            <Users size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-black">
              Create Team
            </h1>

            <p className="text-indigo-100 mt-1">
              Publish a post and find teammates for your project.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Backend Developer needed"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Description
          </label>

          <textarea
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your project..."
            className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">

            <label className="font-semibold text-slate-700">
              Required skills
            </label>

            <span className="text-sm text-slate-400">
              {skills.length} selected
            </span>

          </div>

          <div className="flex gap-3">

            <input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill();
                }
              }}
              placeholder="React"
              className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

            <button
              type="button"
              onClick={addSkill}
              className="px-5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center gap-2"
            >
              <Plus size={18} />
              Add
            </button>

          </div>

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">

              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium"
                >
                  <Sparkles size={14} />

                  {skill}

                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:text-red-500"
                  >
                    <X size={15} />
                  </button>
                </div>
              ))}

            </div>
          )}
        </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">
            Preview
          </h2>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Title
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                {title || "Your team title"}
              </h3>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Description
              </p>

              <p className="mt-1 text-slate-600 whitespace-pre-wrap">
                {description || "Project description will appear here..."}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                Skills
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.length === 0 ? (
                  <span className="text-sm text-slate-400">
                    No skills added
                  </span>
                ) : (
                  skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-2">

          <button
            type="button"
            onClick={() => navigate("/team-finder")}
            className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={
              createMutation.isPending ||
              !title.trim() ||
              skills.length === 0
            }
            className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold flex items-center gap-2 transition"
          >
            {createMutation.isPending ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Creating...
              </>
            ) : (
              <>
                <Send size={18} />
                Publish Team
              </>
            )}
          </button>

        </div>

      </div>
    </form>
  );
}

export default TeamFinderForm;