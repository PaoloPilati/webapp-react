import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews = [] }) {
  return (
    <div>
      {reviews.length === 0 ? (<p>No reviews</p>) : (reviews.map(review => (
          <ReviewItem key={review.id} review={review}/>
        ))
      )}
    </div>
  );
}