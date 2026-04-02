"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Talk About Your Property
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you&apos;re a property owner, investor, or prospective
            tenant, we&apos;re here to help. Schedule a free consultation today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+16135551234"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Phone</p>
                      <p className="text-sm text-gray-text group-hover:text-gold transition-colors">
                        (613) 555-1234
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@aemproperties.ca"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <p className="text-sm text-gray-text group-hover:text-gold transition-colors">
                        info@aemproperties.ca
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Office</p>
                      <p className="text-sm text-gray-text">
                        150 Elgin St, Suite 300
                        <br />
                        Ottawa, ON K2P 1L4
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Hours</p>
                      <p className="text-sm text-gray-text">
                        Mon-Fri: 9am - 5pm
                        <br />
                        Sat: 10am - 2pm
                        <br />
                        Emergency: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-xl h-56 flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-navy/30 mx-auto mb-2" />
                  <p className="text-sm text-navy/40 font-medium">
                    150 Elgin St, Ottawa
                  </p>
                  <p className="text-xs text-navy/30">Map integration</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-navy mb-6">
                  Schedule a Free Consultation
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-text">
                      We&apos;ll be in touch within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-navy mb-1"
                        >
                          First Name *
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-navy mb-1"
                        >
                          Last Name *
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-1"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy mb-1"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-navy mb-1"
                      >
                        I&apos;m interested in...
                      </label>
                      <select
                        id="interest"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      >
                        <option>Property Management Services</option>
                        <option>Renting a Property</option>
                        <option>Investment Consultation</option>
                        <option>Maintenance Request</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                        placeholder="Tell us about your property or what you're looking for..."
                      />
                    </div>
                    <Button type="submit" variant="gold" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
