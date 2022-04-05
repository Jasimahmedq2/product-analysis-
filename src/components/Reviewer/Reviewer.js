import React from 'react';
import './Reviewer.css'

const ReviewItem = ({reviewer}) => {
  const {name, image, rating, about } = reviewer

  return (
    <div>
      <div className='card-style shadow-lg bg-body rounded'>
      <img src={image} alt="" />
      <h4 className='name-style'>name:{name}</h4>
      <h6>{about}</h6>
      <h5>rating: <span className='rating'>{rating}</span></h5>
      </div>
    </div>
   
  );
};

export default ReviewItem;