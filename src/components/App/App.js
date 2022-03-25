import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './App.css';
import articlesData from '../../data/data.js';
import news from '../../data/news';
import acc from '../../data/acc';

import { CurrentUserContext } from '../../context/CurrentUserContext';

import MostPopular from '../MostPopular/MostPopular';
import JustStarted from '../JustStarted/JustStarted';
import WhatIs from '../WhatIs/WhatIs';
import Discover from '../Discover/Discover';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Become from '../Become/Become';
import Footer from '../Footer/Footer';
import Log from '../Log/Log';
import CardsList from '../CardsList/CardsList';
import FeaturedProject from '../FeaturedProject/FeaturedProject';
import LatestProject from '../LatestProject/LatestProject';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Account from '../Account/Account';
import ProjectReg from '../ProjectReg/ProjectReg';
import Project from '../Project/Project';
import ProjectUpdate from '../ProjectUpdate/ProjectUpdate';

function App() {

  const [isLogged, setIsLogged] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);
  const [cardId, setCardId] = React.useState({});
  const [upCard, setUpCard] = React.useState({});
  const [updateBool, setUpdateBool] = React.useState(false);
  const history = useHistory();

  React.useEffect(()=>{
    setCurrentUser(acc);
    setArticles(articlesData);
  }, [])

  function isYours(man) {
    for (let j = 0; j < articles.length; j++) {
      if(man.id === articles[j].owner) {
        return true;
      }
    }
    return false;
  }

  function handleLoginFromDiscover(email) {
    console.log(email);
    const user = currentUser;
    user.email = email;
    setCurrentUser(user);
    console.log(currentUser);
  }

  function handleLogin(userDataIn) {
    setCurrentUser(userDataIn);
    setIsLogged(true);
    history.push('/');
    console.log('You entered the site!');
  }

  function handleSignup(userDataIn) {
    setCurrentUser(userDataIn);
    setIsLogged(true);
    console.log('You reged and entered the site!');
  }

  function handleChangeAccount(dataPhoto, data) {
    currentUser.name = data.nameSet;
    currentUser.surname = data.surnameSet;
    currentUser.photo = dataPhoto.imagePreviewUrl;
    console.log(currentUser)
  }

  function newCard(data) {
    console.log('You huploaded a new card:');
    console.log(data);
  }

  function updateCard(data) {
    console.log(data);
    setUpCard(data);
  }

  function handleUpdateCard(data) {
    console.log('updating card... new data:');
    console.log(data);
  }

  function handleClick(data) {
    setCardId(data);
  }

  function switchLog() {
    setIsLogged(!isLogged);
  }

  return (
    <CurrentUserContext.Provider value = {
      currentUser
    }>
      <BrowserRouter>

        <Switch>
        
          <ProtectedRoute
            path = "/account"
            isLogged = {isLogged}
            articles = {articles}
            component = {Account}
            isAccount = {true}
            isSettings = {false}
            isInvestments = {false}
            handleChangeAccount = {handleChangeAccount}
          />

          <ProtectedRoute
            path = "/investments"
            isLogged = {isLogged}
            articles = {articles}
            component = {Account}
            isAccount = {false}
            isSettings = {false}
            isInvestments = {true}
            handleChangeAccount = {handleChangeAccount}
          />

          <ProtectedRoute
            path = "/settings"
            isLogged = {isLogged}
            articles = {articles}
            component = {Account}
            isAccount = {false}
            isSettings = {true}
            isInvestments = {false}
            handleChangeAccount = {handleChangeAccount}
          />  

          <ProtectedRoute
            path = "/projectstart"
            isLogged = {isLogged}
            articles = {articles}
            component = {ProjectReg}
            newCard = {newCard}
          />
          <ProtectedRoute
            path = "/projectupdate"
            isLogged = {isLogged}
            articles = {articles}
            component = {ProjectUpdate}
            updateCard = {handleUpdateCard}
            update={updateBool}
            upData = {upCard}
          />        

          <Route path="/games">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
              title = {'Games'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>

          <Route path="/art">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
              title = {'Art'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>

          <Route path="/tech">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
              title = {'Technology'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>

          <Route path="/film">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
              title = {'Film'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>

          <Route path="/music">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}

            />
            <CardsList
              articles = {articles}
              title = {'Music'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>

          <Route path="/pub">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
              title={'Publishing'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>

          <Route path="/design">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
              title = {'Design'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>

          <Route path="/mostpopular">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
              title = {'Most Popular'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>

          <Route path="/juststarted">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
              title = {'Just Started'}
              handleClick = {handleClick}
            />
            <Footer />
          </Route>


          <Route path="/login">
            <Header 
              isGrey = {true}
              isLogged = {isLogged}
            />
            <Log 
              handleLogIn = {handleLogin}
              handleSignUp = {handleSignup}
            />
            <Footer
              isGrey = {true}
            />
          </Route>

          <Route path="/project/:id">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <Project 
              card = {cardId}
              updateCard = {updateCard}
            />
            <Footer />
          </Route>

          <Route path="/">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <Nav />
            <Become 
              isLogged = {isLogged}
              
            />
            <FeaturedProject 
              news = {news}
            />
            <LatestProject

            />
            <MostPopular 
              articles = {articles}
              handleClick = {handleClick}
            />
            <JustStarted
              articles = {articles}
              handleClick = {handleClick}
            />
            <WhatIs />
            <Element name="anchor"> 
              <Discover
                isLogged = {isLogged}
                handleLoginFromDiscover = {handleLoginFromDiscover}
              />
            </Element>
            <Footer />
          </Route>

        </Switch>
      </BrowserRouter>
      <button onClick={switchLog}>"Зайти/выйти" на/с сайт/а</button>
    </CurrentUserContext.Provider>
  );
}

export default App;
