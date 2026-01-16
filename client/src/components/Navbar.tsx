import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "الرئيس التنفيذي", href: "/ceo" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:info@mazzerinvest.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@mazzerinvest.com</span>
            </a>
            <a href="tel:+96871710200" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span dir="ltr">+968 71710200</span>
            </a>
          </div>
          <div>
            <span>سلطنة عمان، مسقط - ص.ب 183</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex h-20 items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-heading font-bold text-2xl text-primary">
            <span className="text-3xl">⚓</span>
            <div className="flex flex-col leading-none">
              <span>مازر للاستثمار</span>
              <span className="text-xs font-sans font-normal text-muted-foreground">Mazzer Investment LLC</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href)
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
              تواصل معنا
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-8 mt-8">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <a className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
                  <span className="text-2xl">⚓</span>
                  <span>مازر للاستثمار</span>
                </a>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(link.href) ? "text-primary font-bold" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-4 mt-auto pt-8 border-t">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:info@mazzerinvest.com">info@mazzerinvest.com</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+96871710200" dir="ltr">+968 71710200</a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
