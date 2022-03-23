import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import './ProjectReg.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import img from '../../images/coverDefault.png';

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
    const [photoData, setPhotoData] = React.useState({
        file: '',
        imagePreviewUrl: ''
    })

    const options = [
        'Games', 'Art', 'Technology', 'Film', 'Music', 'Publishing', 'Design'
    ];

    const { photo_link, title, text, desc, price, prePrice, days} = data;

    function handleChange(e) {
        const {name, value} = e.target;
        setData((prevData) => ( {
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', photoData.file);
    }

    function  _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            setPhotoData({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
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

                    <p className='project__text project__text_margin'>Cover</p>
                    <div className='project__uploadPhoto'>
                        {
                            photoData.imagePreviewUrl ? <img src={photoData.imagePreviewUrl} className="project__imgPreview"/> : <img src={img} className="project__imgPreview" />
                        }
                        <div className='project__up'>
                            <input 
                                id="file-input" 
                                type="file" name="file" 
                                onChange={(e)=>_handleImageChange(e)} 
                                className = 'project__uploadImg'
                            />
                            <label htmlFor="file-input" className='project__upload'>Download the cover</label>
                        </div>
                    </div>

                    <Dropdown 
                        className='myClassName'
                        controlClassName='myControlClassName' 
                        options={options}  
                        placeholder="Choose the category" 
                        menuClassName='myMenuClassName'
                        arrowClassName='myArrowClassName'
                    />
                    
                    <div className='project__prices'>

                    </div>

                    <p className='project__text project__text_margin'>Short description</p>
                    <textarea className='project__textarea' value={desc} onChange={handleChange} placeholder="will display on the project card"></textarea>
                    <button 
                        className="acc__submitButton" 
                        type="submit" 
                        onClick={(e)=>handleSubmit(e)}
                    >
                        Save changes
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default ProjectReg;