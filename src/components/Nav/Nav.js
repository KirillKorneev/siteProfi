import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

    return (
        <div className='nav'>
            <div className='nav__content'>
                <Link className='nav__but' to='/games'>Games</Link>
                <Link className='nav__but' to='/art'>Art</Link>
                <Link className='nav__but' to='/tech'>Technology</Link>
                <Link className='nav__but' to='/film'>Film</Link>
                <Link className='nav__but' to='/music'>Music</Link>
                <Link className='nav__but' to='/pub'>Publishing</Link>
                <Link className='nav__but' to='/design'>Design</Link>
            </div>
        </div>
    );
}

export default Nav;