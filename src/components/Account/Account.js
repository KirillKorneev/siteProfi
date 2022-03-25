/* eslint-disable jsx-a11y/alt-text */
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

import img from '../../images/prew.png';

function Account(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [data, setData] = React.useState({
        nameSet: '',
        surnameSet: '',
        emailSet: currentUser.email,
    });
    const [photoData, setPhotoData] = React.useState({
        file: '',
        imagePreviewUrl: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setData((prevData) => ( {
            ...prevData,
            [name]: value
        }))
    }

    const { nameSet, surnameSet, emailSet } = data;

    function handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', photoData.file);
        console.log(photoData);
        console.log(data);
        props.handleChangeAccount(photoData, data);
    }

    function  _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            setPhotoData({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

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
                            <form className='acc__form' onSubmit={(e)=>handleSubmit(e)}>
                                <div className='acc__dataName'>
                                    <div className='acc__nameSet'>
                                        <p className='acc__imputText'>Name:</p>
                                        <input 
                                            className='acc__input' 
                                            value={nameSet} 
                                            onChange={handleChange} 
                                            name="nameSet"
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
                                            name="surnameSet"
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
                                        name="emailSet"
                                        type="text" 
                                        placeholder="Email"
                                    />
                                </div>
                                <div className='acc__uploadPhoto'>
                                    {
                                        photoData.imagePreviewUrl ? <img src={photoData.imagePreviewUrl} className="acc__imgPreview"/> : <img src={img} className="acc__imgPreview" />
                                    }
                                    <div>
                                        <input 
                                            id="file-input" 
                                            type="file" name="file" 
                                            onChange={(e)=>_handleImageChange(e)} 
                                            className = 'acc__uploadImg'
                                        />
                                        <label htmlFor="file-input" className='acc__upload'>+Add photo</label>
                                    </div>
                            
                                    <button 
                                        className="acc__submitButton" 
                                        type="submit" 
                                        onClick={(e)=>handleSubmit(e)}
                                    >
                                        Save changes
                                    </button>
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