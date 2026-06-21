import { NavLink } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "IT Consulting",
];

function Footer() {
  return (
    <footer className="bg-[#020817] text-gray-400 border-t border-cyan-500/10">
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white">
                Mavi<span className="text-cyan-400">IT</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Transforming businesses through innovative technology solutions. Your trusted IT partner for growth and digital excellence.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-white/5 border border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-cyan-400/10 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200 text-xs font-semibold"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-500">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>123 Tech Park, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+11234567890" className="hover:text-cyan-400 transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@mavit.com" className="hover:text-cyan-400 transition-colors">info@mavit.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} MaviIT Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
