import React from 'react';
import useReview from '../useReview/useReview';
import Reviewers from '../Reviewers/Reviewers';
import './Review.css'


const Review = () => {
  const [review, setReview] = useReview()
  return (
    <div>
      All users Review
      <div className='review-container'>
      {
        review.map(reviewer => <Reviewers key={reviewer.id}
        reviewer={reviewer}
        ></Reviewers>)
      }
      </div>
     
    </div>
  );
};

export default Review;