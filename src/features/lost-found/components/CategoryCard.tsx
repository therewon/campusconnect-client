import type { Dispatch, SetStateAction } from "react";

type Category =
  | "all"
  | "electronics"
  | "documents"
  | "clothes"
  | "keys"
  | "wallets"
  | "others";

interface CategoryItem {
  id: number;
  label: string;
  value: Exclude<Category, "all">;
  icon: string;
}

interface CategoryCardProps {
  category: CategoryItem;
  categoryFilter: Category;
  setCategoryFilter: Dispatch<SetStateAction<Category>>;
}

const CategoryCard = ({
  category,
  categoryFilter,
  setCategoryFilter,
}: CategoryCardProps) => {
  return (
    <label
      onClick={() =>
        setCategoryFilter(
          categoryFilter === category.value ? "all" : category.value
        )
      }
      className={`flex items-center justify-between p-sm rounded-lg cursor-pointer transition-colors ${
        categoryFilter === category.value
          ? "bg-primary text-white"
          : "hover:bg-surface-container"
      }`}
    >
      <div className="flex items-center gap-md">
        <span className="material-symbols-outlined">
          {category.icon}
        </span>

        <span>{category.label}</span>
      </div>
    </label>
  );
};

export default CategoryCard;