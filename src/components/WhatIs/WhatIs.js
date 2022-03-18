import React from 'react';
import './WhatIs.css';
import im1 from '../../images/security.svg';
import im2 from '../../images/rocket.svg';
import im3 from '../../images/man.svg';
import im4 from '../../images/square.svg';

function WhatIs() {

  return (
    <div className='component'>
        <div className='component__content'>
            <p className='component__title'>
                What is FundFlow?
            </p>
            <div className='component__bars'>
                <div className='component__bar'>
                    <img src={im1} alt="" className='component__photo'/>
                    <p className='component__text'>Secure transactions</p>
                </div>
                <div className='component__bar'>
                    <img src={im2} alt="" className='component__photo'/>
                    <p className='component__text'>Lots of perspective projects</p>
                </div>
                <div className='component__bar'>
                    <img src={im3} alt="" className='component__photo'/>
                    <p className='component__text'>Lots of investors</p>
                </div>
                <div className='component__bar'>
                    <img src={im4} alt="" className='component__photo'/>
                    <p className='component__text'>Minimal risks of investments</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WhatIs;
