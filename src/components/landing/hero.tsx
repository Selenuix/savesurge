import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

export const Hero = () => {
  return (<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50 px-6">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-50/10"/>
    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className="text-center"
      >
        <Badge variant="default" className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-sand-200 rounded-full">Introducing
          SaveSurge</Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Save Smarter,
          <br/>
          Live Better
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your financial future with intelligent savings automation and personalized insights.
        </p>
        <motion.button
          whileHover={{scale: 1.02}}
          whileTap={{scale: 0.98}}
          className="px-8 py-4 bg-sand-200 text-black rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/#features-section"> Get Started</Link>
        </motion.button>
      </motion.div>
    </div>
  </section>);
};
