import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBar.css';
import im1 from '../../images/title_im.png';

function LeftBar(props) {

    return (
        <div className='left'>
            <p className='left__title'>Featured project</p>
            <div className='border'>
                <Link to={`/project/${props.featuredCard.id}`}>
                    <img src={props.featuredCard.photo_link} alt="" className='left__photo' />
                </Link>
            </div>
            <Link className='left__text' to={`/project/${props.featuredCard.id}`}>
                <p className='left__text'>{props.featuredCard.title}</p>
            </Link>
            <p className='left__span'>{props.featuredCard.text}</p>
        </div>
    );
}

export default LeftBar;