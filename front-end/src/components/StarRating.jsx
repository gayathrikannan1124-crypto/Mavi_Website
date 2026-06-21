// Renders filled and empty stars based on rating (1–5)
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${star <= rating ? "text-yellow-400" : "text-gray-600"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
