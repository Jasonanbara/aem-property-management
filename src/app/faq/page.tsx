"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "What areas in Ottawa do you serve?",
    answer:
      "We manage properties across the entire Ottawa region including Downtown, Centretown, The Glebe, Westboro, Kanata, Nepean, Barrhaven, Orleans, Alta Vista, and surrounding communities.",
  },
  {
    question: "How much does property management cost?",
    answer:
      "Our management fees typically range from 6-10% of monthly rent, depending on the property type, number of units, and services required. We offer a free consultation to provide an exact quote tailored to your needs.",
  },
  {
    question: "How do you screen tenants?",
    answer:
      "We conduct thorough background checks including credit reports, criminal record checks, employment verification, income verification (3x monthly rent minimum), and previous landlord references. We also check the Ontario Landlord and Tenant Board records.",
  },
  {
    question: "What happens if a tenant doesn't pay rent?",
    answer:
      "We have a structured process for handling late payments, starting with immediate follow-up on the due date. If necessary, we issue N4 notices and manage the Landlord and Tenant Board process on your behalf, always in compliance with Ontario law.",
  },
  {
    question: "How quickly can you fill a vacancy?",
    answer:
      "Our average time to fill a vacancy is 2-3 weeks. We achieve this through professional photography, multi-platform listing syndication, and an efficient showing and application process.",
  },
  {
    question: "Do you handle maintenance and repairs?",
    answer:
      "Yes. We coordinate all maintenance through our network of vetted, insured local contractors. For emergencies, we provide 24/7 support. All repairs over a pre-agreed threshold require owner approval.",
  },
  {
    question: "Can I see financial reports for my property?",
    answer:
      "Absolutely. You'll have access to your owner dashboard with real-time data, monthly income and expense statements, and year-end tax documents. We also provide T776 summaries for CRA filing.",
  },
  {
    question: "What if I want to sell my property?",
    answer:
      "We can help coordinate the sale process with your real estate agent, manage tenant showings, and handle lease assignment or termination in accordance with Ontario tenancy law.",
  },
  {
    question: "Do you manage condos and HOA properties?",
    answer:
      "Yes, we manage condos, townhomes, and properties within HOA/condo corporations. We coordinate with condo boards and ensure compliance with all building rules and regulations.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us for a free, no-obligation consultation. We'll assess your property, discuss your goals, and provide a management proposal. Most onboarding is completed within 1-2 weeks.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-navy text-sm pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our property management
            services.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gray-bg rounded-xl">
            <h3 className="text-lg font-bold text-navy mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-text text-sm mb-4">
              We&apos;re happy to help. Reach out for a free consultation.
            </p>
            <Button href="/contact" variant="gold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
