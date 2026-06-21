import { NavLink } from "react-router-dom";
import CaseStudyCard from "../components/CaseStudyCard";
import SectionTitle from "../components/SectionTitle";

const caseStudies = [
  {
    category: "Web Development",
    title: "E-Commerce Platform Overhaul",
    description:
      "Rebuilt a legacy e-commerce platform for a retail chain with 200+ stores. Implemented a modern React frontend with a Node.js microservices backend.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
    results: "300% increase in page speed, 45% boost in conversions, 99.9% uptime achieved",
  },
  {
    category: "Mobile App",
    title: "Healthcare Patient App",
    description:
      "Developed a HIPAA-compliant mobile app for a hospital network enabling patients to book appointments, view records, and consult doctors virtually.",
    technologies: ["React Native", "Firebase", "Node.js", "Stripe"],
    results: "50,000+ downloads in 3 months, 4.8★ App Store rating",
  },
  {
    category: "Cloud Solutions",
    title: "Cloud Migration for FinTech",
    description:
      "Migrated a financial services company's on-premise infrastructure to AWS, including data warehousing, security hardening, and disaster recovery.",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Python"],
    results: "60% reduction in infrastructure costs, zero downtime migration",
  },
  {
    category: "UI/UX Design",
    title: "SaaS Dashboard Redesign",
    description:
      "Complete UX audit and redesign of a B2B SaaS analytics dashboard. Reduced user drop-off by simplifying complex data workflows.",
    technologies: ["Figma", "React", "Recharts", "Tailwind CSS"],
    results: "40% reduction in support tickets, 25% improvement in user retention",
  },
  {
    category: "IT Consulting",
    title: "Digital Transformation Roadmap",
    description:
      "Partnered with a manufacturing firm to design a 3-year digital transformation roadmap, identifying automation opportunities and modernization paths.",
    technologies: ["Azure", "Power BI", "Python", "ERP Integration"],
    results: "Projected $2M annual savings, 35% improvement in operational efficiency",
  },
  {
    category: "Web Development",
    title: "Real Estate Listing Portal",
    description:
      "Built a full-featured real estate portal with advanced search, interactive maps, virtual tour integration, and a CRM for agents.",
    technologies: ["Next.js", "MongoDB", "Google Maps API", "Cloudinary"],
    results: "10,000+ active listings, 2x increase in lead generation within 6 months",
  },
];

function CaseStudies() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#020817] via-[#03111f] to-[#061726] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Real projects. Real results. Explore how we&apos;ve helped businesses transform.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-[#020817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Work"
            title="Project Showcase"
            description="A selection of projects that demonstrate our expertise across industries and technology domains."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.title} {...cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-14 bg-[#03111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Satisfied Clients" },
              { value: "98%", label: "On-Time Delivery Rate" },
              { value: "4.9★", label: "Average Client Rating" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-6">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="bg-gradient-to-r from-cyan-500/10 via-[#03111f] to-green-500/10 py-14 border-y border-cyan-500/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Worked with Us? Share Your Experience.
          </h2>
          <p className="text-gray-400 mb-7">
            Your feedback helps other businesses make confident decisions.
          </p>
          <NavLink
            to="/reviews"
            className="inline-block bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-3.5 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Leave a Review →
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
