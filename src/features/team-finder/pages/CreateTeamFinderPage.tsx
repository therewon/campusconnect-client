import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TeamFinderForm from "../components/TeamFinderForm"; // Убедитесь, что путь к форме правильный

export default function CreateTeamFinderPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Кнопка возврата назад */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-slate-600 hover:text-indigo-600 font-medium transition"
      >
        <ArrowLeft size={18} />
        Back to Team Finder
      </button>

      {/* Компонент формы создания */}
      <TeamFinderForm />
    </div>
  );
}