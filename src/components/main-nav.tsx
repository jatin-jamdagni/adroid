"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image from "next/image";

const components: { title: string; href: string }[] = [
  {
    title: "Medical Device Assembly",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Metal Components",
    href: "/docs/primitives/progress",
  },
  {
    title: "Injection Molding",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Design/Engineering",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Quality Assurance",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Tooling",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Applications Lab",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Secondary Operations",
    href: "/docs/primitives/tooltip",
  },
];
const imageUrl =
  "https://images.squarespace-cdn.com/content/v1/5d0a707f4348f80001b50931/1560989855760-X310GSH1KIL9GMKP2O3G/Adroit-USA-logo.jpg?format=1000w".trimEnd();

export function MainNav() {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <div>
      <header
        className={`fixed py-5 top-0 z-50 w-full border-b bg-background backdrop-blur-md transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container flex h-14 items-center">
          <div className="mr-4 w-full hidden md:flex justify-between px-10">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Image alt="LOGO" width={200} height={200} src={imageUrl} />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid  gap-3 p-3 md:w-[200px] lg:w-[200px] ">
                      <ListItem href="/docs" title="The Adroit Advantage" />

                      <ListItem
                        href="/docs/installation"
                        title="Key Personnel"
                      />

                      <ListItem
                        href="/docs/primitives/typography"
                        title="Clientele"
                      />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Capabilities</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Request A Quote
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className=" flex justify-between items-center px-4 w-full">
            <Link href="/" className="font-bold text-primary">
              <Image alt="LOGO" width={200} height={200} src={imageUrl} />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/" className="font-bold text-primary">
        <Image alt="LOGO" width={200} height={200} src={imageUrl} />
      </Link>
      <Link
        href="/"
        className="text-foreground transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="about">
          <AccordionTrigger>About</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Link
                href="/docs"
                className="text-foreground/70 transition-colors hover:text-primary"
              >
                The Adroit Advantage
              </Link>
              <Link
                href="/docs/installation"
                className="text-foreground/70 transition-colors hover:text-primary"
              >
                Key Personnel
              </Link>
              <Link
                href="/docs/primitives/typography"
                className="text-foreground/70 transition-colors hover:text-primary"
              >
                Clientele
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="capabilities">
          <AccordionTrigger>Capabilities</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {components.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  className="text-foreground/70 transition-colors hover:text-primary"
                >
                  {component.title}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link
        href="/docs"
        className="text-foreground transition-colors hover:text-primary"
      >
        Request A Quote
      </Link>
      <Link
        href="/contact"
        className="text-foreground transition-colors hover:text-primary"
      >
        Contact Us
      </Link>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
