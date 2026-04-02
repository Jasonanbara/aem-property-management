import {
  MapPin,
  Users,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: MapPin,
    title: "Local Ottawa Expertise",
    description:
      "Deep knowledge of Ottawa neighborhoods — from the ByWard Market to Kanata, Barrhaven to Orleans. We know the rental landscape inside and out.",
  },
  {
    icon: Users,
    title: "Dedicated Property Managers",
    description:
      "A single point of contact who knows your property, your tenants, and your goals. No call centers — real people who care.",
  },
  {
    icon: BarChart3,
    title: "Maximize Your ROI",
    description:
      "Strategic pricing, minimal vacancies, and proactive maintenance keep your investment performing at its best.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Around-the-clock emergency support for tenants and real-time updates for owners. Peace of mind, always.",
  },
];

export default function WhyChooseAEM() {
  return (
    <section className="py-20 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why AEM"
          title="Why Ottawa Property Owners Trust Us"
          description="We combine local expertise with professional systems to deliver results that matter."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <reason.icon className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
