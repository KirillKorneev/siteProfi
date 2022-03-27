import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

import im from '../../images/rec1.png';

function NewsCard(props) {

    return (
        <div className='news'>
            <div className='news__content'>
                <img src={im} alt="" className='news__photo' />
                <div className='news__info'>
                    <p className='news__title'>{props.card.title}</p>
                    <p className='news__author'>{props.card.text}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;