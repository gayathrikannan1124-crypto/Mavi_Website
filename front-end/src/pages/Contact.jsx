import { useState } from "react";

const contactInfo = [
  {
    icon: "📍",
    title: "Address",
    detail: "123 Tech Park, Silicon Valley, CA 94025",
  },
  {
    icon: "📞",
    title: "Phone",
    detail: "+1 (123) 456-7890",
  },
  {
    icon: "✉️",
    title: "Email",
    detail: "info@mavit.com",
  },
  {
    icon: "🕐",
    title: "Business Hours",
    detail: "Mon – Fri: 9:00 AM – 6:00 PM",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    setSubmitted(true);
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#020817] via-[#03111f] to-[#061726] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[300px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Let&apos;s start a conversation. We&apos;d love to hear about your project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[#020817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill in the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-cyan-400 text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-cyan-400 transition-all"
                    >
                      <option value="" className="bg-[#03111f]">Select a service</option>
                      <option className="bg-[#03111f]">Web Development</option>
                      <option className="bg-[#03111f]">Mobile App Development</option>
                      <option className="bg-[#03111f]">UI/UX Design</option>
                      <option className="bg-[#03111f]">Cloud Solutions</option>
                      <option className="bg-[#03111f]">IT Consulting</option>
                      <option className="bg-[#03111f]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-green-400 text-black py-3.5 rounded-xl font-semibold text-base hover:scale-[1.02] transition-all duration-300"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex gap-4 items-start bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-xl p-4"
                    >
                      <span className="text-2xl mt-0.5">{info.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {info.title}
                        </p>
                        <p className="text-gray-300 text-sm font-medium mt-0.5">{info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl overflow-hidden flex-1 min-h-48">
                <div className="w-full h-full min-h-48 flex items-center justify-center bg-gradient-to-br from-[#03111f] to-[#061726]">
                  <div className="text-center">
                    <span className="text-5xl">🗺️</span>
                    <p className="text-gray-400 mt-3 font-medium text-sm">
                      123 Tech Park, Silicon Valley
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-cyan-400 text-sm font-medium hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", icon: "in" },
                    { name: "Twitter", icon: "𝕏" },
                    { name: "Facebook", icon: "f" },
                    { name: "Instagram", icon: "ig" },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      aria-label={s.name}
                      className="w-10 h-10 bg-white/5 border border-cyan-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:bg-cyan-400/10 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200 text-sm font-bold"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
