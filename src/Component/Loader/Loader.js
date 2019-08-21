
import React from 'react';

function Loader() {
  return(
    <div id='preloader'>
      <div className='loader'>
        <div className='img'>
          <img src='img/loader.svg' alt=""/>
        </div>
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default Loader;