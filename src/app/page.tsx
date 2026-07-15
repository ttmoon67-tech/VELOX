import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TrustBar from "@/components/TrustBar";
import FeatureCards from "@/components/FeatureCards";
import ProductShowcase from "@/components/ProductShowcase";
import TechBreakdown from "@/components/TechBreakdown";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LifestyleShowcase from "@/components/LifestyleShowcase";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main>
        <HeroBanner />
        <ScrollReveal><TrustBar /></ScrollReveal>
        <ScrollReveal delay={100}><FeatureCards /></ScrollReveal>
        <ScrollReveal delay={100}><ProductShowcase /></ScrollReveal>
        <ScrollReveal delay={100}><TechBreakdown /></ScrollReveal>
        <ScrollReveal delay={100}><LifestyleShowcase /></ScrollReveal>
        <ScrollReveal delay={100}><Testimonials /></ScrollReveal>
        <ScrollReveal delay={100}><FAQ /></ScrollReveal>
      </main>
      <FooterCTA />
    </div>
  );
}
