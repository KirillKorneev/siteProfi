import React from 'react';
import './Become.css';

import rock1 from '../../images/BiggestRock.png';
import rock2 from '../../images/PreBiggestRock.png';
import rock3 from '../../images/MiddleRock.png';
import rock4 from '../../images/SmallestRock.png';

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { propTypes } from 'react-grid-carousel';

function Become(props) {

    return (
        <div class="bec">
        <div className='become'>
            <div className='become__right'>
                <img className='become__pbRock' src={rock2} alt="" />
                <img className='become__mRoc' src={rock3} alt="" />
                <img className='become__sRoc' src={rock4} alt="" />
            </div>
            <div className='become__middle'>
                <div className='become__content'>
                    <h1 className='become__title'>
                        Invest with minimal risks & <span className='become__title_yellow'>multiply your contributions</span>
                    </h1>
                    <p className='become__text'>
                        secure transactions, minimal risks of investments <span className='become__text_dark'>based on cryptocurrency</span>
                    </p>
                    {
                        !props.isLogged ?
                        <Link className='become__button' smooth={true} to="anchor">
                            Become an investor
                        </Link> :
                        <Link className='become__button' smooth={true}>
                            Become an investor
                        </Link>
                    }
                </div>
            </div>
            <div className='become__right'>
                <img className='become__bRock' src={rock1} alt="" />
            </div>
        </div>
        </div>
    );
}

export default Become;