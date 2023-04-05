import React ,{Component} from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './pages/MainPage'
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import OnlinePage from './pages/OnlinePage'
import NewsPage from './pages/NewsPage'
import AboutPage from './pages/AboutPage'

import './style/scss/reset.scss'
import './style/scss/common.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <MainPage /> */}
        <MenuPage />
        {/* <OnlinePage /> */}
        {/* <NewsPage /> */}
        {/* <AboutPage /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
