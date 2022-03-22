/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
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
    const [data, setData] = React.useState({
        nameSet: '',
        surnameSet: '',
        emailSet: currentUser.email,
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setData((prevData) => ( {
            ...prevData,
            [name]: value
        }))
    }

    const { nameSet, surnameSet, emailSet } = data;


    return (
        <>
            <Header
                isGrey = {false}
                isLogged = {props.isLogged}
                isAccount = {props.isAccount}
                isSettings = {props.isSettings}
                isInvestments = {props.isInvestments}
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
                        <Link to='/account' className='acc__link'>My Projects</Link>
                        <Link to='/investments' className='acc__link acc__link_pad'>My Investments</Link>
                        <Link to='/settings' className='acc__link acc__link_pad'>Settings</Link>
                    </div>
                    <div className='acc__exit'>
                        <img src={exit} alt="" className='acc__exitImage' />
                        <button className='acc__exitButton'>Exit</button>
                    </div>
                </div>
                <div className='acc__right'>
                    {
                        props.isSettings ? 
                        <>
                            <p className='acc__name'>{`${currentUser.name} ${currentUser.surname}`}</p>
                            <p className='acc__title settings'>Settings</p>
                            <form className='acc__form'>
                                <div className='acc__dataName'>
                                    <div className='acc__nameSet'>
                                        <p className='acc__imputText'>Name:</p>
                                        <input 
                                            className='acc__input' 
                                            value={nameSet} 
                                            onChange={handleChange} 
                                            id="email-input-login"
                                            type="text" 
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className='acc__surname'>
                                        <p className='acc__imputText'>Surname:</p>
                                        <input 
                                            className='acc__input' 
                                            value={surnameSet} 
                                            onChange={handleChange} 
                                            id="email-input-login"
                                            type="text" 
                                            placeholder="Surname"
                                        />
                                    </div>
                                </div>
                                <div className='acc__email'>
                                    <p className='acc__imputText'>Email:</p>
                                    <input 
                                        className='acc__input' 
                                        value={emailSet} 
                                        onChange={handleChange} 
                                        id="email-input-login"
                                        type="text" 
                                        placeholder="Email"
                                    />
                                </div>
                                <div className='acc__uploadPhoto'>

                                </div>
                            </form>
                        </>
                        :
                        <>
                            <p className='acc__name'>{`${currentUser.name} ${currentUser.surname}`}</p>
                            <p className='acc__title'>{props.isAccount ? `Projects` : `Investments`}</p>
                            <LittleCardsBar
                                articles = {props.articles}
                                isLogged = {props.isLogged}
                            />
                        </>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Account;