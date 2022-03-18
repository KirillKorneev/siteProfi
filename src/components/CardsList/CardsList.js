import React from 'react';
import './CardsList.css';
import Card from '../Card/Card.js';

const CardsList = (props) => {

    return (
        <div className='list'>
            <div className='list__content'>
                <p className='list__title'> Just started </p>
                <div className='list__cards'>
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