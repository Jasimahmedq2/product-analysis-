import React, { useState } from 'react';
import stock from '../../image/stock.png'
import Customhook from '../CustomHook/CustomHook';
import Reviewer from '../Reviewer/Reviewer';
import './Home.css'

const Home = () => {
const [review, setReview] = Customhook()
  return (
    <div className='parent-container row container'>   
      <div className='col-7'>
      <h3 style={{color: 'black'}}>Investor</h3>
      <h2 style={{color: 'orange'}}>The Best Company in Bangladesh</h2>
      <h2 style={{color: 'blue'}}>Invest your Money And Grow Money More</h2>
      <button className='btn btn-primary px-5 px-2 '>see more</button>
    </div>
      <div className='col-5 image-position'>
       <img className='h-100 w-100' src={stock} alt="" />
      </div>
      <div>
        
      {
        review.slice(0,3).map(reviewer => <Reviewer key={reviewer.id}
          reviewer={reviewer}
        ></Reviewer> )
        
      }
      
      </div>
      <div>
      <button>see more</button>
      </div>
    </div>
  
  );
};

export default Home;