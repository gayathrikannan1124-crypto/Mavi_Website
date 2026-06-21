import { NavLink } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";

const previewServices = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Custom, scalable web applications built with modern frameworks to drive your business forward.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-centered designs that are both beautiful and functional, crafted for real user needs.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Secure, scalable cloud infrastructure and migration services to future-proof your business.",
  },
];

const reasons = [
  {
    icon: "🏆",
    title: "Proven Expertise",
    description: "8+ years of delivering complex IT projects across diverse industries.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "Agile processes ensure your projects are delivered on time, every time.",
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description: "Enterprise-grade security baked into every solution we build.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description: "24/7 support and ongoing maintenance to keep your systems running smoothly.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-[#020817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What We Do"
            title="Our Core Services"
            description="End-to-end technology services to help your business succeed in the digital world."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <NavLink
              to="/services"
              className="inline-block border border-cyan-500/30 text-cyan-400 px-7 py-3 rounded-2xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200"
            >
              View All Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#03111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Why MaviIT"
            title="Why Choose Us"
            description="We combine technical excellence with business understanding to deliver real results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="text-center p-6">
                <div className="w-14 h-14 bg-cyan-400/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{r.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20 bg-[#020817]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle subtitle="Client Feedback" title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "MaviIT transformed our entire digital infrastructure. Their team is professional, fast, and truly understands business needs.",
                name: "Sarah Johnson",
                role: "CEO, TechNova Inc.",
              },
              {
                quote:
                  "The mobile app they built for us exceeded all expectations. Clean, fast, and our customers love it.",
                name: "Ravi Kumar",
                role: "Founder, ShopEase",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 text-left">
                <p className="text-gray-300 italic mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-cyan-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-cyan-500/10 via-[#03111f] to-green-500/10 py-16 border-y border-cyan-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s build something great together. Get a free consultation today.
          </p>
          <NavLink
            to="/contact"
            className="inline-block bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Project →
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Home;
