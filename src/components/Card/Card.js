import React from 'react';
import './Card.css';
import card_nom from '../../images/nom.svg';

function Card(props) {
  return (
    <div className={`card ${props.isBlue ? `card_blue` : ``}`}>
        <img className='card__image' alt="" src={props.photo_link} />
        <p className={`card__title ${props.isBlue ? `blueTheme` : ``}`}>{props.title}</p>
        <p className={`card__text ${props.isBlue ? `blueTheme` : ``}`}>{props.text}</p>
        <div className='card__info'>
            <p className={`card__price ${props.isBlue ? `blueTheme` : ``}`}>{props.price}</p>
            <img className='card__nom' alt="" src={card_nom} />
        </div>
        <div className='card__info card_whites'>
            <p className={`card__price card_whites ${props.isBlue ? `blueTheme blueTheme_wh` : ``}`}>{`from ${props.prePrice}`}</p>
            <img className='card__nom card__nom_whites' alt="" src={card_nom} />
        </div>
        <p className='card__days'>{`${props.days} days rest`}</p>
    </div>
  );
}

export default Card;
