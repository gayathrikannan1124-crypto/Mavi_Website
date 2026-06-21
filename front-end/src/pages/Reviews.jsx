import { useState, useEffect } from "react";
import API from "../api/axios";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import SectionTitle from "../components/SectionTitle";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Track which review is being edited (null = create mode)
  const [editReview, setEditReview] = useState(null);

  // ─── Fetch all reviews from MongoDB on mount ───────────────────────────────
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await API.get("/reviews");
      setReviews(res.data);
    } catch (err) {
      setError("Failed to load reviews. Please make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  // ─── CREATE: Add new review to the top of the list ────────────────────────
  const handleReviewAdded = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  // ─── UPDATE: Replace updated review in state ───────────────────────────────
  const handleReviewUpdated = (updatedReview) => {
    setReviews((prev) =>
      prev.map((r) => (r._id === updatedReview._id ? updatedReview : r))
    );
    setEditReview(null); // exit edit mode
  };

  // ─── DELETE: Remove review from state ─────────────────────────────────────
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    try {
      await API.delete(`/reviews/${id}`);
      setReviews((prev) => prev.filter((r) => r._id !== id));
      // If deleting the review currently being edited, cancel edit
      if (editReview && editReview._id === id) setEditReview(null);
    } catch (err) {
      alert("Failed to delete review. Try again.");
    }
  };

  // ─── EDIT: Enter edit mode for a review ───────────────────────────────────
  const handleEdit = (review) => {
    setEditReview(review);
    // Scroll to top of form on mobile
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditReview(null);
  };

  return (
    <div>
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#020817] via-[#03111f] to-[#061726] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Client Reviews</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Hear directly from the businesses we&apos;ve helped grow.
          </p>
        </div>
      </section>

      {/* ── Review Form + List ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#020817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left — Submit / Edit Form */}
            <div className="lg:col-span-1">
              {/* Edit mode banner */}
              {editReview && (
                <div className="mb-4 bg-cyan-400/10 border border-cyan-500/20 text-cyan-400 rounded-xl px-4 py-2.5 text-sm flex items-center justify-between">
                  <span>✏️ Editing review by <strong>{editReview.name}</strong></span>
                  <button
                    onClick={handleCancelEdit}
                    className="text-cyan-400/60 hover:text-cyan-400 font-medium ml-3"
                  >
                    ✕
                  </button>
                </div>
              )}
              <ReviewForm
                onReviewAdded={handleReviewAdded}
                onReviewUpdated={handleReviewUpdated}
                editReview={editReview}
                onCancelEdit={handleCancelEdit}
              />
            </div>

            {/* Right — Reviews List */}
            <div className="lg:col-span-2">
              <SectionTitle
                subtitle="What Clients Say"
                title={`${reviews.length} Review${reviews.length !== 1 ? "s" : ""}`}
                centered={false}
              />

              {/* Loading spinner */}
              {loading && (
                <div className="flex items-center justify-center py-16">
                  <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 text-sm flex items-center justify-between">
                  <span>{error}</span>
                  <button
                    onClick={fetchReviews}
                    className="ml-4 text-red-400 font-semibold underline text-xs hover:no-underline"
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Empty state */}
              {!loading && !error && reviews.length === 0 && (
                <div className="text-center py-16 text-gray-500">
                  <p className="text-5xl mb-4">💬</p>
                  <p className="font-medium text-lg text-gray-400">No reviews yet.</p>
                  <p className="text-sm mt-1">Be the first to share your experience!</p>
                </div>
              )}

              {/* Reviews grid */}
              {!loading && reviews.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {reviews.map((review) => (
                    <ReviewCard
                      key={review._id}
                      review={review}
                      onDelete={handleDelete}
                      onEdit={handleEdit}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
