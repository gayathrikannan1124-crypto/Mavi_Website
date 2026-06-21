function CaseStudyCard({ title, description, technologies, results, category }) {
  return (
    <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl overflow-hidden card-hover group shadow-[0_0_30px_rgba(0,255,255,0.03)]">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 p-5 border-b border-cyan-500/10">
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-white text-lg font-bold mt-1">{title}</h3>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>

        {/* Technologies */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-cyan-400/10 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Impact
          </p>
          <p className="text-green-400 text-sm font-medium">{results}</p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyCard;
