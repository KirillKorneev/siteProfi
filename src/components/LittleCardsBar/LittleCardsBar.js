import React from 'react';
import './LittleCardsBar.css';
import LittleCard from '../LittleCard/LittleCard.js'
import { CurrentUserContext } from '../../context/CurrentUserContext';

const LittleCardsBar = (props) => {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div className='little'>
            <div className='little__cards'>
                {
                    props.articles.map((card) => 
                        currentUser.id === card.owner ?
                        <LittleCard 
                            photo_link = {card.photo_link}
                            title = {card.title}
                            text = {card.text}
                        /> : <></>
                    )
                }
            </div>
        </div>
    );
}

export default LittleCardsBar;