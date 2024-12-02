"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative  min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <Image
        src="https://tirony.me/manny_adroit/wp-content/uploads/2024/01/IMG_1434-1.webp"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-background/10 " />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 backdrop-blur-sm bg-background/30 p-8 rounded-xl shadow-sm"
        >
          <h1 className="text-4xl md:text-6xl  lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-800 to-violet-700 text-transparent bg-clip-text">
              Innovation and Excellence for
              <br />
              40+ Years
            </span>
          </h1>

          <p className="text-black text-xl md:text-2xl max-w-3xl mx-auto font-semibold font-['Arial']">
            Your Trusted Partner for Manufacturing Solutions, From Startups to
            Fortune 500 Companies
          </p>

          <ul className="space-y-4 text-foreground text-lg">
            {[
              "Established Expertise: Serving clients globally since 2003.",
              "Comprehensive Services: All your needs met under one roof.",
              "California-Based Support: U.S. laws and real-time assistance at every step.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                className="flex items-center gap-x-2 justify-center  "
              >
                <span className="text-green-700 size-5 font-extrabold text-center mb-1.5">
                  ✓
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
