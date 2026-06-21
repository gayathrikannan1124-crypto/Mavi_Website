import { NavLink } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "We build robust, scalable web applications using React, Next.js, Node.js, and more. From simple landing pages to complex enterprise platforms.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile apps for iOS and Android. We use React Native and Flutter to deliver beautiful, high-performance apps.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User research, wireframing, prototyping, and final UI design. We create interfaces that are intuitive, accessible, and visually stunning.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "AWS, Azure, and GCP expertise. Cloud migration, infrastructure design, serverless architecture, and 24/7 cloud monitoring and support.",
  },
  {
    icon: "🔧",
    title: "IT Consulting",
    description:
      "Strategic technology advisory to align your IT investments with business goals. Digital transformation roadmaps and architecture reviews.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Security audits, penetration testing, compliance consulting, and continuous monitoring to protect your digital assets.",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with dashboards, reporting tools, ML models, and business intelligence solutions.",
  },
  {
    icon: "🔗",
    title: "API & Integrations",
    description:
      "Seamless third-party integrations, REST and GraphQL APIs, and middleware solutions that connect your business systems.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn about your business, goals, and challenges." },
  { step: "02", title: "Strategy", desc: "We define a clear plan, timeline, and technology stack." },
  { step: "03", title: "Build", desc: "Our team designs and develops your solution iteratively." },
  { step: "04", title: "Launch & Support", desc: "We deploy, test, and provide ongoing maintenance." },
];

function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#020817] via-[#03111f] to-[#061726] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Comprehensive technology services tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-[#020817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What We Offer"
            title="End-to-End IT Services"
            description="From ideation to deployment and beyond — we've got every technology need covered."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#03111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="How We Work"
            title="Our Process"
            description="A structured, transparent approach that ensures successful project delivery every time."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(0,255,255,0.03)]">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-sm">{p.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-500/10 via-[#03111f] to-green-500/10 py-16 border-y border-cyan-500/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-400 mb-8">
            We work with businesses of all sizes. Let&apos;s talk about your requirements.
          </p>
          <NavLink
            to="/contact"
            className="inline-block bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Services;
