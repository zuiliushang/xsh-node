import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
function formatName(user){
    return user.firstname + " " + user.secondname;
}

const user = {
    firstname: 'ra',
    secondname: 'rsc'
}
/*
function getGreeting(user){
    if(user){
        return <h1>user.firstname + " " + user.secondname</h1>;
    }else{
        return <h1>no man</h1>
    }
}
function tick(){
    const element = (
        <div>
            <h1>It is {new Date().toLocaleTimeString()}.</h1>
        </div>
    )
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
setInterval(tick,500);*/

/*
function Welcome(prop){
    return <h1>{prop.name}</h1>;
}

const element = (
    <div>
        hello
        <Welcome name="raindrops"/>
        <Welcome name="rotos"/>
    </div>
);
*/
/*

function Clock(props){
  return (
    <div>
      <h1>Hello . world</h1>
        <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {

    const element = (
        <Clock date={new Date()}/>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );

}
setInterval(tick,500);
*/

/*
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    tick(){
        this.setState({
           date: new Date()
        });
    }
    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),500);
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return (
            <div>
                <h1>Hello,world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);
*/

/*class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render(){
        return (
          <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON':'OFF'}
          </button>
        );
    }
}
const element = (
    <div>
        <Toggle/><Toggle/><Toggle/>
    </div>
);
ReactDOM.render(
    element,
  document.getElementById('root')
);*/

/*function UserGreeting(props){
    return <h1>Welcome Back!</h1>;
}

function GuestGreeting(props){
    return <h1>Please sign up!</h1>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const  isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn){
            button=<LogoutButton onClick={this.handleLogoutClick}/>;
        }else{
            button=<LoginButton onClick={this.handleLoginClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }

}

ReactDOM.render(
  <LoginControl/>,
  document.getElementById('root')
);*/

function Mailbox(props) {
    const unreadMans = props.unreadMans;
    return (
      <div>
          <h1>hello</h1>
          {
              unreadMans.length>0 &&
                  <h2>
                      you have {unreadMans.length} unread message
                  </h2>
          }
      </div>
    );
}

const messages = ['React','Re:rRes','sfd'];

ReactDOM.render(
  <Mailbox unreadMans={messages}/>,
    document.getElementById('root')
);

registerServiceWorker();
