"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Medical Device Assembly",
    description:
      "Our state-of-the-art medical device assembly services combine precision engineering with stringent quality control. We specialize in assembling complex medical devices, from diagnostic equipment to surgical instruments, ensuring each component meets the highest standards of accuracy and reliability.",
    details:
      "Our clean room facilities and ISO 13485 certified processes guarantee that all medical devices are assembled in a controlled environment, minimizing contamination risks. We employ advanced technologies such as robotics and computer-aided manufacturing to enhance precision and consistency in the assembly process.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d0a707f4348f80001b50931/1563903762728-KQAFP77C3KYQ55K8D786/Medical-Device-Assembly.jpg?format=2500w",
  },
  {
    title: "Stainless Steel Manufacturing",
    description:
      "Our Stainless Steel manufacturing capabilities cover a wide range of materials and processes. From CNC machining to metal injection molding, we produce high-quality parts for aerospace, automotive, and industrial applications.",
    details:
      "We utilize advanced metallurgy techniques and cutting-edge machinery to fabricate components with tight tolerances and complex geometries. Our expertise extends to various metals including stainless steel, aluminum, titanium, and exotic alloys, ensuring we can meet the most demanding specifications.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d0a707f4348f80001b50931/1563903117277-TO9QMALRH0JD0749ZID6/Stainless-Steel-Manufacturing.jpg?format=2500w",
  },
  {
    title: "Injection Molding",
    description:
      "Our injection molding services offer a cost-effective solution for high-volume production of plastic parts. We employ advanced molding techniques to produce components with intricate designs and tight tolerances.",
    details:
      "Our facility houses state-of-the-art injection molding machines capable of handling a wide range of thermoplastics. We offer multi-shot molding, overmolding, and insert molding capabilities. Our in-house tool design and fabrication ensure optimal mold performance and longevity.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d0a707f4348f80001b50931/1563903117277-TO9QMALRH0JD0749ZID6/Stainless-Steel-Manufacturing.jpg?format=2500w",
  },
  {
    title: "Design/Engineering/Project Management",
    description:
      "Our comprehensive design, engineering, and project management services cover the entire product lifecycle. From initial concept to final production, our team of experts guides your project through every stage, ensuring optimal outcomes.",
    details:
      "We employ the latest CAD/CAM software and simulation tools to optimize designs for manufacturability and performance. Our project management approach follows industry-standard methodologies like Six Sigma and Agile, ensuring efficient execution and timely delivery of projects.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d0a707f4348f80001b50931/1563903085571-PBW6EU5WC5NDBEAIIAJ2/Engineering-Project-Management.jpg?format=2500w",
  },
  {
    title: "Quality Assurance",
    description:
      "Our rigorous quality assurance processes ensure that every product meets or exceeds industry standards. We employ advanced inspection technologies and follow strict quality control protocols throughout the manufacturing process.",
    details:
      "Our quality management system is ISO 9001 certified, and we adhere to industry-specific standards such as AS9100 for aerospace and IATF 16949 for automotive. We utilize state-of-the-art CMM machines, X-ray inspection, and 3D scanning technologies to perform comprehensive quality checks.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d0a707f4348f80001b50931/1567190475243-1EI9II4W9UVLLLQCZYY3/Quality-Control.jpg?format=2500w",
  },
];

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    }, 5000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // const goToPrevious = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + solutions.length) % solutions.length
  //   );
  // };

  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
  // };

  return (
    <div className="relative w-full h-dvh overflow-hidden bg-foreground">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center "
        >
          <Image
            src={solutions[currentIndex].image}
            alt={solutions[currentIndex].title}
            fill
            className="object-"
          />
          <div className="absolute bg-foreground/80 mx-28 rounded-md backdrop-blur-sm flex flex-col justify-center p-8 md:p-16 text-background ">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 "
            >
              {solutions[currentIndex].title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-6"
            >
              {solutions[currentIndex].description}
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm md:text-base mb-8"
            >
              {solutions[currentIndex].details}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                variant="outline"
                className="text-primary-foreground bg-primary"
                size="lg"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/50 rounded-full p-2 hover:bg-primary/75 transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/50 rounded-full p-2 hover:bg-primary/75 transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button> */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-primary" : "bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
