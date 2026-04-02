import Link from "next/link";
import { Bed, Bath, Ruler, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Property } from "@/data/types";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Image Placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-navy/10 rounded-lg flex items-center justify-center">
            <MapPin className="h-8 w-8 text-navy/40" />
          </div>
          <p className="text-xs text-navy/40">{property.neighborhood}</p>
        </div>
        <div className="absolute top-3 right-3">
          <Badge status={property.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-navy group-hover:text-gold transition-colors line-clamp-1">
            {property.title}
          </h3>
          <p className="text-lg font-bold text-gold whitespace-nowrap">
            ${property.price.toLocaleString()}
            <span className="text-xs text-gray-text font-normal">/mo</span>
          </p>
        </div>

        <p className="text-sm text-gray-text flex items-center gap-1 mb-3">
          <MapPin className="h-3.5 w-3.5" />
          {property.neighborhood}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-text">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4" /> {property.bedrooms} Bed
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" /> {property.bathrooms} Bath
          </span>
          <span className="flex items-center gap-1">
            <Ruler className="h-4 w-4" /> {property.sqft} sqft
          </span>
        </div>
      </div>
    </Link>
  );
}
