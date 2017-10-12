import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const PEEPS = [
    { id: 0,name: 'raindrops', friends: [ 1, 2, 3]},
    { id: 1,name: 'season', friends: [0 , 3]},
    { id: 2, name: 'rotos', friends: [0,1,3] },
    { id: 3, name:'zero', friends: [1,2] }
]

const find = (id) => PEEPS.find(p => p.id == id);

const RecursiveExample = () => (
    <Router>
        <Person match={{ params:{id:0}, url:'' }}/>
    </Router>
);

class Person extends React.Component {
    constructor (props){
        super(props);
    }
    render=()=>{
        const match = this.props.match;
        const person = PEEPS.find(p => p.id == match.params.id);
        console.log(person);
        return (
        <div>
            <h3>{ person.name }'s Friends</h3>
            <ul>
                {person.friends.map(id=>(
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>
                            {find(id).name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Route path={`${match.url}/:id`} component={Person}/>
        </div>
    )}

}

const Person1 = ({match}) => {
    const person = find(match.params.id)
    return (
        <div>
            <h3>{ person.name }'s Friends</h3>
            <ul>
                {person.friends.map(id=>(
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>
                            {find(id).name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Route path={`${match.url}/:id`} component={Person}/>
        </div>
    )
}

export default RecursiveExample;