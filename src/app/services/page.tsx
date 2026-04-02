import type { Metadata } from "next";
import {
  Home,
  UserCheck,
  DollarSign,
  Wrench,
  Key,
  FileText,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service property management in Ottawa: residential management, tenant screening, rent collection, maintenance, leasing, and financial reporting.",
};

const services = [
  {
    icon: Home,
    title: "Residential Management",
    description:
      "Comprehensive management for single-family homes, condos, townhomes, and multi-unit residential buildings across the Ottawa region.",
    benefits: [
      "Regular property inspections",
      "Lease enforcement & compliance",
      "Move-in/move-out coordination",
      "Vendor management & negotiations",
      "Insurance claim assistance",
    ],
  },
  {
    icon: UserCheck,
    title: "Tenant Screening",
    description:
      "Rigorous screening process to ensure reliable, responsible tenants for your property. We verify every applicant thoroughly.",
    benefits: [
      "Credit & background checks",
      "Employment verification",
      "Landlord reference checks",
      "Income verification (3x rent rule)",
      "Ontario Tribunal records review",
    ],
  },
  {
    icon: DollarSign,
    title: "Rent Collection",
    description:
      "Hassle-free rent collection with automated systems and proactive follow-up for any late payments.",
    benefits: [
      "Online payment portal for tenants",
      "Direct deposit to your account",
      "Late payment follow-up protocol",
      "N4 notice preparation if needed",
      "Monthly financial statements",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description:
      "24/7 maintenance coordination with a network of vetted, insured Ottawa-area contractors and tradespeople.",
    benefits: [
      "24/7 emergency response line",
      "Vetted local contractor network",
      "Preventative maintenance programs",
      "Seasonal property preparation",
      "Cost-effective repair solutions",
    ],
  },
  {
    icon: Key,
    title: "Leasing & Marketing",
    description:
      "Professional marketing and leasing services designed to minimize vacancies and maximize rental income.",
    benefits: [
      "Professional photography & virtual tours",
      "Multi-platform listing syndication",
      "Managed showings & open houses",
      "Market rent analysis & pricing",
      "Legally compliant lease preparation",
    ],
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description:
      "Transparent, detailed financial reporting so you always know exactly how your investment is performing.",
    benefits: [
      "Monthly income & expense reports",
      "Year-end tax documentation (T776)",
      "Real-time owner dashboard access",
      "Budget planning & forecasting",
      "Capital expenditure tracking",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Property Management Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to protect your investment and keep your
            tenants happy — all under one roof.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Card */}
                <div className="lg:w-1/3">
                  <div className="bg-gray-bg rounded-xl p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-gold" />
                    </div>
                    <h2 className="text-xl font-bold text-navy mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-text text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="lg:w-2/3 flex items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-4">
                      What&apos;s Included
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Need a Custom Management Plan?"
            description="Every property is unique. Let's discuss a management package tailored to your needs and goals."
          />
          <Button href="/contact" variant="gold" size="lg">
            Get a Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}
