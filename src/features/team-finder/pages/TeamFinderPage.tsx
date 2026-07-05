import { Link } from "react-router-dom";
import {
  Loader2,
  Plus,
  Users
} from "lucide-react";

import { TeamFinderCard } from "../components/TeamFinderCard";
import { useTeamFinder } from "../hooks/useTeamFinder";

export default function TeamFinderPage() {

  const {
    data,
    isLoading,
    error,
  } = useTeamFinder();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">

        <Loader2
          className="animate-spin text-blue-600"
          size={34}
        />

        <p className="text-slate-500 font-medium">
          Team postları yüklənir...
        </p>

      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
        max-w-md
        mx-auto
        my-12
        rounded-2xl
        border
        border-red-100
        bg-red-50
        p-8
        text-center
        "
      >
        <h2 className="font-bold text-red-600 mb-2">
          Xəta baş verdi
        </h2>

        <p className="text-red-500 text-sm">
          Team postlarını yükləmək mümkün olmadı.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-10">

        <div className="flex items-center gap-4">

          <div
            className="
            p-4
            rounded-2xl
            bg-blue-600
            text-white
            shadow-lg
            shadow-blue-200
            "
          >
            <Users size={26} />
          </div>

          <div>

            <h1
              className="
              text-3xl
              font-black
              text-slate-900
              "
            >
              Team Finder
            </h1>

            <p className="text-slate-500 mt-1">
              Komandan üçün yeni üzvlər tap
            </p>

          </div>

        </div>

        <Link
          to="/team-finder/create"
          className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-slate-900
          px-5
          py-3
          text-white
          font-semibold
          hover:bg-blue-600
          transition
          "
        >
          <Plus size={18} />

          Yeni Post

        </Link>

      </div>

      {/* Grid */}

      {data && data.length > 0 ? (

        <div
          className="
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          "
        >

          {data.map(teamFinder => (

            <TeamFinderCard
              key={teamFinder.id}
              teamFinder={teamFinder}
            />

          ))}

        </div>

      ) : (

        <div
          className="
          rounded-3xl
          border-2
          border-dashed
          border-slate-200
          bg-slate-50
          py-24
          text-center
          "
        >

          <Users
            size={50}
            className="mx-auto text-slate-300 mb-5"
          />

          <h2
            className="
            text-xl
            font-bold
            text-slate-700
            "
          >
            Hələ Team postu yoxdur
          </h2>

          <p
            className="
            text-slate-400
            mt-2
            "
          >
            İlk postu sən yarat 🚀
          </p>

          <Link
            to="/team-finder/create"
            className="
            inline-flex
            items-center
            gap-2
            mt-8
            rounded-xl
            bg-blue-600
            px-5
            py-3
            text-white
            font-semibold
            hover:bg-blue-700
            transition
            "
          >
            <Plus size={18} />

            Post yarat

          </Link>

        </div>

      )}

    </div>
  );
}