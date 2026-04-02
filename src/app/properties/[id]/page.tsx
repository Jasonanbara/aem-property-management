import { notFound } from "next/navigation";
import type { Metadata } from "next";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/data/types";
import Badge from "@/components/ui/Badge";

const properties = propertiesData as Property[];
import Button from "@/components/ui/Button";
import {
  Bed,
  Bath,
  Ruler,
  MapPin,
  Calendar,
  Car,
  Dog,
  WashingMachine,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) return { title: "Property Not Found" };
  return {
    title: `${property.title} | ${property.neighborhood}`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  const ctaText =
    property.status === "available"
      ? "Apply Now"
      : property.status === "coming-soon"
        ? "Join Waitlist"
        : "Contact Us";

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Properties
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {property.title}
              </h1>
              <p className="text-gray-300 flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4" /> {property.address},{" "}
                {property.neighborhood}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge status={property.status} />
              <p className="text-2xl font-bold text-gold">
                ${property.price.toLocaleString()}
                <span className="text-sm text-gray-300 font-normal">/mo</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-navy/10 to-navy/5 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-navy/20 mx-auto mb-2" />
                  <p className="text-sm text-navy/40">
                    Property photos for {property.title}
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-gray-bg rounded-lg p-4 text-center">
                  <Bed className="h-5 w-5 text-navy mx-auto mb-1" />
                  <p className="text-lg font-bold text-navy">
                    {property.bedrooms}
                  </p>
                  <p className="text-xs text-gray-text">Bedrooms</p>
                </div>
                <div className="bg-gray-bg rounded-lg p-4 text-center">
                  <Bath className="h-5 w-5 text-navy mx-auto mb-1" />
                  <p className="text-lg font-bold text-navy">
                    {property.bathrooms}
                  </p>
                  <p className="text-xs text-gray-text">Bathrooms</p>
                </div>
                <div className="bg-gray-bg rounded-lg p-4 text-center">
                  <Ruler className="h-5 w-5 text-navy mx-auto mb-1" />
                  <p className="text-lg font-bold text-navy">
                    {property.sqft.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-text">Sq Ft</p>
                </div>
                <div className="bg-gray-bg rounded-lg p-4 text-center">
                  <Calendar className="h-5 w-5 text-navy mx-auto mb-1" />
                  <p className="text-lg font-bold text-navy">
                    {property.yearBuilt}
                  </p>
                  <p className="text-xs text-gray-text">Year Built</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">
                  About This Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-bg rounded-lg">
                  <Car className="h-5 w-5 text-navy" />
                  <div>
                    <p className="text-sm font-semibold text-navy">Parking</p>
                    <p className="text-xs text-gray-text">
                      {property.parking ? "Included" : "Not Available"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-bg rounded-lg">
                  <Dog className="h-5 w-5 text-navy" />
                  <div>
                    <p className="text-sm font-semibold text-navy">Pets</p>
                    <p className="text-xs text-gray-text">
                      {property.petFriendly
                        ? "Pet Friendly"
                        : "No Pets Allowed"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-bg rounded-lg">
                  <WashingMachine className="h-5 w-5 text-navy" />
                  <div>
                    <p className="text-sm font-semibold text-navy">Laundry</p>
                    <p className="text-xs text-gray-text capitalize">
                      {property.laundry.replace("-", " ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Location</h2>
                <div className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-xl h-64 flex items-center justify-center border border-gray-100">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-navy/30 mx-auto mb-2" />
                    <p className="text-sm text-navy/40 font-medium">
                      {property.neighborhood}, Ottawa, ON
                    </p>
                    <p className="text-xs text-navy/30 mt-1">
                      Interactive map integration available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <p className="text-2xl font-bold text-navy mb-1">
                    ${property.price.toLocaleString()}
                    <span className="text-sm text-gray-text font-normal">
                      /month
                    </span>
                  </p>
                  <p className="text-sm text-gray-text mb-6">
                    {property.type.charAt(0).toUpperCase() +
                      property.type.slice(1)}{" "}
                    in {property.neighborhood}
                  </p>
                  <div className="space-y-3">
                    <Button
                      href="/contact"
                      variant="gold"
                      className="w-full"
                    >
                      {ctaText}
                    </Button>
                    <Button
                      href="/contact"
                      variant="secondary"
                      className="w-full"
                    >
                      Schedule a Viewing
                    </Button>
                    <Button
                      href="tel:+16135551234"
                      variant="secondary"
                      className="w-full"
                    >
                      Call (613) 555-1234
                    </Button>
                  </div>
                </div>

                {/* Property Manager Card */}
                <div className="bg-gray-bg rounded-xl p-6">
                  <p className="text-sm font-semibold text-navy mb-1">
                    Managed by
                  </p>
                  <p className="text-lg font-bold text-navy">
                    AEM Property Management
                  </p>
                  <p className="text-sm text-gray-text mt-2">
                    Licensed property management serving Ottawa since 2009.
                    Contact us for viewings, applications, or any questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
