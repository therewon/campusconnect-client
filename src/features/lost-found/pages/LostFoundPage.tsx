import React, { useMemo, useState } from "react";
import { useLostFound } from "../hooks/useLostFound";
import { LostFoundCard } from "../components/LostFoundCard";
import { LostFoundFilter } from "../components/LostFoundFilter";
import { Link } from "react-router-dom";
import { Plus, PackageSearch } from "lucide-react";
import type { LostFoundStatus } from "../types/lostFound.types";
import Header from "../components/Header";
import { lostAndFound } from "../data/data"
import Card from "../components/Card";
import { categories } from "../data/data";
import type { Category } from "../data/data";
import CategoryCard from "../components/CategoryCard";
import Add from "../components/Add";
import AddModal from "../components/AddModal";

const LostFoundPage: React.FC = () => {
  const { items, loading, error, deleteItem, updateStatus } = useLostFound();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LostFoundStatus | "All">("All");
  const [toggleSwitch, setToggleSwitch] = useState(true)
  const [typeFilter, setTypeFilter] = useState<"lost" | "found">("lost");
  const [isOpen, setIsOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] =
    useState<Category>("all");

  const filteredItems = lostAndFound.filter((item: { type: string; category: string; }) => {
    const typeMatch = item.type === typeFilter;

    const categoryMatch =
      categoryFilter === "all" ||
      item.category === categoryFilter;

    return typeMatch && categoryMatch;
  });

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return items.filter((item) => {
      const matchStatus = statusFilter === "All" || item.status === statusFilter;
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.description ?? "").toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [items, search, statusFilter]);

  const counts = useMemo(
    () => ({
      All: items.length,
      Lost: items.filter((i) => i.status === "Lost").length,
      Found: items.filter((i) => i.status === "Found").length,
      Resolved: items.filter((i) => i.status === "Resolved").length,
    }),
    [items]
  );

  return (
    <main className="flex flex-col pb-24 lg:pb-0">
      <div className=" p-lg space-y-lg max-w-300 mx-auto w-full">
        <Header typeFilter={typeFilter}
          setTypeFilter={setTypeFilter} />
        {/* Dashboard Row: Quick Stats & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="md:col-span-1 space-y-lg">
            {/* Categories */}
            <div className="bg-white border border-outline-variant rounded-xl p-md shadow-sm">
              <h3 className="font-label-md font-bold text-outline mb-md uppercase tracking-tighter">
                Categories
              </h3>
              <div className="space-y-sm">
                {categories.map((category) => (
                  <CategoryCard key={category.id} category={category} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
                ))}
              </div>
            </div>

          </div>
          {/* Main Grid: Item Cards */}
          <div className="md:col-span-3">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-lg"
              id="items-grid"
            >

              
                <Add  setIsOpen={setIsOpen}/>
              {
                filteredItems.map((item) => (
                  <Card key={item.id} item={item} />
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <AddModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </main>

  );
};

export default LostFoundPage;
