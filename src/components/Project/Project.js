/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Project.css';

import CardsBar from '../CardsBar/CardsBar';
import ProgressBar from '../ProgressBar/ProgressBar';

import price from '../../images/priceBlack.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Project(props) {
    const { id } = useParams()
    const comp = Number.parseInt(props.card.price) / Number.parseInt(props.card.prePrice) * 100;
    const currentUser = React.useContext(CurrentUserContext);

    function onClick() {
        console.log('clicked');
    }

    function updateCard() {
        props.updateCard(props.card);
    }



    return (
        <div className='project__content'>
            <div className='project__top'>
                <img className="project__photo" src={props.card.photo_link} alt="" />
                <div className='project__info'>
                    <div className='project__height'>
                        <p className='project__title'>{props.card.title}</p>
                        {
                            props.card.owner === currentUser.id ?
                            <Link className='project__updateBut' onClick={updateCard} to="/projectupdate"></Link> :
                            ''
                        }
                    </div>
                    <p className='project__desc'>{props.card.desc}</p>
                    <div className='project__name'>
                        <p className='project__prefix'>By</p>
                        <p className='project__company'>{props.card.text}</p>
                    </div>
                    <div className='project__price'>
                        <p className='project__number'>{props.card.price}</p>
                        <img className='project__wallet' src={price} alt="" />
                    </div>
                    <p className='project__prePrice'>{`from ${props.card.prePrice} contributed`}</p>
                    <ProgressBar  
                        completed={comp}
                    />
                    {
                        props.card.owner === currentUser.id ?
                        <button disabled onClick={onClick} className='project__button'>Contribute</button> :
                        <button onClick={onClick} className='project__button'>Contribute</button>
                    }
                </div>
            </div>
            <div className='project__bottom'>
                <p className='project__inform'>{props.card.information}</p>
            </div>
        </div>
    );
}

export default Project;