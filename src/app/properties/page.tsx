"use client";

import { useState, useMemo } from "react";
import propertiesData from "@/data/properties.json";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyFilters from "@/components/properties/PropertyFilters";
import { Building2 } from "lucide-react";
import type { Property } from "@/data/types";

const properties = propertiesData as Property[];

function matchesPrice(property: Property, range: string): boolean {
  if (range === "Any Price") return true;
  const p = property.price;
  if (range === "Under $1,500") return p < 1500;
  if (range === "$1,500 - $2,000") return p >= 1500 && p <= 2000;
  if (range === "$2,000 - $2,500") return p >= 2000 && p <= 2500;
  if (range === "$2,500 - $3,000") return p >= 2500 && p <= 3000;
  if (range === "$3,000+") return p >= 3000;
  return true;
}

function matchesBedrooms(property: Property, beds: string): boolean {
  if (beds === "Any Beds") return true;
  if (beds === "5+") return property.bedrooms >= 5;
  return property.bedrooms === parseInt(beds);
}

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    search: "",
    neighborhood: "All Neighborhoods",
    bedrooms: "Any Beds",
    priceRange: "Any Price",
    status: "All Status",
  });

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (
        filters.search &&
        !`${p.title} ${p.address} ${p.neighborhood}`
          .toLowerCase()
          .includes(filters.search.toLowerCase())
      )
        return false;
      if (
        filters.neighborhood !== "All Neighborhoods" &&
        p.neighborhood !== filters.neighborhood
      )
        return false;
      if (!matchesBedrooms(p, filters.bedrooms)) return false;
      if (!matchesPrice(p, filters.priceRange)) return false;
      if (filters.status !== "All Status" && p.status !== filters.status)
        return false;
      return true;
    });
  }, [filters]);

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Our Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Properties Across Ottawa
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Browse our managed properties — from downtown condos to suburban
            family homes. Filter by location, price, and availability.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyFilters filters={filters} onChange={setFilters} />

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-text">
              Showing{" "}
              <span className="font-semibold text-navy">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "property" : "properties"}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">
                No properties found
              </h3>
              <p className="text-gray-text text-sm">
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
