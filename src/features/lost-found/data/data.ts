export const lostAndFound = [
  {
    id: 1,
    type: "lost",
    category: "electronics",
    name: "iPhone 14 Pro",
    description: "Black iPhone with a transparent case.",
    location: "Library - 2nd Floor",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
  },
  {
    id: 2,
    type: "found",
    category: "documents",
    name: "Student ID Card",
    description: "Student ID issued by the university.",
    location: "Main Entrance",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
  },
  {
    id: 3,
    type: "lost",
    category: "clothes",
    name: "Blue Hoodie",
    description: "Navy blue hoodie with a small Nike logo.",
    location: "Cafeteria",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 4,
    type: "found",
    category: "keys",
    name: "Car Keys",
    description: "Toyota car keys with a black keychain.",
    location: "Parking Lot",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600",
  },
  {
    id: 5,
    type: "lost",
    category: "wallets",
    name: "Brown Leather Wallet",
    description: "Contains bank cards and an ID card.",
    location: "Bus Stop",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
  },
  {
    id: 6,
    type: "found",
    category: "others",
    name: "Water Bottle",
    description: "Silver stainless steel bottle with stickers.",
    location: "Gym",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
  },
  {
    id: 7,
    type: "lost",
    category: "electronics",
    name: "Wireless Earbuds",
    description: "White charging case with two earbuds.",
    location: "Computer Lab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLc4IPX483vuqHrUfyjL75OtVPR4JuElN5RY4FnDJ48Q&s=10",
  },
  {
    id: 8,
    type: "found",
    category: "wallets",
    name: "Black Wallet",
    description: "Black wallet containing cash and several cards.",
    location: "Student Center",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
  },
];

export type Category =
  | "all"
  | "electronics"
  | "documents"
  | "clothes"
  | "keys"
  | "wallets"
  | "others";

export const categories: {
  id: number;
  label: string;
  value: Exclude<Category, "all">;
  icon: string;
}[] = [
  {
    id: 1,
    label: "Electronics",
    value: "electronics",
    icon: "devices",
  },
  {
    id: 2,
    label: "Documents",
    value: "documents",
    icon: "description",
  },
  {
    id: 3,
    label: "Clothing",
    value: "clothes",
    icon: "checkroom",
  },
  {
    id: 4,
    label: "Keys",
    value: "keys",
    icon: "vpn_key",
  },
  {
    id: 5,
    label: "Wallets",
    value: "wallets",
    icon: "wallet",
  },
  {
    id: 6,
    label: "Others",
    value: "others",
    icon: "category",
  },
];