import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import UrlParamters from './modules/lession/UrlParamters';
import BasicExample from './modules/lession/BasicExample';
import registerServiceWorker from './registerServiceWorker';
import AuthExample from './modules/lession/AuthExample';
import CustomLinkExample from './modules/lession/CustomLinkExample';
import PreventingTransitionsExample from './modules/lession/PreventingTransitionsExample';
import NoMatchExample from './modules/lession/NoMatchExample';
import RecursiveExample from './modules/lession/RecursiveExample';
import SidebarExample from './modules/lession/SidebarExample';
import AnimationExample from './modules/lession/AnimationExample';
import AmbiguousExample from './modules/lession/AmbiguousExample';
import RouteConfigExample from './modules/lession/RouteConfigExample';
import ModalGallery from './modules/lession/ModalSwitch';
import StaticRouterExample from './modules/lession/StaticRouterExample';


const Lession = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/basicExample">BasicExample</Link></li>
                <li><Link to="/urlParamters">UrlParamters</Link></li>
                <li><Link to="/authExample">AuthExample</Link></li>
                <li><Link to="/customLinkExample">CustomLinkExample</Link></li>
                <li><Link to="/preventingTransitionsExample">PreventingTransitionsExample</Link></li>
            </ul>
            <hr/>
            <Route path="/basicExample" component={BasicExample}/>
            <Route path="/urlParamters" component={UrlParamters}/>
            <Route path="/authExample" component={AuthExample}/>
            <Route path="/customLinkExample" component={CustomLinkExample}/>
            <Route path="/preventingTransitionsExample" component={PreventingTransitionsExample} />
        </div>
    </Router>
);


ReactDOM.render(
    <StaticRouterExample/>,
    document.getElementById('root')
);
registerServiceWorker();
