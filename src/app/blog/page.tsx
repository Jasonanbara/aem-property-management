import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ottawa property management insights, rental market updates, and tips for property owners and investors.",
};

const posts = [
  {
    slug: "ottawa-rental-market-2024",
    title: "Ottawa Rental Market Update: What Owners Need to Know in 2024",
    excerpt:
      "An overview of the current rental landscape in Ottawa, including vacancy rates, average rents by neighborhood, and what's driving demand.",
    date: "2024-11-15",
    readTime: "5 min read",
    category: "Market Insights",
  },
  {
    slug: "tenant-screening-best-practices",
    title: "5 Tenant Screening Best Practices Every Landlord Should Follow",
    excerpt:
      "Proper tenant screening is the foundation of successful property management. Learn the essential steps to find reliable, long-term tenants.",
    date: "2024-10-28",
    readTime: "4 min read",
    category: "Property Management",
  },
  {
    slug: "winter-property-maintenance",
    title: "Winter Property Maintenance Checklist for Ottawa Properties",
    excerpt:
      "Ottawa winters are tough on properties. Follow this seasonal maintenance checklist to protect your investment and keep tenants comfortable.",
    date: "2024-10-10",
    readTime: "6 min read",
    category: "Maintenance",
  },
  {
    slug: "maximize-rental-income",
    title: "How to Maximize Your Rental Income Without Raising Rent",
    excerpt:
      "Strategic improvements, reduced vacancies, and operational efficiencies that boost your bottom line — without increasing rent prices.",
    date: "2024-09-22",
    readTime: "5 min read",
    category: "Investment Tips",
  },
  {
    slug: "ontario-landlord-tenant-act",
    title: "Ontario Landlord-Tenant Act: Key Updates for Property Owners",
    excerpt:
      "Stay compliant with the latest changes to Ontario's Residential Tenancies Act and understand how they affect your rights and responsibilities.",
    date: "2024-09-05",
    readTime: "7 min read",
    category: "Legal",
  },
  {
    slug: "property-management-vs-self-manage",
    title: "Professional Property Management vs. Self-Managing: A Cost Comparison",
    excerpt:
      "Is hiring a property manager worth the fee? We break down the real costs and hidden expenses of managing rental properties yourself.",
    date: "2024-08-18",
    readTime: "5 min read",
    category: "Property Management",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Property Management Insights
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tips, market updates, and expert advice for Ottawa property owners
            and investors.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Placeholder Image */}
                <div className="h-44 bg-gradient-to-br from-navy/10 to-gold/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-navy/40 uppercase tracking-wider px-3 py-1 bg-white/50 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-text mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-CA", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-text line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
