// import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
// Building2, Users, Cog, DollarSign, Headphones, ShieldCheck
const serviceCards = [
  { title: "Medical Device Assembly", image: "/placeholder.svg?height=200&width=300" },
  { title: "Laser Micro/Five Axis Swiss Machining", image: "/placeholder.svg?height=200&width=300" },
  { title: "Injection Molding", image: "/placeholder.svg?height=200&width=300" },
  { title: "Design/Engineering", image: "/placeholder.svg?height=200&width=300" },
  { title: "Project Management", image: "/placeholder.svg?height=200&width=300" },
  { title: "Quality Assurance", image: "/placeholder.svg?height=200&width=300" },
  { title: "Tooling", image: "/placeholder.svg?height=200&width=300" },
  { title: "Application Lab", image: "/placeholder.svg?height=200&width=300" },
  { title: "Secondary Operations", image: "/placeholder.svg?height=200&width=300" },
  { title: "Extrusion", image: "/placeholder.svg?height=200&width=300" },
];

const ServiceSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section id="about" className="py-20  text-white overflow-hidden">
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, scale }}
      >
        {/* Previous content remains unchanged */}
        
        {/* New Section: Complete Custom Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              Complete Custom Solutions
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-black/50 backdrop-blur-sm border-green-500 hover:scale-95 duration-200 overflow-hidden">
                  <CardContent className="p-0">
                    <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
{/* import { ChevronRight, Building2, Users, Cog, DollarSign, Headphones, ShieldCheck } from 'lucide-react'; */}
                      {/* <Building2  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition"/> */}
                      <h3 className="text-xl font-semibold mb-2 text-green-400">{service.title}</h3>
                      <p className="text-sm text-white">Cutting-edge solutions tailored to your specific needs.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                All Under One Roof
              </span>
            </h3>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              By using our unique, all under one roof model, we are able to service all sizes of companies, from startups to Fortune 500 companies, across the breadth of their needs. Using our vast experience and cutting-edge technology, no project is too small, too large, or too complex for us to provide the absolute highest level of service and execution.
            </p>
            <Button  variant="outline" className="group  text-black hover:text-green-600" >
              Explore Our Capabilities
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;

