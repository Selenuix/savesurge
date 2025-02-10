'use client';

import {Hero} from "@/components/landing/hero";
import {Features} from "@/components/landing/features";
import {Button} from "@/components/ui/button";
import {LogIn} from "lucide-react";
import Link from "next/link";
import {PricingSection} from "@/components/landing/pricing-section";

export default function Home() {

  return (<div className="min-h-screen bg-stone-50">
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-8">
        <Button asChild>
          <Link href="/signin"><LogIn className="mr-2 h-4 w-4"/>Sign In</Link>
        </Button>
      </div>
    </div>

    <Hero/>
    <Features/>
    <PricingSection/>
  </div>);
}
