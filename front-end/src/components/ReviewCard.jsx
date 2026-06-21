import StarRating from "./StarRating";

function ReviewCard({ review, onDelete, onEdit }) {
  // Format the date nicely
  const date = new Date(review.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white/5 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.03)] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] transition-shadow duration-200 flex flex-col gap-4">
      {/* Rating */}
      <StarRating rating={review.rating} />

      {/* Message */}
      <p className="text-gray-300 text-sm leading-relaxed italic">
        &ldquo;{review.message}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
        <div>
          <p className="text-white font-semibold text-sm">{review.name}</p>
          {review.company && (
            <p className="text-cyan-400 text-xs mt-0.5">{review.company}</p>
          )}
          <p className="text-gray-500 text-xs mt-1">{date}</p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {onEdit && (
            <button
              onClick={() => onEdit(review)}
              className="text-cyan-400/70 hover:text-cyan-400 text-xs font-medium transition-colors duration-200"
              aria-label="Edit review"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(review._id)}
              className="text-red-400/70 hover:text-red-400 text-xs font-medium transition-colors duration-200"
              aria-label="Delete review"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
