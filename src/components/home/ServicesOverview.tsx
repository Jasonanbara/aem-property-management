import {
  Home,
  UserCheck,
  DollarSign,
  Wrench,
  FileText,
  Key,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Residential Management",
    description:
      "Full-service management of single-family homes, condos, and multi-unit properties across Ottawa.",
  },
  {
    icon: UserCheck,
    title: "Tenant Screening",
    description:
      "Comprehensive background checks, credit reports, and reference verification to find reliable tenants.",
  },
  {
    icon: DollarSign,
    title: "Rent Collection",
    description:
      "Automated rent collection with direct deposit, late payment follow-ups, and transparent accounting.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "24/7 maintenance coordination with trusted local contractors and regular property inspections.",
  },
  {
    icon: Key,
    title: "Leasing",
    description:
      "Professional photography, marketing, showings, and lease preparation to minimize vacancies.",
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description:
      "Monthly statements, year-end tax documents, and real-time access to your financial dashboard.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Everything You Need, Under One Roof"
          description="From finding the right tenants to managing day-to-day operations, we handle every aspect of property management."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group p-6 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <service.icon className="h-6 w-6 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
