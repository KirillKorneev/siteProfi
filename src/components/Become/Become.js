import React from 'react';
import './Become.css';

function Become() {

    return (
        <div className='become'>
            <div className='become__content'>
                <h1 className='become__title'>
                    Invest with minimal risks & <span className='become__title_yellow'>multiply your contributions</span>
                </h1>
                <p className='become__text'>
                    secure transactions, minimal risks of investments <span className='become__text_dark'>based on cryptocurrency</span>
                </p>
                <button className='become__button'>
                    Become an investor
                </button>
            </div>
        </div>
    );
}

export default Become;