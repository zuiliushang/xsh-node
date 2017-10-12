import React from 'react';
import {BrowserRouter as Router , Route,Link } from 'react-router-dom';

const UrlParamters = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/raindrops">Raindrops</Link></li>
                <li><Link to="/rotos">Rotos</Link></li>
                <li><Link to="/cake">Cake</Link></li>
                <li><Link to="/say">Say</Link></li>
            </ul>
            <hr/>
            <Route path="/:id" component={ Child }/>
        </div>
    </Router>
);

const Child = ({ match }) => (
    <div>
        <p> { match.params.id } </p>
    </div>
);

export default UrlParamters;