import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

import im from '../../images/rec1.png';

function NewsCard(props) {

    return (
        <div className='news'>
            <div className='news__content'>
                <Link className='news__photo' to={`/project/${props.card.id}`}>
                    <img src={im} alt="" className='news__photo' />
                </Link>
                <div className='news__info'>
                    <Link className='news__title' to={`/project/${props.card.id}`}>
                        <p className='news__title'>{props.card.title}</p>
                    </Link>
                    <p className='news__author'>{props.card.text}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;