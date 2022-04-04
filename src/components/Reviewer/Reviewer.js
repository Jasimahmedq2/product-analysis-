import React from 'react';

const ReviewItem = ({reviewer}) => {
  const {name, image, rating, about } = reviewer

  return (
    <div>
      <div>
      <img src={image} alt="" />
      <p>name:{name}</p>
      <p>{about}</p>
      <p>rating: {rating}</p>
      </div>
    </div>
   
  );
};

export default ReviewItem;