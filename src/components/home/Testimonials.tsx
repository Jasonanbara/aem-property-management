import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Property Owner, 6 units",
    quote:
      "AEM transformed how I manage my properties. Their tenant screening is exceptional — I haven't had a single issue in three years. My occupancy rate has never been higher.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Real Estate Investor",
    quote:
      "As an out-of-province investor, having AEM manage my Ottawa portfolio gives me complete peace of mind. The monthly reports are detailed and my returns have improved significantly.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Condo Owner, Westboro",
    quote:
      "Professional, responsive, and genuinely caring about both owners and tenants. The maintenance team is prompt and the financial reporting is transparent and thorough.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Hear from property owners who trust AEM with their investments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-gold fill-gold"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-navy text-sm">{t.name}</p>
                <p className="text-xs text-gray-text">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
