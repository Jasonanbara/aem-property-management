import Button from "@/components/ui/Button";
import { Shield, TrendingUp, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Ottawa&apos;s Trusted Property Management
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Stress-Free Property Management{" "}
            <span className="text-gold">in Ottawa</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Maximize your investment returns while we handle everything — from
            tenant screening to maintenance, rent collection to financial
            reporting. Your properties, professionally managed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" variant="gold">
              Free Consultation
            </Button>
            <Button href="/properties" size="lg" variant="outline">
              View Properties
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 text-gray-300">
              <Shield className="h-5 w-5 text-gold shrink-0" />
              <span className="text-sm">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <TrendingUp className="h-5 w-5 text-gold shrink-0" />
              <span className="text-sm">97% Occupancy Rate</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Clock className="h-5 w-5 text-gold shrink-0" />
              <span className="text-sm">24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
