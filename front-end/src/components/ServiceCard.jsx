function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 card-hover group cursor-default shadow-[0_0_30px_rgba(0,255,255,0.03)]">
      {/* Icon */}
      <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-400/20 transition-colors duration-200">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      {/* Read More Link */}
      <div className="mt-5">
        <span className="text-cyan-400 text-sm font-medium group-hover:underline">
          Learn more →
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;
