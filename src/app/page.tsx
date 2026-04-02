import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseAEM from "@/components/home/WhyChooseAEM";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseAEM />
      <Stats />
      <Testimonials />
      <FeaturedProperties />
      <CTABanner />
    </>
  );
}
