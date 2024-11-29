 import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">Adroit USA Inc.</h3>
            <p className="mb-4">Providing innovative manufacturing solutions since 2003. Your trusted partner for medical device fabrication.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-green-400" />
                123 Manufacturing St, Pleasanton, CA 94588
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-green-400" />
                (925) 123-4567
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-green-400" />
                info@adroitusa.com
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-green-500 placeholder-gray-400 flex-grow"
              />
              <Button type="submit" className="bg-green-500 hover:bg-green-600 transition-colors">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p>&copy; {currentYear} Adroit USA Inc. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

