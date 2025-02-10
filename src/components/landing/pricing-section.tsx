import {motion} from "framer-motion";
import {ProductCard} from "@/components/landing/products-card";

export function PricingSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-stone-50 to-white" id="pricing-section">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect savings plan that aligns with your financial goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            title="Basic"
            price="$9"
            features={["Automated Savings", "Basic Analytics", "Email Support",]}
          />
          <ProductCard
            title="Pro"
            price="$19"
            features={["Advanced Automation", "Premium Analytics", "Priority Support", "Custom Goals",]}
            isPopular
          />
          <ProductCard
            title="Enterprise"
            price="$49"
            features={["Custom Solutions", "Dedicated Manager", "API Access", "Team Collaboration",]}
          />
        </div>
      </div>
    </section>
  )
}
