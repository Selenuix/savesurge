import type {Feature} from "@/components/landing/features/landing-features";

interface FeatureCardProps {
  feature: Feature
  key: number
}

export function FeatureCard({feature, key}: FeatureCardProps) {
  return (<div
    key={key}
    className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors duration-300"
  >
    <feature.icon className="w-12 h-12 text-sand-200 mb-6"/>
    <h3 className="text-black text-xl font-semibold mb-4">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>)
}
