import React from 'react';
import './LittleCard.css';
import card_nom from '../../images/nom.svg';

function LittleCard(props) {
  return (
    <div className={`little__card ${props.isBlue ? `card_blue` : ``}`}>
        <img className='little__image' alt="" src={props.photo_link} />
        <p className={`little__title ${props.isBlue ? `blueTheme` : ``}`}>{props.title}</p>
        <p className={`little__text ${props.isBlue ? `blueTheme` : ``}`}>{props.text}</p>
    </div>
  );
}

export default LittleCard;
