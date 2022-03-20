import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import mlogo from '../../images/manu_logo.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Header(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [text, setText] = React.useState('');
    const [isMenu, setIsMenu] = React.useState(false);

    function handleChangeInput(e) {
        setText(e.target.value);
        console.log(text);
    }

    function showMenu() {
        setIsMenu(!isMenu);
    }

    return (
        <div className={`header ${props.isGrey ? `header_grey` : ``}`}>
            <div className='header__content'>
                <div className={`header__menu ${isMenu ? `header__menu_show` : ``}`}>
                    <button className='header__menuLogo' onClick={showMenu}></button>
                    <Link className='ac' to="/account">Account</Link>
                    <Link className='inv' to="/investments">Investments</Link>
                    <Link className='new' to="/new">New projects</Link>
                    <Link className='cl' to="cardlist">Popular projects</Link>
                </div>
                <button className='header__button' onClick={showMenu}></button>
                <Link to="/">
                    <img src={logo} className='header__logo' alt=''/>
                </Link>
                <div className='header__info'>
                    <input id="search-header-input" name="inputSearchHeader" required type="text" minLength="2" maxLength="200" placeholder="search" className="header__input" value={text} onChange={handleChangeInput}/>
                    <Link className={`header__log`} to={props.isLogged ? `/account` : `/login`}>{props.isLogged ? currentUser.name : 'log in'}</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
