import React ,{Component} from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './pages/MainPage'
import MainPage from './pages/MainPage';

import './style/scss/reset.scss'
import './style/scss/common.scss'
import './style/scss/color.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
