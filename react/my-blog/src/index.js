import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import UrlParamters from './modules/lession/UrlParamters';
import BasicExample from './modules/lession/BasicExample';
import registerServiceWorker from './registerServiceWorker';
import AuthExample from './modules/lession/AuthExample';
import CustomLinkExample from './modules/lession/CustomLinkExample';

const Lession = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/basicExample">BasicExample</Link></li>
                <li><Link to="/urlParamters">UrlParamters</Link></li>
                <li><Link to="/authExample">AuthExample</Link></li>
                <li><Link to="/customLinkExample">CustomLinkExample</Link></li>
            </ul>
            <hr/>
            <Route path="/basicExample" component={BasicExample}/>
            <Route path="/urlParamters" component={UrlParamters}/>
            <Route path="/authExample" component={AuthExample}/>
            <Route path="/customLinkExample" component={CustomLinkExample}/>
        </div>
    </Router>
);


ReactDOM.render(
    <Lession/>,
    document.getElementById('root')
);
registerServiceWorker();
