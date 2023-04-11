import React from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
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
    <div className="App">
      <Routes>
        <Route path={"/"} element={<MainPage />}></Route>
        <Route path={"/menu"} element={<MenuPage />}></Route>
        <Route path={"/online"} element={<OnlinePage />}></Route>
        <Route path={"/news"} element={<NewsPage />}></Route>
        <Route path={"/about"} element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
