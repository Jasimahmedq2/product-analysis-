import React from 'react';
import useReview from '../useReview/useReview';
import Reviewers from '../Reviewers/Reviewers';
import './Review.css'


const Review = () => {
  const [review, setReview] = useReview()
  return (
    <div>
      <h2 className='my-3 review-title'>whate is say, our customar</h2>
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