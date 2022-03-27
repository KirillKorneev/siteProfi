import React from 'react';
import './Log.css';
import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../../context/CurrentUserContext';

const Log = (props) => {
    const currentUser = React.useContext(CurrentUserContext);
    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    const [dataConf, setDataConf] = React.useState({
        confemail: currentUser.email,
        cpassword: '',
        confpass: ''
    })

    const { email, password } = data;
    const { confemail, cpassword, confpass} = dataConf;

    function handleChange(e) {
        const {name, value} = e.target;
        setData((prevData) => ( {
            ...prevData,
            [name]: value
        }))
    }

    function handleChangeConf(e) {
        const {name, value} = e.target;
        setDataConf((prevData) => ( {
            ...prevData,
            [name]: value
        }))
    }

    function handleLogIn(e) {
        e.preventDefault();
        console.log(data);
        if (data.email !== '' && cpassword.password !== ''  && confpass.password !== '') {
            if (cpassword.password === confpass.password ) {
                props.handleLogIn(data);
            } else {
                console.log('passwords are not the same');
            }
        } else {
            console.log('enter data');
        }
    }

    function handleSignUp(e) {
        console.log(data);
        if (confemail.email !== '' && data.password !== '') {
            props.handleLogIn(data);
        } else {
            console.log('enter data');
        }
        e.preventDefault();
        props.handleSignUp(dataConf);
    }

    return (
        <div className='log'>
            <div className='log__content'>
                <form className='form' onSubmit={handleLogIn} >
                    <p className='form__title'>Log in</p>
                    <input 
                        value={email} 
                        onChange={handleChange} 
                        id="email-input-login"
                        name="email" 
                        className="form__input form__input_el_email" 
                        type="email" 
                        placeholder="Email address"
                    />
                    <input 
                        value={password} 
                        onChange={handleChange} 
                        id="password-input-login" 
                        name="password" 
                        className="form__input form__input_el_pass" 
                        type="password" 
                        placeholder="Password"
                    />
                    <button type='submit' className='form__button'>
                        Log In
                    </button>
                    <Link to="#" className='form__forgot'>
                        forgot your password?
                    </Link>


                </form>
                <p className='log__question'>
                    New to <span className='log__question_yellow'>Fund</span><span className='log__question_grey'>Flow</span>?
                </p>
                <form className='form' onSubmit={handleSignUp}>
                    <p className='form__title'>Sign up</p>
                    <input 
                        value={confemail} 
                        onChange={handleChangeConf} 
                        id="email1-input-login"
                        name="confemail" 
                        className="form__input form__input_el_email" 
                        type="email" 
                        placeholder="Email address"
                    />
                    <input 
                        value={cpassword} 
                        onChange={handleChangeConf} 
                        id="password1-input-login" 
                        name="cpassword" 
                        className="form__input form__input_el_pass" 
                        type="password" 
                        placeholder="Password"
                    />
                    <input 
                        value={confpass} 
                        onChange={handleChangeConf} 
                        id="password1-input-login" 
                        name="confpass" 
                        className="form__input form__input_el_pass" 
                        type="password" 
                        placeholder="Confirm password"
                    />
                    <button type='submit' className='form__button from__button_red'>
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Log;