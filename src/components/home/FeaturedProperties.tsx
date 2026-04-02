import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/properties/PropertyCard";
import Button from "@/components/ui/Button";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/data/types";

const properties = propertiesData as Property[];

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.status === "available").slice(0, 3);

  return (
    <section className="py-20 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Featured Properties"
          title="Available Rentals in Ottawa"
          description="Browse our current listings across Ottawa's most desirable neighborhoods."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/properties" variant="primary">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
