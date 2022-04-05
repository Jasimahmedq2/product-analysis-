import React from 'react';
import './Reviewer.css'

const ReviewItem = ({reviewer}) => {
  const {name, image, rating, about } = reviewer

  return (
    <div>
      <div className='card-style shadow-lg bg-body rounded'>
      <img src={image} alt="" />
      <p>name:{name}</p>
      <p>{about}</p>
      <p>rating: {rating}</p>
      </div>
    </div>
   
  );
};

export default ReviewItem;