import React from 'react';
import './Reviewers.css'

const Reviewers = ({reviewer}) => {
  const {image, name, about, rating} = reviewer;
  return (
    <div>
      <div className='reviewers-container shadow-lg bg-body rounded'>
        <img src={image} alt="" />
        <h4 className='name-style'>{name}</h4>
        <h6>{about}</h6>
        <h5>rating:  <span className='rating'>{rating}</span></h5>
      </div>
    </div>
  );
};

export default Reviewers;