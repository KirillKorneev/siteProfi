import React from 'react';
import './LittleCardsBar.css';
import LittleCard from '../LittleCard/LittleCard';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const LittleCardsBar = (props) => {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div className='little'>
            <div className='little__cards'>
                {
                    // eslint-disable-next-line array-callback-return
                    props.articles.map((card) => { 
                        console.log(currentUser);
                        console.log(card);
                        currentUser.id === card.owner ?
                        <LittleCard 
                            photo_link = {card.photo_link}
                            title = {card.title}
                            text = {card.text}
                        /> : <></>
                    })
                }
            </div>
        </div>
    );
}

export default LittleCardsBar;