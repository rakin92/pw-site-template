
import React from 'react';

import loaderImg from './img/loader.svg';
import './Loader.scss'

function Loader() {
  return(
    <div id='preloader'>
      <div className='loader'>
        <div className='img'>
          <img src={loaderImg} alt=""/>
        </div>
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default Loader;