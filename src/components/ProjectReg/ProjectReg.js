import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import './ProjectReg.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import img from '../../images/coverDefault.png';
import wallet from '../../images/pricee.svg';

function ProjectReg(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [data, setData] = React.useState({
        photo_link: '',
        title: '',
        text: '',
        desc: '',
        category: '',
        prePrice: '',
        days: '',
        owner: currentUser.id
    });
    const [photoData, setPhotoData] = React.useState({
        file: '',
        imagePreviewUrl: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setData((prevData) => ( {
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newData = {
            photo_link: photoData.imagePreviewUrl,
            title: data.title,
            text: data.text,
            desc: data.desc,
            category: data.category,
            prePrice: data.prePrice,
            days: data.days,
            owner: currentUser.id
        }
        props.newCard(newData);
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
            <div className='projectReg'>
                <form className='projectReg__form'>
                    <p className='projectReg__title'>Congratulations! You’ve just started a new project</p>
                    <p className='projectReg__text'>Project name</p>
                    <input 
                        className='projectReg__input' 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Project"
                        name="title"
                    />
                    <p className='projectReg__text projectReg__text_margin'>Team name</p>
                    <input 
                        className='projectReg__input'  
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Team"
                        name="text"
                    />

                    <p className='projectReg__text projectReg__text_margin'>Cover</p>
                    <div className='projectReg__uploadPhoto'>
                        {
                            photoData.imagePreviewUrl ? <img src={photoData.imagePreviewUrl} className="projectReg__imgPreview"/> : <img src={img} className="projectReg__imgPreview" />
                        }
                        <div className='projectReg__up'>
                            <input 
                                id="file-input" 
                                type="file" 
                                name="photo_link" 
                                onChange={(e)=>_handleImageChange(e)} 
                                className = 'projectReg__uploadImg'
                            />
                            <label htmlFor="file-input" className='projectReg__upload'>Download the cover</label>
                        </div>
                    </div>

                    <p className='projectReg__text projectReg__text_margin'>Short description</p>
                    <textarea 
                        className='projectReg__textarea' 
                        name="desc"
                        onChange={handleChange} 
                        placeholder="will display on the project card">
                    </textarea>

                    <p className='projectReg__text projectReg__text_margin'>Category</p>
                    <select onChange={handleChange} name="category" className='myClassName'>
                        <option className='myMenuClassName'>Choose the category</option>
                        <option className='myMenuClassName' value="Games">Games</option>
                        <option className='myMenuClassName' value="Art">Art</option>
                        <option className='myMenuClassName' value="Technology">Technology</option>
                        <option className='myMenuClassName' value="Film">Film</option>
                        <option className='myMenuClassName' value="Music">Music</option>
                        <option className='myMenuClassName' value="Publishing">Publishing</option>
                        <option className='myMenuClassName' value="Design">Design</option>
                    </select>

                    <div className='projectReg__prices'>
                        <div className='projectReg__pricesL'>
                            <p className='projectReg__text'>Necessary contribute</p>
                            <div className='projectReg__w'>
                                <input 
                                    className='projectReg__input projectReg__input_price'  
                                    onChange={handleChange} 
                                    type="text" 
                                    placeholder="0"
                                    name="prePrice"
                                />
                                <img className='projectReg__wallet' src={wallet} alt="" />
                            </div>
                        </div>
                        <div className='projectReg__pricesR'>
                            <p className='projectReg__text'>Project duration</p>
                            <div className='projectReg__w'>
                                <input 
                                    className='projectReg__input projectReg__input_price' 
                                    onChange={handleChange} 
                                    type="text" 
                                    placeholder="0"
                                    name="days"
                                />
                                <p className='projectReg__days'>days</p>
                            </div>
                        </div>
                    </div>

                    <p className='projectReg__text projectReg__text_margin'>Project information</p>
                    <textarea 
                        className='projectReg__textarea projectReg__textarea_big' 
                        name="information"
                        onChange={handleChange} 
                        placeholder="">
                    </textarea>

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