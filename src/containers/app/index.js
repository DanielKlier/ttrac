import React from 'react';
import {Route} from 'react-router-dom';
import CurrentTasks from '../current-tasks';
import Projects from '../Projects';
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
        <Route exact path="/" component={CurrentTasks}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/about-us" component={About}/>
      </main>

      <Footer className="footer"/>
    </div>
);
