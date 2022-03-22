import React from 'react';
import { Link } from 'react-router-dom';
import './Discover.css';

function Discover(props) {
    const [text, setText] = React.useState('');

    function handleSubmit(evt) {
        evt.preventDefault();

        props.handleLoginFromDiscover(text);
    }

    function handleChangeInput(e) {
        setText(e.target.value)
    }

    return (
        <div className={`discover ${props.isLogged ? `descover_none` : ``}`}>
            <div className='discover__content'>
                <p className='discover__title'>
                    Discover new projects or load your idea using 
                    <span className='discovery__title_yellow'> Fund</span>
                    <span className='discovery__title_grey'>Flow</span>!
                </p>
                <p className='discover__text'>Sign up to start up</p>
                <form className="discover__search">
                    <input id="search-input" name="inputSearch" required type="text" minLength="2" maxLength="200" placeholder="Enter email address" className="discover__input" value={text} onChange={handleChangeInput}/>
                    
                        <button className={`discover__button`} onClick={handleSubmit}>
                            <Link className='discover__redirect' to="/login">Continue</Link>
                        </button>
                    
                </form>
            </div>
        </div>
    );
}

export default Discover;
