import { useState } from "react";
import { Menu, X } from "lucide-react";
import IDRLogo from "./IDRLogo";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Pillars" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-[72px] flex items-center bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex justify-between items-center">
        <IDRLogo />
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button variant="nav" size="sm" asChild>
            <a href="#contact">Register Interest</a>
          </Button>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="nav" size="sm" asChild>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Register Interest</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
