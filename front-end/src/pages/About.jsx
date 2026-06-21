import SectionTitle from "../components/SectionTitle";

const team = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    bio: "15+ years in enterprise technology. Passionate about helping businesses scale through innovation.",
    initial: "A",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Full-stack architect with deep expertise in cloud-native systems and distributed applications.",
    initial: "P",
  },
  {
    name: "James Lee",
    role: "Head of Design",
    bio: "Award-winning UI/UX designer focused on creating intuitive, human-centered digital experiences.",
    initial: "J",
  },
  {
    name: "Lisa Chen",
    role: "Lead Developer",
    bio: "10+ years building scalable applications. Expert in React, Node.js, and microservices.",
    initial: "L",
  },
];

const timeline = [
  { year: "2016", event: "Founded MaviIT Solutions in Silicon Valley" },
  { year: "2018", event: "Reached 30 enterprise clients across 5 industries" },
  { year: "2020", event: "Launched Cloud Practice and partnered with AWS" },
  { year: "2022", event: "Expanded team to 80+ professionals globally" },
  { year: "2024", event: "Delivered 150+ projects, 50+ satisfied clients" },
];

function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#020817] via-[#03111f] to-[#061726] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About MaviIT</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A passionate team of technologists dedicated to building the digital future.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-[#020817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-5">
                Technology That Drives Growth
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                MaviIT Solutions is a full-service IT company with over 8 years of experience delivering
                innovative technology solutions to businesses worldwide. We specialize in web development,
                mobile apps, cloud services, and IT consulting.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team of 80+ passionate professionals works closely with clients to understand their
                unique challenges and deliver tailored solutions that create measurable business value.
              </p>
            </div>
            {/* Stats Grid */}
            <div className="flex-1 grid grid-cols-2 gap-5 w-full max-w-md">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "80+", label: "Team Members" },
                { value: "8+", label: "Years Experience" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 text-center"
                >
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#03111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.03)]">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses of all sizes with innovative, reliable, and scalable technology
                solutions that enable sustainable growth and digital transformation.
              </p>
            </div>
            <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.03)]">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the most trusted technology partner for businesses globally — known for quality,
                innovation, and our unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-[#020817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our People"
            title="Meet the Team"
            description="A diverse group of experts united by a passion for technology and client success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">{member.initial}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#03111f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Our Journey" title="Company Milestones" />
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan-500/20" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-black text-xs font-bold">{item.year.slice(2)}</span>
                  </div>
                  <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-xl p-4 flex-1 mt-1">
                    <p className="text-cyan-400 text-xs font-semibold mb-1">{item.year}</p>
                    <p className="text-gray-300 font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
