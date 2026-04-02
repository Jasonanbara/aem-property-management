const stats = [
  { value: "500+", label: "Units Managed" },
  { value: "97%", label: "Occupancy Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9/5", label: "Owner Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
