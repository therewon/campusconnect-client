import type { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  typeFilter: "lost" | "found";
  setTypeFilter: Dispatch<SetStateAction<"lost" | "found">>;
}

const Header = ({ typeFilter, setTypeFilter }: HeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
      <div>
        <div className="flex items-center gap-sm text-primary mb-1">
          <span className="material-symbols-outlined text-[20px]">
            inventory_2
          </span>
          <span className="font-label-md uppercase tracking-wider font-bold">
            University Utility
          </span>
        </div>

        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          İtmiş və Tapılmış
        </h2>

        <p className="text-on-surface-variant max-w-xl">
          Community-driven lost and found system for Azerbaijan universities.
          Help your fellow students recover their belongings.
        </p>
      </div>

      <div className="flex gap-md justify-center bg-white border border-outline-variant p-2 rounded-xl shadow-sm">
        <button
          className={`px-xl py-2 rounded-lg font-semibold transition-all ${
            typeFilter === "lost"
              ? "bg-primary text-white shadow-md"
              : "text-on-surface-variant hover:bg-surface-container"
          }`}
          onClick={() => setTypeFilter("lost")}
        >
          Lost Items
        </button>

        <button
          className={`px-xl py-2 rounded-lg font-semibold transition-all ${
            typeFilter === "found"
              ? "bg-primary text-white shadow-md"
              : "text-on-surface-variant hover:bg-surface-container"
          }`}
          onClick={() => setTypeFilter("found")}
        >
          Found Items
        </button>
      </div>
    </div>
  );
};

export default Header;