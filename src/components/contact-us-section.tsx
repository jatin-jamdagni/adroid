import  { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const clientLogos = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const ClientSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

//   const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-green-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
            Our Trusted Clients
          </span>
        </motion.h2>

        <div className="mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-green-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-green-900 to-transparent z-10" />
          <motion.div 
            className="flex overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 30, 
              ease: "linear" 
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img src={logo} alt={`Client ${index % 10 + 1}`} className="h-20 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/50 backdrop-blur-sm border-green-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">Client Success Stories</h3>
                <p className="mb-4 text-green-100">
                  Our clients range from innovative startups to Fortune 500 companies. We've helped them achieve remarkable results through our comprehensive manufacturing solutions.
                </p>
                <ul className="list-disc list-inside mb-4 text-white">
                  <li>Reduced time-to-market by 30% for medical devices</li>
                  <li>Improved product quality and consistency by 25%</li>
                  <li>Streamlined supply chain management, cutting costs by 20%</li>
                  <li>Achieved 40% cost savings through our all-in-one approach</li>
                </ul>
                <Button variant="outline" className="mt-4 group">
                  Read Case Studies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            style={{  scale }}
            className="relative z-10"
          >
            <Card className="bg-black border-green-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">Get in Touch</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" className="bg-white/10 border-green-500 placeholder-gray-100 text-white active:border-green-600 foucs:border-green-700 active:shadow-md" />
                  <Input type="email" placeholder="Your Email" className="bg-white/10 border-green-500 placeholder-gray-100 text-white active:border-green-600 foucs:border-green-700 active:shadow-md" />
                  <Input type="text" placeholder="Company" className="bg-white/10 border-green-500 placeholder-gray-100 text-white active:border-green-600 foucs:border-green-700 active:shadow-md" />
                  <Textarea placeholder="How can we help you?" className="bg-white/10 border-green-500 placeholder-gray-100 text-white active:border-green-600 foucs:border-green-700 active:shadow-md" />
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 transition-colors">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;

