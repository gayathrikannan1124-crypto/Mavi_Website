import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ useremail: "", userpassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.useremail || !form.userpassword) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/user/login", form);
      // Save token + user details in context
      login({
        token: res.data.token,
        username: res.data.username,
        email: res.data.useremail,
      });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#020817] px-4 py-16 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-bold text-xl">M</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Sign in to your MaviIT account</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_60px_rgba(34,211,238,0.05)]">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="useremail"
                value={form.useremail}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="userpassword"
                value={form.userpassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-400 to-green-400 text-black py-3 rounded-xl font-semibold text-sm hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <NavLink
              to="/register"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Create one
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
