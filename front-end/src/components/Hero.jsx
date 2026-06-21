import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#020817] via-[#03111f] to-[#061726] text-white relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <span className="inline-block bg-cyan-400/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase border border-cyan-500/20">
              ◆ Reliability Protocols Active
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We help startups and businesses achieve{" "}
              <span className="gradient-text">99.99% uptime</span>{" "}
              with our managed services.
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              MaviIT bridges the gap between <strong className="text-white">Web Development</strong> and{" "}
              <strong className="text-white">Site Reliability</strong>. We engineer high-performance platforms that are:{" "}
              <span className="text-cyan-400">Ultra-Fast</span>, <strong className="text-white">Secure</strong>, and{" "}
              <span className="text-green-400">Scalable</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NavLink
                to="/services"
                className="bg-gradient-to-r from-cyan-400 to-green-400 text-black px-7 py-3.5 rounded-2xl font-semibold text-base hover:scale-105 transition-all duration-300 text-center"
              >
                Secure Your Infrastructure
              </NavLink>
              <NavLink
                to="/contact"
                className="bg-white/5 border border-cyan-500/20 text-white px-7 py-3.5 rounded-2xl font-semibold text-base hover:border-cyan-400 transition-all duration-200 text-center"
              >
                View Tools 🛡️
              </NavLink>
            </div>

            {/* Trust line */}
            <p className="text-gray-600 text-xs tracking-widest uppercase mt-10">
              ── Trusted by startups and enterprises for mission-critical infrastructure.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "8+", label: "Years of Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration Card */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="bg-white/5 backdrop-blur-lg border border-cyan-500/10 rounded-2xl p-8 text-center shadow-[0_0_60px_rgba(34,211,238,0.05)]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🌐", title: "Web Dev" },
                  { icon: "📱", title: "Mobile Apps" },
                  { icon: "☁️", title: "Cloud" },
                  { icon: "🎨", title: "UI/UX" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/5 rounded-xl p-5 flex flex-col items-center gap-2 hover:bg-cyan-400/5 hover:border-cyan-500/20 transition-all duration-200"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-300">{item.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-6">
                End-to-end technology services for modern businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
