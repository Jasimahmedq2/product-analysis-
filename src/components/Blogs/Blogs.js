import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
      <h2>this is blogs page</h2>
      <div className='d-flex container'>
        <div className='context-style shadow-lg bg-body '>
          <h4>context Api</h4>
        Context api is a way for a React app to effectively produce global variables.context api uses pass data evry components easily.Context api a separate storage space is created outside the Component tree. 
        
        </div>
        <div className='semantic-style shadow-lg bg-body'>
          <h4>semantic tag</h4>
        Semantic HTML elements are those that clearly describe their meaning in a human and machine readable way.
        For sighted user when a page is well designed visually, it is easy to identify the various parts of a web page at a glance.
        </div>
      </div>
    </div>
  );
};

export default Blogs;