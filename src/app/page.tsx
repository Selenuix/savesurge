import {Hero} from "@/components/landing/hero";
import {Features} from "@/components/landing/features";
import {PricingSection} from "@/components/landing/pricing-section";
import {AuthButton} from "@/components/landing/auth-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-8">
          <AuthButton/>
        </div>
      </div>

      <Hero/>
      <Features/>
      <PricingSection/>
    </div>
  );
}
