import React from 'react';
import './CardsBar.css';
import img from '../../images/card_im.png';

import Carousel from 'react-grid-carousel';
import Card from '../Card/Card';

const CardsBar = (props) => {

    return (
        <div className='cards'>
            <Carousel cols={4} rows={1} gap={19} >
                {
                    props.articles.map((card) => 
                        <Carousel.Item>
                            <Card 
                                id = {card.id}
                                photo_link = {card.photo_link}
                                title = {card.title}
                                text = {card.text}
                                desc = {card.desc}
                                price = {card.price}
                                prePrice = {card.prePrice}
                                days = {card.days}
                                category = {card.category}
                                information = {card.information}
                                isBlue = {props.isBlue}
                                handleClick = {props.handleClick}
                                owner = {card.owner}
                            />
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    );
}

export default CardsBar;
