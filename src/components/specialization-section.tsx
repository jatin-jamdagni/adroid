import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Globe,
  Microscope,
  Cog,
  Package,
  Rocket,
  Repeat,
  LifeBuoy,
} from "lucide-react";

export function SpecializationSection() {
  return (
    <div className="w-full bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Specializations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                High Precision Manufacturing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Injection molded plastic components</li>
                <li>Precision stainless steel components</li>
                <li>Fully assembled and packaged medical devices</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                All Under One Roof Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Product design</li>
                <li>Design for manufacturing</li>
                <li>Molding</li>
                <li>Laser micro machining</li>
                <li>Stainless steel machining</li>
                <li>Assembly</li>
                <li>Packaging</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-foreground text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Microscope className="mr-2" />
                Device Design & Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Transforming innovative technologies into realized medical
                    devices
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Conducting bio-simulation and pre-clinical testing to drive
                    your design and IP
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Vertically integrated processes and experienced teams enable
                    rapid iterations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Mutually aligned design selection, speed-to-market and
                    manufacturing readiness
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Globe className="mr-2" />
                Global Manufacturing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Presence in strategic global manufacturing locations with
                    localized supply chains
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Phased approach for seamless transition from development to
                    commercialization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Leverageable assets and capacity to enable duplication or
                    full line transfers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Life cycle management including service, warranty and
                    continuous improvement
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Cog className="w-12 h-12 text-primary mb-4" />
              <span className="text-lg font-semibold">Product Design</span>
            </div>
            <div className="flex flex-col items-center">
              <Package className="w-12 h-12 text-primary mb-4" />
              <span className="text-lg font-semibold">Manufacturing</span>
            </div>
            <div className="flex flex-col items-center">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <span className="text-lg font-semibold">Rapid Iterations</span>
            </div>
            <div className="flex flex-col items-center">
              <Repeat className="w-12 h-12 text-primary mb-4" />
              <span className="text-lg font-semibold">
                Life Cycle Management
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
