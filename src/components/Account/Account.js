import React from 'react';
import { Route, Redirect, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Account.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import defaultPhoto from '../../images/UserPhoto.png';
import walley from '../../images/blueWallet.svg';
import exit  from '../../images/exit.svg';

import LittleCardsBar from '../LittleCardsBar/LittleCardsBar';

import { CurrentUserContext } from '../../context/CurrentUserContext';

function Account(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <Header
                isGrey = {false}
                isLogged = {props.isLogged}
            />
            <div className='acc'>
                <div className='acc__left'>
                    <img className='acc__photo' alt="" src={currentUser.photo ? currentUser.photo : defaultPhoto}/>
                    <div className='acc__balanceInfo'>
                        <p className='acc__balanceText'>Balance</p>
                        <div className='acc__balancePrice'>
                            <p className='acc__balanceNum'>{currentUser.balance}</p>
                            <img className='acc__balanceWallet' src={walley} alt="" />
                        </div>
                    </div>
                    <div className='acc__nav'>
                        <Link to='/' className='acc__link'>My Projects</Link>
                        <Link to='/' className='acc__link acc__link_pad'>My Investments</Link>
                        <Link to='/' className='acc__link acc__link_pad'>Settings</Link>
                    </div>
                    <div className='acc__exit'>
                        <img src={exit} alt="" className='acc__exitImage' />
                        <button className='acc__exitButton'>Exit</button>
                    </div>
                </div>
                <div className='acc__right'>
                    <p className='acc__name'>{`${currentUser.name} ${currentUser.surname}`}</p>
                    <p className='acc__title'>{props.isAccount ? `Projects` : `Investments`}</p>
                    <LittleCardsBar
                        articles = {props.articles}
                        isLogged = {props.isLogged}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Account;