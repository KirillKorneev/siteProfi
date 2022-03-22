import React from 'react';
import './CardsList.css';
import Card from '../Card/Card.js';

const CardsList = (props) => {

    return (
        <div className='listt'>
            <div className='listt__content'>
                <p className='listt__title'>{props.title}</p>
                <div className='listt__cards'>
                    {
                        props.articles.map((card) => {
                            return <Card 
                                photo_link = {card.photo_link}
                                title = {card.title}
                                text = {card.text}
                                price = {card.price}
                                prePrice = {card.prePrice}
                                days = {card.days}
                                isBlue = {props.isBlue}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CardsList;