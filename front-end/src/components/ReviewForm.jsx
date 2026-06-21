import { useState, useEffect } from "react";
import API from "../api/axios";

// Interactive clickable stars for selecting a rating
function StarPicker({ rating, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className={`text-2xl transition-colors duration-150 ${
            star <= (hovered || rating) ? "text-yellow-400" : "text-gray-600"
          }`}
          aria-label={`Rate ${star} star`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

// ReviewForm handles both CREATE and EDIT (UPDATE) modes
function ReviewForm({ onReviewAdded, onReviewUpdated, editReview, onCancelEdit }) {
  const isEditMode = Boolean(editReview);

  const emptyForm = { name: "", company: "", message: "", rating: 0 };

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // When editReview changes, pre-fill the form
  useEffect(() => {
    if (editReview) {
      setForm({
        name: editReview.name || "",
        company: editReview.company || "",
        message: editReview.message || "",
        rating: editReview.rating || 0,
      });
      setSuccess(false);
      setError("");
    } else {
      setForm(emptyForm);
    }
  }, [editReview]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.rating === 0) {
      setError("Please select a star rating.");
      return;
    }

    setLoading(true);
    try {
      if (isEditMode) {
        // PUT /api/reviews/:id — Update existing review
        const res = await API.put(`/reviews/${editReview._id}`, form);
        onReviewUpdated && onReviewUpdated(res.data);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2500);
      } else {
        // POST /api/reviews — Create new review
        const res = await API.post("/reviews", form);
        onReviewAdded && onReviewAdded(res.data);
        setSuccess(true);
        setForm(emptyForm);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit review. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,255,255,0.03)]">
      <h3 className="text-xl font-bold text-white mb-1">
        {isEditMode ? "Edit Review" : "Write a Review"}
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        {isEditMode
          ? "Update your review details below."
          : "Share your experience working with MaviIT."}
      </p>

      {success && (
        <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-sm mb-5">
          ✅ {isEditMode ? "Review updated successfully!" : "Review submitted successfully! Thank you."}
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm mb-5">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Smith"
              className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Company <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your Company"
              className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Rating <span className="text-red-400">*</span>
          </label>
          <StarPicker rating={form.rating} onChange={(val) => setForm({ ...form, rating: val })} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Your Review <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell us about your experience..."
            className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-cyan-400 to-green-400 text-black py-3 rounded-xl font-semibold text-sm hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading
              ? isEditMode ? "Updating..." : "Submitting..."
              : isEditMode ? "Update Review ✓" : "Submit Review →"}
          </button>

          {isEditMode && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="px-5 py-3 rounded-xl border border-white/10 text-gray-400 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-200"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
