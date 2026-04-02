import type { Metadata } from "next";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AEM Property Management — Ottawa's trusted property management company. Our mission, values, and the team behind your investment.",
};

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden fees, no surprises. You'll always have full visibility into your property's performance, expenses, and tenant status.",
  },
  {
    icon: TrendingUp,
    title: "Efficiency",
    description:
      "We use modern systems and proven processes to minimize vacancies, reduce costs, and maximize the return on your investment.",
  },
  {
    icon: Heart,
    title: "Reliability",
    description:
      "When we make a commitment, we follow through. Your tenants get prompt service, and you get consistent, dependable management.",
  },
];

const milestones = [
  { year: "2009", event: "Founded in Ottawa with 12 residential units" },
  { year: "2013", event: "Expanded to 100 units across 5 neighborhoods" },
  { year: "2016", event: "Launched 24/7 maintenance support line" },
  { year: "2019", event: "Introduced owner dashboard & digital reporting" },
  { year: "2022", event: "Reached 400+ managed units" },
  { year: "2024", event: "500+ units, serving all major Ottawa communities" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            About AEM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ottawa&apos;s Property Management Experts
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            For over 15 years, we&apos;ve been helping property owners grow
            their investments while providing tenants with exceptional living
            experiences.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Built on Ottawa Values
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  AEM Property Management was founded in 2009 with a simple
                  belief: property owners deserve a management partner who
                  treats their investment as seriously as they do.
                </p>
                <p>
                  Starting with just 12 residential units in Centretown, we
                  built our reputation one satisfied owner at a time. Today, we
                  manage over 500 units across every major Ottawa neighborhood
                  — from downtown high-rises to suburban family homes.
                </p>
                <p>
                  What sets us apart is our commitment to the Ottawa community.
                  We live here, we invest here, and we understand the unique
                  dynamics of the local rental market.
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gray-bg rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <Award className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-navy">15+</p>
                  <p className="text-sm text-gray-text">Years in Ottawa</p>
                </div>
                <div className="text-center p-4">
                  <Users className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-navy">500+</p>
                  <p className="text-sm text-gray-text">Units Managed</p>
                </div>
                <div className="text-center p-4">
                  <TrendingUp className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-navy">97%</p>
                  <p className="text-sm text-gray-text">Occupancy Rate</p>
                </div>
                <div className="text-center p-4">
                  <Target className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-navy">4.9/5</p>
                  <p className="text-sm text-gray-text">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Our Mission
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            Maximize ROI. Minimize Stress.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our mission is to deliver exceptional property management that
            maximizes our clients&apos; return on investment while reducing the
            stress of ownership. We achieve this through proactive management,
            transparent communication, and a genuine commitment to the
            well-being of both owners and tenants.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="These principles guide every decision we make."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="Growing with Ottawa"
          />
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-4">
                <div className="w-16 shrink-0 text-right">
                  <span className="text-sm font-bold text-gold">{m.year}</span>
                </div>
                <div className="w-px bg-gold/30 shrink-0" />
                <p className="text-sm text-gray-700 pb-6">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-text mb-8">
            Let&apos;s discuss how AEM can help manage your Ottawa property.
          </p>
          <Button href="/contact" variant="gold" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
