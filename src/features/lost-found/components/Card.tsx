import React from "react";

const Card = ({ item }: { item: any }) => {
  return (
    <div className="h-full bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
      <div className="h-48 relative overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={item.image}
          alt={item.name}
        />

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded uppercase">
            {item.type}
          </span>

          <span className="bg-white/90 backdrop-blur-sm text-on-surface text-[10px] font-black px-2 py-1 rounded uppercase">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-md flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-title-md text-on-surface leading-tight">
            {item.name}
          </h4>

          <span className="text-primary font-bold text-sm whitespace-nowrap">
            2h ago
          </span>
        </div>

        <div className="flex items-center gap-xs text-on-surface-variant text-xs mb-md">
          <span className="material-symbols-outlined text-[16px]">
            location_on
          </span>

          <span>{item.location}</span>
        </div>

        <p className="text-on-surface-variant text-sm line-clamp-3">
          {item.description}
        </p>

        <div className="mt-auto pt-md border-t border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-sm">
            <div className="w-6 h-6 rounded-full bg-surface-variant" />

            <span className="text-xs font-semibold">
              Leyla A.
            </span>
          </div>

          <button className="text-primary font-bold text-xs hover:underline">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;