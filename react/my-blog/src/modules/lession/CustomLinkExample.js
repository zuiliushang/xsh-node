import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from '../Home';
import About from '../About'
const CustomLinkExample = () => (
    <Router>
        <div>
            <OldSchoolMenuLink2 activeOnlyWhenExact={true} to="/" label="Home"/>
            <OldSchoolMenuLink2 to="/about" label="About"/>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
        </div>
    </Router>
);

/*const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path = {to} exact={activeOnlyWhenExact} children={({ match }) => (
            <div className={match ? 'active' : ''}>
               {match ? '>' : ''}<Link to={to}>{label}</Link>
            </div>
        )}
    />
)*/

class OldSchoolMenuLink2 extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const to = this.props.to;
        const activeOnlyWhenExact = this.props.activeOnlyWhenExact;
        const label = this.props.label;
        return (
            <Route
                path = {to} exact={activeOnlyWhenExact} children={({ match }) => (
                <div className={match ? 'active':''}>
                    {match ? '>' : ''}<Link to={to}>{label}</Link>
                </div>
            )}
            />
        )
    }
}

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => {return (
    <Route
        path = {to} exact={activeOnlyWhenExact} children={({ match }) => (
            <div className={match ? 'active':''}>
                {match ? '>' : ''}<Link to={to}>{label}</Link>
            </div>
        )}
    />
)}

export default CustomLinkExample;