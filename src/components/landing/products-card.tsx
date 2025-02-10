import {motion} from "framer-motion";

interface ProductCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export const ProductCard = ({title, price, features, isPopular}: ProductCardProps) => {
  return (<motion.div
    whileHover={{y: -5}}
    className={`p-8 rounded-2xl backdrop-blur-md ${isPopular ? "bg-sand-200/10 border-2 border-sand-200" : "bg-white/50 border border-stone-200"} relative cursor-pointer`}
  >
    {isPopular && (<span
      className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-sand-200 text-white text-sm rounded-full">
          Most Popular
        </span>)}
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-gray-600">/month</span>
    </div>
    <ul className="space-y-4">
      {features.map((feature, key) => (<li key={key} className="flex items-center text-gray-600">
        <svg
          className="w-5 h-5 mr-3 text-sand-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        {feature}
      </li>))}
    </ul>
    <button
      className="w-full mt-8 px-6 py-3 bg-sand-200 text-white rounded-lg hover:shadow-lg transition-shadow duration-300">
      Get Started
    </button>
  </motion.div>);
};
