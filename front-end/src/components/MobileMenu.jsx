import { NavLink } from "react-router-dom";

function MobileMenu({ isOpen, navLinks, linkClass, onClose, user, onLogout }) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-[#03111f] border-t border-cyan-500/10 px-4 py-4 flex flex-col gap-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={linkClass}
            onClick={onClose}
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}

        {/* Auth section */}
        <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-400">
                Signed in as <strong className="text-cyan-400">{user.username || user.email?.split("@")[0]}</strong>
              </span>
              <button
                onClick={onLogout}
                className="bg-white/5 border border-red-500/30 text-red-400 px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-red-500/10 transition-all duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={onClose}
                className="text-gray-300 px-5 py-2.5 rounded-lg text-sm font-semibold text-center border border-cyan-500/20 hover:border-cyan-400 transition-all duration-200"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/register"
                onClick={onClose}
                className="bg-gradient-to-r from-cyan-400 to-green-400 text-black px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:scale-105 transition-all duration-300"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
