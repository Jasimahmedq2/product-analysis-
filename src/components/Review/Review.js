import React from 'react';
import Customhook from '../CustomHook/CustomHook';
import Reviewers from '../Reviewers/Reviewers';

const Review = () => {
  const [review, setReview] = Customhook()
  return (
    <div>
      All users Review
      {
        review.map(reviewer => <Reviewers key={reviewer.id}
        reviewer={reviewer}
        ></Reviewers>)
      }
    </div>
  );
};

export default Review;