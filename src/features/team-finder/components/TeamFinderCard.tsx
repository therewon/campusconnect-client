import { useNavigate } from "react-router-dom";
import {
  User,
  Users,
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";

import type { TeamFinder } from "../types/teamFinder.types";
import { SkillBadge } from "./SkillBadge";

interface Props {
  teamFinder: TeamFinder;
}

function formatTimeAgo(date: string | Date) {
  const now = new Date();
  const created = new Date(date);
  
  const diff = Math.floor((now.getTime() - created.getTime()) / 1000);
  
  if (diff < 60) return "Just now";
  
  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return `${minutes} min ago`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour ago`;
  
  const days = Math.floor(hours / 24);
  return `${days} day ago`;
}

export function TeamFinderCard({ teamFinder }: Props) {
  const navigate = useNavigate();
  
  // Исправлено: парсим JSON-строку в полноценный массив string[]
  const skills = teamFinder.skillsNeeded ?? [];
  return (
    <div
    className="
      group
      relative
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
    {/* Top gradient */}
    <div
    className="
        absolute
        top-0
        left-0
        right-0
        h-1
        rounded-t-3xl
        bg-linear-to-r
        from-blue-500
        via-purple-500
        to-pink-500
        opacity-0
        group-hover:opacity-100
        transition
        "
    />
    
    {/* Header */}
    <div className="flex justify-between items-start">
    <div>
    <h2
    className="
            text-xl
            font-black
            text-slate-900
            group-hover:text-blue-600
            transition
            "
    >
    {teamFinder.title}
    </h2>
    
    <div
    className="
            flex
            items-center
            gap-2
            mt-2
            text-sm
            text-slate-500
            "
    >
    <User size={14} />
    {teamFinder.createdByName}
    </div>
    </div>
    
    <div
    className="
          rounded-full
          bg-blue-50
          p-3
          text-blue-600
          "
    >
    <Users size={22} />
    </div>
    </div>
    
    {/* Description */}
    <p
    className="
        mt-5
        text-slate-600
        leading-relaxed
        line-clamp-3
        "
    >
    {teamFinder.description}
    </p>
    
    {/* Skills */}
    <div
    className="
        mt-5
        flex
        flex-wrap
        gap-2
        "
    >
    {skills.map(skill => (
      <SkillBadge
      key={skill}
      skill={skill}
      />
    ))}
    </div>
    
    {/* Footer */}
    <div
    className="
        mt-6
        flex
        justify-between
        items-center
        "
    >
    <div
    className="
          flex
          items-center
          gap-2
          text-sm
          text-slate-500
          "
    >
    <Clock size={15} />
    {formatTimeAgo(teamFinder.createdAt)}
    </div>
    
    <button
    onClick={() => navigate(`/team-finder/${teamFinder.id}`)}
    className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-slate-900
          px-4
          py-2
          text-white
          text-sm
          font-semibold
          hover:bg-blue-600
          transition
          "
    >
    View
    <ArrowRight size={16} />
    </button>
    </div>
    
    {/* Bottom decorative */}
    <div
    className="
        mt-5
        flex
        items-center
        gap-2
        text-xs
        text-slate-400
        "
    >
    <Sparkles
    size={14}
    className="text-yellow-500"
    />
    Looking for teammates
    </div>
    </div>
  );
}