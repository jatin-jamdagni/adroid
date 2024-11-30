import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  ChevronRight,
  Building2,
  Users,
  Cog,
  DollarSign,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  const { scrollYProgress } = useScroll();
  // const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section
      id="about"
      className="md:py-20 bg-gradient-to-b from-blue-600 to-white text-black overflow-hidden"
    >
      <motion.div className="container mx-auto px-4" style={{ scale }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue text-black bg-clip-text">
            About Adroit USA Inc.
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Card className="overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Adroit USA Inc. Facility"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-blue-600 text-black p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <p className="font-bold">Established 2003</p>
              <p>California, USA</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/50 backdrop-blur-sm border-blue-500">
              <CardContent className="p-6 text-black">
                <h3 className="text-3xl font-semibold mb-6 text-blue-400">
                  Excellence in Service and Execution
                </h3>
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Adroit USA Inc. has been at the forefront of the Medical
                  Device Industry since 2003, providing custom, value-added,
                  turnkey solutions with a legacy of almost 40 years through our
                  manufacturing facilities in India.
                </motion.p>
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Our Pleasanton, CA office ensures seamless support for all
                  operations, offering you the quality of domestic service
                  coupled with the cost-effectiveness of offshore manufacturing.
                </motion.p>
                <motion.p
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  As a vertically integrated contract manufacturer, we
                  specialize in complete medical device fabrication, all under
                  one roof.
                </motion.p>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  {[
                    { icon: Building2, text: "40+ Years of Experience" },
                    { icon: Users, text: "Global Client Base" },
                    { icon: Cog, text: "Turnkey Solutions" },
                  ].map((item, index) => (
                    <Card key={index} className="bg-blue-800/30">
                      <CardContent className="p-4 flex items-center space-x-2">
                        <item.icon className="w-6 h-6 text-blue-400" />
                        <span className="text-sm text-black font-[500]">
                          {item.text}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              USA Quality at Offshore Pricing
            </span>
          </h3>
          <p className="text-xl mb-8">Complete Custom Solutions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card className="bg-white/50 backdrop-blur-sm border-blue-500">
            <CardContent className="p-6">
              <DollarSign className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl text-blue-600 font-semibold mb-2">
                California-based Operations
              </h4>
              <p className=" text-black">
                Adroit USA Inc. is your single point of contact, headquartered
                in the U.S. and protected by U.S. laws.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm border-blue-500">
            <CardContent className="p-6">
              <Headphones className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Comprehensive Support
              </h4>
              <p className=" text-black">
                We provide real-time engineering, customer service, contracting,
                invoicing, and payment support.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm border-blue-500">
            <CardContent className="p-6">
              <ShieldCheck className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-blue-600">
                Your Extended Team
              </h4>
              <p className=" text-black">
                We're an extension of your team, offering the experience and
                expertise to ensure your project's success.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            variant="outline"
            className="group  text-black hover:text-blue-600"
          >
            Discover Our Comprehensive Solutions
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
