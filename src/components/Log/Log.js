import React from 'react';
import './Log.css';


const Log = (props) => {
    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    const [dataConf, setDataConf] = React.useState({
        confemail: '',
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

    return (
        <div className='log'>
            <div className='log__content'>
                <form className='form'>
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
                    <button type='submit' className='form__button'>Log in</button>
                </form>
                <p className='log__question'>
                    New to <span className='log__question_yellow'>Fund</span><span className='log__question_grey'>Flow</span>?
                </p>
                <form className='form'>
                    <p className='form__title'>Sign up</p>
                    <input 
                        value={confemail} 
                        onChange={handleChangeConf} 
                        id="email-input-login"
                        name="email" 
                        className="form__input form__input_el_email" 
                        type="email" 
                        placeholder="Email address"
                    />
                    <input 
                        value={cpassword} 
                        onChange={handleChangeConf} 
                        id="password-input-login" 
                        name="password" 
                        className="form__input form__input_el_pass" 
                        type="password" 
                        placeholder="Password"
                    />
                    <input 
                        value={confpass} 
                        onChange={handleChangeConf} 
                        id="password-input-login" 
                        name="password" 
                        className="form__input form__input_el_pass" 
                        type="password" 
                        placeholder="Confirm password"
                    />
                    <button type='submit' className='form__button from__button_red'>Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Log;