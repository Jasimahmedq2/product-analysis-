import React from 'react';
import './Reviewers.css'

const Reviewers = ({reviewer}) => {
  const {image, name, about, rating} = reviewer;
  return (
    <div>
      <div className='reviewers-container shadow-lg bg-body rounded'>
        <img src={image} alt="" />
        <p>name: {name}</p>
        <p>{about}</p>
        <p>rating:{rating}</p>
      </div>
    </div>
  );
};

export default Reviewers;