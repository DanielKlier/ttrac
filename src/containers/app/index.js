import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from '../home';
import About from '../about';

export default () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
        </header>

        <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={About}/>
        </main>
    </div>
);