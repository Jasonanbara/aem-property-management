"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Building2, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const portalLinks = [
  { href: "/dashboard", label: "Owner Portal" },
  { href: "/dashboard", label: "Tenant Portal" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Building2 className="h-8 w-8 text-navy" />
            <div>
              <span className="text-xl font-bold text-navy">AEM</span>
              <span className="hidden sm:inline text-sm text-gray-text ml-1">
                Property Management
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Portal Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPortalOpen(!portalOpen)}
                onBlur={() => setTimeout(() => setPortalOpen(false), 150)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-navy transition-colors cursor-pointer"
              >
                Portals <ChevronDown className="h-4 w-4" />
              </button>
              {portalOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {portalLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className="h-6 w-6 text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white" aria-label="Mobile navigation">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-2 mt-2">
              {portalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-navy"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Button href="/contact" size="sm" className="w-full">
                Free Consultation
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
