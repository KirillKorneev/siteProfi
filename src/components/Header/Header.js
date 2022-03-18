import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Header(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [text, setText] = React.useState('');

    function handleChangeInput(e) {
        setText(e.target.value);
        console.log(text);
    }

    return (
        <div className={`header ${props.isGrey ? `header_grey` : ``}`}>
            <div className='header__content'>
                <button className='header__button'></button>
                <Link to="/">
                    <img src={logo} className='header__logo' alt=''/>
                </Link>
                <div className='header__info'>
                    <input id="search-header-input" name="inputSearchHeader" required type="text" minLength="2" maxLength="200" placeholder="search" className="header__input" value={text} onChange={handleChangeInput}/>
                    <Link className={`header__log`} to={props.isLogged ? `/` : `/login`}>{props.isLogged ? currentUser : 'log in'}</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
