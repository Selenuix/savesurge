import {motion} from "framer-motion";
import {features} from "@/consts";

export const Features = () => {
  return (<section className="py-24 bg-white px-6" id="features-section">
    <div className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.2}}
              viewport={{once: true}}
              className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-sand-200 mb-6"/>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          )
        )}
      </div>
    </div>
  </section>);
};
