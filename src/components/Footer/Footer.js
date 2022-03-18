import React from 'react';
import './Footer.css';
import copy from '../../images/copy.svg';

function Footer(props) {

    return (
        <div className={`footer ${props.isGrey ? `footer_grey` : ``}`}>
            <div className='footer__content'>
                <div className='footer__left'>
                    <img src={copy} alt="" className='footer__copy' />
                    <p className='footer__name'>AMAI team 2021</p>
                </div>
                <p className='footer__right'>
                    Support: Не работает? Гугл в помощь
                </p>
            </div>
        </div>
    );
}

export default Footer;