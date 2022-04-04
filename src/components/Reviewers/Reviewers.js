import React from 'react';

const Reviewers = ({reviewer}) => {
  const {image, name, about, rating} = reviewer;
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <p>name: {name}</p>
        <p>{about}</p>
        <p>rating:{rating}</p>
      </div>
    </div>
  );
};

export default Reviewers;