import {
  Globe2,
  Sparkles,
  Users2,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const imageUrl =
  "https://images.squarespace-cdn.com/content/v1/5d0a707f4348f80001b50931/1560989855760-X310GSH1KIL9GMKP2O3G/Adroit-USA-logo.jpg?format=1000w".trimEnd();
export function MetricsSection() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-foreground p-6  ">
        <div className="max-w-7xl mx-auto w-full  flex flex-col md:flex-row gap-y-6 justify-center   items-center">
          <div className=" w-full">
            <h2 className="text-2xl  md:text-3xl font-bold text-background">
              Device Design and Development
            </h2>
          </div>
          <div className="w-full flex items-center justify-center h-16">
            {/* Replace with your actual logo */}
            <div className="w-fit h-full border-4 border-background flex justify-center items-center rounded-lg">
              <Image alt="LOGO" width={200} height={200} src={imageUrl} />
            </div>
          </div>
          <div className=" w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-background">
              Global Manufacturing
            </h2>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="bg-gradient-to-br from-[hsl(var(--chart-2))] to-[hsl(var(--chart-2))/0.8] p-8 md:p-16 relative text-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Global Facilities */}
            <div className="flex flex-col items-center text-center">
              <Globe2 className="w-16 h-16 mb-4 text-foreground" />
              <span className="text-4xl font-bold text-foreground mb-2">4</span>
              <span className="text-lg text-foreground">Global Facilities</span>
            </div>

            {/* Clean Room Space */}
            <div className="flex flex-col items-center text-center">
              <Sparkles className="w-16 h-16 mb-4 text-foreground" />
              <span className="text-4xl font-bold text-foreground mb-2">
                20K
              </span>
              <span className="text-lg text-foreground">
                Square Ft of Clean Room Space
              </span>
            </div>

            {/* Team Members */}
            <div className="flex flex-col items-center text-center">
              <Users2 className="w-16 h-16 mb-4 text-foreground" />
              <span className="text-4xl font-bold text-foreground mb-2">
                600+
              </span>
              <span className="text-lg text-foreground">
                Team Members Worldwide
              </span>
            </div>

            {/* Facility Space */}
            <div className="flex flex-col items-center text-center">
              <Building2 className="w-16 h-16 mb-4 text-foreground" />
              <span className="text-4xl font-bold text-foreground mb-2">
                250K
              </span>
              <span className="text-lg text-foreground">
                Square Ft of Facility Space
              </span>
            </div>

            {/* QMS System */}
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="w-16 h-16 mb-4 text-foreground" />
              <span className="text-4xl font-bold text-foreground mb-2">
                QMS
              </span>
              <span className="text-lg text-foreground">
                Virtual QMS System
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
