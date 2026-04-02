import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Maximize Your Property&apos;s Potential?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of Ottawa property owners who trust AEM to protect and
          grow their investments. Get a free, no-obligation consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg" variant="gold">
            Schedule Free Consultation
          </Button>
          <Button href="tel:+16135551234" size="lg" variant="outline">
            Call (613) 555-1234
          </Button>
        </div>
      </div>
    </section>
  );
}
