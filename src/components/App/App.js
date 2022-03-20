import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


import './App.css';
import articles from '../../data/data.js';
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

function App() {

  const [isLogged, setIsLogged] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(()=>{
    setCurrentUser(acc);
  }, [])

  function handleLogin(userDataIn) {
    setCurrentUser(userDataIn);

    setIsLogged(true);
  }

  function switchLog() {
    setIsLogged(!isLogged);
  }

  return (
    <CurrentUserContext.Provider value = {
      currentUser
    }>
      <button onClick={switchLog}>"Зайти/выйти" на/с сайт</button>
      <BrowserRouter>
        <Switch>

          <ProtectedRoute
            path = "/account"
            isLogged = {isLogged}
            articles = {articles}
            component = {Account}
            isAccount = {true}
          />

          <Route path="/cardlist">
            <Header 
              isGrey = {true}
              isLogged = {isLogged}
            />
            <CardsList
              articles = {articles}
            />
            <Footer />
          </Route>

          <Route path="/login">
            <Header 
              isGrey = {true}
              isLogged = {isLogged}
            />
            <Log />
            <Footer />
          </Route>

          <Route path="/">
            <Header 
              isGrey = {false}
              isLogged = {isLogged}
            />
            <Nav />
            <Become />
            <FeaturedProject 
              news = {news}
            />
            <LatestProject

            />
            <MostPopular 
              articles = {articles}
            />
            <JustStarted
              articles = {articles}
            />
            <WhatIs />
            <Discover
              isLogged = {isLogged}
            />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>

    </CurrentUserContext.Provider>
  );
}

export default App;
