import React from 'react';
import './Card.css';
import card_nom from '../../images/nom.svg';
import wallet_blue from '../../images/walletBlue.svg';

import { Link } from 'react-router-dom';

function Card(props) {

  const data = {
    id: props.id,
    photo_link: props.photo_link,
    title: props.title,
    text: props.text,
    desc: props.desc,
    price: props.price,
    prePrice: props.prePrice,
    days: props.days,
    category: props.category,
    information: props.information,
    owner: props.owner
  }

  function handleClick() {
    props.handleClick(data);
  }

  return (
    <div className={`card ${props.isBlue ? `card_blue` : ``}`}>
      <Link to={`/project/${props.id}`} onClick={handleClick}>
        <img className='card__image' alt="" src={props.photo_link} />
      </Link>
        <Link className='title' to={`/project/${props.id}`} onClick={handleClick}>
          <p className={`card__title ${props.isBlue ? `blueTheme` : ``}`}>{props.title}</p>
        </Link>
        <p className={`card__text ${props.isBlue ? `blueTheme` : ``}`}>{props.text}</p>
        <div className='card__info'>
            <p className={`card__price ${props.isBlue ? `blueTheme` : ``}`}>{props.price}</p>
            <img className='card__nom' alt="" src={props.isBlue ? card_nom : wallet_blue} />
        </div>
        <div className='card__info card_whites'>
            <p className={`card__price card_whites ${props.isBlue ? `blueTheme blueTheme_wh` : ``}`}>{`from ${props.prePrice}`}</p>
            <img className='card__nom card__nom_whites' alt="" src={props.isBlue ? card_nom : wallet_blue} />
        </div>
        <p className='card__days'>{`${props.days} days rest`}</p>
    </div>
  );
}

export default Card;
