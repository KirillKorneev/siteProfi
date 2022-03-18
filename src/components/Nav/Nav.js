import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

    return (
        <div className='nav'>
            <div className='nav__content'>
                <Link className='nav__but' to='/'>Games</Link>
                <Link className='nav__but' to='/'>Art</Link>
                <Link className='nav__but' to='/'>Technology</Link>
                <Link className='nav__but' to='/'>Film</Link>
                <Link className='nav__but' to='/'>Music</Link>
                <Link className='nav__but' to='/'>Publishing</Link>
                <Link className='nav__but' to='/'>Design</Link>
            </div>
        </div>
    );
}

export default Nav;