import React ,{Component} from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './pages/MainPage'
import MainPage from './pages/MainPage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faTrashAlt);

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
