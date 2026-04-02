"use client";

import Link from "next/link";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  Services: [
    { href: "/services", label: "Residential Management" },
    { href: "/services", label: "Tenant Screening" },
    { href: "/services", label: "Rent Collection" },
    { href: "/services", label: "Maintenance" },
    { href: "/services", label: "Leasing" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/properties", label: "Properties" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Portals: [
    { href: "/dashboard", label: "Owner Portal" },
    { href: "/dashboard", label: "Tenant Portal" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-navy text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Stay Updated</h3>
              <p className="text-gray-300 text-sm mt-1">
                Get Ottawa rental market insights and property tips.
              </p>
            </div>
            {subscribed ? (
              <p className="text-gold font-semibold">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-gold" />
              <span className="text-xl font-bold">AEM Property Management</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-sm">
              Ottawa&apos;s trusted partner for stress-free property management.
              Maximizing your investment while delivering exceptional tenant
              experiences.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="tel:+16134044845" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="h-4 w-4" /> (613) 404-4845
              </a>
              <a href="mailto:joey@aemproperties.ca" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="h-4 w-4" /> joey@aemproperties.ca
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 291 Olmstead St, Ottawa, ON K1L 7J9
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} AEM Property Management. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/faq" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/faq" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
