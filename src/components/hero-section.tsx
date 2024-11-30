import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://tirony.me/manny_adroit/wp-content/uploads/2024/01/IMG_1434-1.webp")', // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/60" /> {/* Darker overlay */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container shadow-sm pb-2 rounded-xl backdrop-blur-sm mx-auto px-4 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
            Innovation and Excellence for
            <br />
            40+ Years
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-black text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          Your Trusted Partner for Manufacturing Solutions, From Startups to
          Fortune 500 Companies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4 text-black text-lg mb-12"
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-blue-400">✓</span>
            <span>
              Established Expertise: Serving clients globally since 2003.
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-blue-400">✓</span>
            <span>
              Comprehensive Services: All your needs met under one roof.
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-blue-400">✓</span>
            <span>
              California-Based Support: U.S. laws and real-time assistance at
              every step.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button className="bg-blue-500 hover:bg-blue-600 text-black px-8 py-6 text-lg rounded-full">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
