function SectionTitle({ subtitle, title, description, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-2xl mx-auto" : ""}`}>
      {subtitle && (
        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">{title}</h2>
      {description && (
        <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;
