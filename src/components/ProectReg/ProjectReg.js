import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectReg.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { CurrentUserContext } from '../../context/CurrentUserContext';

function ProjectReg(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [data, setData] = React.useState({
        photo_link: '',
        title: '',
        text: '',
        price: '',
        prePrice: '',
        days: '',
        owner: currentUser.id
    });

    const { photo_link, title, text, desc, price, prePrice, days} = data;

    function handleChange(e) {

    }

    return (
        <>
            <Header isLogged = {props.isLogged} />
            <div className='project'>
                <form className='project__form'>
                    <p className='project__title'>Congratulations! You’ve just started a new project</p>
                    <p className='project__text'>Project name</p>
                    <input 
                        className='project__input' 
                        value={title} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Project"
                    />
                    <p className='project__text project__text_margin'>Team name</p>
                    <input 
                        className='project__input' 
                        value={text} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Team"
                    />
                    <p className='project__text project__text_margin'>Short description</p>
                    <textarea className='project__textarea' value={desc} onChange={handleChange} placeholder="will display on the project card"></textarea>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default ProjectReg;