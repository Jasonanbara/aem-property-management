export default function SectionHeading({
  label,
  title,
  description,
  light = false,
}: {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {label && (
        <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? "text-gray-300" : "text-gray-text"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
