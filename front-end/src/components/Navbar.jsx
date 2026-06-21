import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
  { to: "/reviews", label: "Reviews" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-0.5"
      : "text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200";

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#020817]/80 backdrop-blur-lg border-b transition-all duration-300 ${
        scrolled ? "border-cyan-500/20 shadow-[0_4px_30px_rgba(34,211,238,0.05)]" : "border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Mavi<span className="text-cyan-400">IT</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-gray-400 mr-1">
                  👋 {user.username || user.email?.split("@")[0] || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-white/5 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-500/10 hover:border-red-400 transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:text-cyan-400 transition-colors duration-200"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-gradient-to-r from-cyan-400 to-green-400 text-black px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        navLinks={navLinks}
        linkClass={linkClass}
        onClose={closeMenu}
        user={user}
        onLogout={handleLogout}
      />
    </nav>
  );
}

export default Navbar;
