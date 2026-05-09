export default function ReviewItem({ review }) {
  return (
    <div className="border p-2 mb-2">
      <p>{review.text}</p>
      <small>Vote: {review.vote}</small>
    </div>
  );
}