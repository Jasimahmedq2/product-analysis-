import React, { useState } from 'react';
import stock from '../../image/stock.png'
import useReview from '../useReview/useReview';
import Reviewer from '../Reviewer/Reviewer';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
const [review, setReview] = useReview()
const navigat = useNavigate();
  return (
    <div className='parent-container row mt-5'>   
      <div className='col-7'>
        <h2 className='name-style'>REPAIRBD</h2>
      <h2 className='home-title'>professional computer repair services</h2>
      <h6>
        welcome to repairBD, your one-stop place <span>all kinds of computer repairs and diagnostics.</span> 
       <h6> repair computer any problem at 24 hours.</h6>

      </h6>
      <button className='btn btn-primary px-5 px-2 '>About us</button>
    </div>
      <div className='col-5 image-position'>
       <img className='h-100 w-100' src={stock} alt="" />
      </div>
      <div>


       <div className='card-container'>
        {
        review.slice(0,3).map(reviewer => <Reviewer key={reviewer.id}
          reviewer={reviewer}
        ></Reviewer> )
        
      }
      </div>
      
      </div>
      <div className='btn-container my-3'>
      <button className='btn btn-primary px-5' onClick={() => navigat('/review')}>see more</button>
      </div>
    </div>
  
  );
};

export default Home;