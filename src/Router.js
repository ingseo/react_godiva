import React from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import OnlinePage from './pages/OnlinePage'
import NewsPage from './pages/NewsPage'
import AboutPage from './pages/AboutPage'
import ScrollToTop from './components/Common/scrollToTop';

const AppRouter = () => {

    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/"><MainPage /></Route>
                    <Route exact path="/menu"><MenuPage /></Route>
                    <Route exact path="/online"><OnlinePage /></Route>
                    <Route exact path="/news"><NewsPage /></Route>
                    <Route exact path="/about"><AboutPage /></Route>
                </Switch>
            </Router>
        </BrowserRouter>
    )

};

export default AppRouter;