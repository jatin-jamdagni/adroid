import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
const imageUrl =
  "https://images.squarespace-cdn.com/content/v1/5d0a707f4348f80001b50931/1560989855760-X310GSH1KIL9GMKP2O3G/Adroit-USA-logo.jpg?format=1000w".trimEnd();
export function FooterSection() {
  return (
    <footer className="bg-foreground  text-background">
      <div className="max-w-7xl   mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid  xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1  ">
            <Image
              className=" object-contain"
              src={imageUrl}
              width={300}
              height={200}
              alt="Company logo"
            />
            <p className="text-sm">
              Specializing in high-precision medical device manufacturing. All
              under one roof: from design to production.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <LinkedIn className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Device Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Assembly
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Packaging
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Quality Assurance
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Regulatory Compliance
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Customer Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-gray-300">
                      News
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Mail className="h-6 w-6 mr-2" />
                    <a
                      href="mailto:info@example.com"
                      className="text-base hover:text-gray-300"
                    >
                      info@adroitusa.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-6 w-6 mr-2" />
                    <a
                      href="tel:+1234567890"
                      className="text-base hover:text-gray-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 mr-2 mt-1" />
                    <span className="text-base">
                      123 Medical Drive,
                      <br />
                      Innovation City, MD 12345
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-center">
            &copy; {new Date().getFullYear()} Adroit USA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
