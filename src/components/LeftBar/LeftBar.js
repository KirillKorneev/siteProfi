import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBar.css';
import im1 from '../../images/title_im.png';

function LeftBar(props) {

    return (
        <div className='left'>
            <p className='left__title'>Featured project</p>
            <div className='border'>
                <img src={im1} alt="" className='left__photo' />
            </div>
            <p className='left__text'>Codeal - super task-tracker</p>
            <p className='left__span'>Powerful developers</p>
        </div>
    );
}

export default LeftBar;