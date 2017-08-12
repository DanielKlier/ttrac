import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Footer from './Footer';
import Navigation from './Navigation';
import './app.css';

export default () => (
    <div className="page">
        <header className="header">
            <Navigation/>
        </header>

        <main className="main">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={About}/>
        </main>

        <Footer className="footer"/>
    </div>
);