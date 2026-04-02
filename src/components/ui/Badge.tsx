type BadgeVariant = "available" | "rented" | "under-management" | "coming-soon";

const variants: Record<BadgeVariant, string> = {
  available: "status-available",
  rented: "status-rented",
  "under-management": "status-under-management",
  "coming-soon": "status-coming-soon",
};

const labels: Record<BadgeVariant, string> = {
  available: "Available",
  rented: "Rented",
  "under-management": "Under Management",
  "coming-soon": "Coming Soon",
};

export default function Badge({ status }: { status: BadgeVariant }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${variants[status]}`}
    >
      {labels[status]}
    </span>
  );
}
