// import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
// Building2, Users, Cog, DollarSign, Headphones, ShieldCheck
const serviceCards = [
  {
    title: "Medical Device Assembly",
    image:
      "https://images.unsplash.com/photo-1679496124837-0d1973713b62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Laser Micro/Five Axis Swiss Machining",
    image:
      "https://imgs.search.brave.com/5pHfpr6YzfzZQS1NeuxytQG2ssFBcyIF5mXnMoBHMtM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pcHJv/cnd4aGxpcnJsajVv/LmxlYWRvbmdjZG4u/Y29tL2Nsb3VkL29x/QnBrS2lqUmxqU25t/cmlpa2xtaS9TRkgz/MDUwLTI3NS0yNzUu/cG5n",
  },
  {
    title: "Injection Molding",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Injection_plastic_filter.jpg",
  },
  {
    title: "Design/Engineering",
    image:
      "https://www.twi-global.com/CachedImage.axd?ImageName=Engineering-Design-Process-Diagram.jpg&ImageWidth=1000&ImageHeight=1000&ImageVersionID=98506&ImageModified=20200612142136",
  },
  {
    title: "Project Management",
    image:
      "https://as1.ftcdn.net/jpg/04/72/54/68/1000_F_472546867_4MBw9cVFYE7AwnrIIbmZ8xXS0V3mrIzr.jpg",
  },
  {
    title: "Quality Assurance",
    image:
      "https://t3.ftcdn.net/jpg/09/54/12/20/240_F_954122032_XUmBKeN1Jb8oJjPc9hdeLlhPUbQNXbWK.jpg?height=200&width=300",
  },
  {
    title: "Tooling",
    image:
      "https://t3.ftcdn.net/jpg/03/19/14/00/240_F_319140040_rB8kP5XYvFkXAEIZVOurAPbyhvNuOJ75.jpg",
  },
  {
    title: "Application Lab",
    image:
      "https://as2.ftcdn.net/v2/jpg/09/79/32/01/1000_F_979320103_C5AoklRXLnVP6JctzPKW16RuGM5SbjrW.jpg",
  },
  {
    title: "Secondary Operations",
    image:
      "https://t4.ftcdn.net/jpg/09/49/03/49/240_F_949034935_Cin4xXdwlKyjN6u2NBmgYMxMtLW0JKyW.jpg",
  },
  {
    title: "Extrusion",
    image:
      "https://as2.ftcdn.net/v2/jpg/09/05/43/41/1000_F_905434107_9VyFbs1DEw3nR4VXpwHlOM0Tho3wkITK.jpg",
  },
];

const ServiceSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section id="about" className="py-20  text-black overflow-hidden">
      <motion.div className="container mx-auto px-4" style={{ opacity, scale }}>
        {/* Previous content remains unchanged */}

        {/* New Section: Complete Custom Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
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
                <Card className="bg-white/50 backdrop-blur-sm border-blue-500 hover:scale-95 duration-200 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      {/* import { ChevronRight, Building2, Users, Cog, DollarSign, Headphones, ShieldCheck } from 'lucide-react'; */}
                      {/* <Building2  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition"/> */}
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">
                        {service.title}
                      </h3>
                      <p className="text-sm text-black">
                        Cutting-edge solutions tailored to your specific needs.
                      </p>
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
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
                All Under One Roof
              </span>
            </h3>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              By using our unique, all under one roof model, we are able to
              service all sizes of companies, from startups to Fortune 500
              companies, across the breadth of their needs. Using our vast
              experience and cutting-edge technology, no project is too small,
              too large, or too complex for us to provide the absolute highest
              level of service and execution.
            </p>
            <Button
              variant="outline"
              className="group  text-black hover:text-blue-600"
            >
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
