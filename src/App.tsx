import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import Loader from "./components/loader";
import About from "./components/about-section";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar key="navbar" />
            <HeroSection key="hero" />
            <About key="about" />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
