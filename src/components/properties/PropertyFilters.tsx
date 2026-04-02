"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface Filters {
  search: string;
  neighborhood: string;
  bedrooms: string;
  priceRange: string;
  status: string;
}

const neighborhoods = [
  "All Neighborhoods",
  "Downtown Ottawa",
  "The Glebe",
  "Kanata",
  "Centretown",
  "Westboro",
  "Nepean",
  "Barrhaven",
  "Orleans",
  "Alta Vista",
];

const bedroomOptions = ["Any Beds", "1", "2", "3", "4", "5+"];
const priceOptions = [
  "Any Price",
  "Under $1,500",
  "$1,500 - $2,000",
  "$2,000 - $2,500",
  "$2,500 - $3,000",
  "$3,000+",
];
const statusOptions = [
  "All Status",
  "available",
  "rented",
  "under-management",
  "coming-soon",
];
const statusLabels: Record<string, string> = {
  "All Status": "All Status",
  available: "Available",
  rented: "Rented",
  "under-management": "Under Management",
  "coming-soon": "Coming Soon",
};

export default function PropertyFilters({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (filters: Filters) => void;
}) {
  const selectClass =
    "w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold appearance-none cursor-pointer";

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="h-5 w-5 text-navy" />
        <h2 className="font-semibold text-navy">Filter Properties</h2>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name, address, or neighborhood..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
        />
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <select
          value={filters.neighborhood}
          onChange={(e) =>
            onChange({ ...filters, neighborhood: e.target.value })
          }
          className={selectClass}
          aria-label="Filter by neighborhood"
        >
          {neighborhoods.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        <select
          value={filters.bedrooms}
          onChange={(e) => onChange({ ...filters, bedrooms: e.target.value })}
          className={selectClass}
          aria-label="Filter by bedrooms"
        >
          {bedroomOptions.map((b) => (
            <option key={b} value={b}>
              {b === "Any Beds" ? b : `${b} Bed${b === "1" ? "" : "s"}`}
            </option>
          ))}
        </select>

        <select
          value={filters.priceRange}
          onChange={(e) =>
            onChange({ ...filters, priceRange: e.target.value })
          }
          className={selectClass}
          aria-label="Filter by price"
        >
          {priceOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={filters.status}
          onChange={(e) => onChange({ ...filters, status: e.target.value })}
          className={selectClass}
          aria-label="Filter by status"
        >
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {statusLabels[s]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
