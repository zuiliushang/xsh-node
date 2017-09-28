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
/*

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
*/

/*
function WarningBanner(props) {
    if (!props.warn){
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState (prevState=>({
            showWarning: !prevState.showWarning
        }));
    }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
)
*/

/*
function Warning(props) {
    if (!props.warn){
        return null;
    }
    return(
        <h1>Warning!</h1>
    );
}
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning:true};
        this.onClickChangeWarn = this.onClickChangeWarn.bind(this);
    };
    onClickChangeWarn(){
        this.setState (prevState=>({
            showWarning: !prevState.showWarning
        }));

    };
    render(){
        return(
           <div>
               <Warning warn={this.state.showWarning} />
               <button onClick={this.onClickChangeWarn}>
                   {this.state.showWarning? 'hide':'show'}
               </button>
           </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);
*/

/*
const numbers = [1,2,3,4,5];

const listItems = numbers.map((number)=>
    <li>{number*2}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
*/

/*function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1,2,3,4,5,6];

ReactDOM.render(
   <NumberList numbers={numbers}/>,
   document.getElementById('root')
);*/

/*
const numbers = [1,2,3,4,5];

const listItem = numbers.map((todo,index)=>
    <li key={index}>
        {todo}
    </li>
);

ReactDOM.render(
    listItem,
    document.getElementById('root')
);
*/
/*

const numbers = [1,2,3,4,5];

function Numberlists (props){
    const listItem = props.numbers.map((todo,index)=>
        <li key={index}>
            {todo}
        </li>
    );
    return (
        <ul>
            {listItem}
        </ul>
    )
}

ReactDOM.render(
    <Numberlists numbers={numbers}/>,
    document.getElementById('root')
);
*/
/*

function ListItem(props){
    return (
      <p>{props.listItem}</p>
    );
}

function ListItems(props){

    const numbers = props.numbers;

    return (
        numbers.map((todo,index)=>
            <li key={index}>
                <ListItem listItem={todo}/>
            </li>
        )
    )
}

const numbers = [1,2,3,4,5,6,7];

ReactDOM.render(
    <ListItems numbers={numbers}/>,
    document.getElementById('root')
);
*/

/*class NameForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value.toUpperCase()});
    }
    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

ReactDOM.render(
  <NameForm/>,
  document.getElementById('root')
);*/

/*class TextAreaForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {value:''};
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }
    handleOnSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
           <form onSubmit={this.handleOnSubmit}>
                <label>
                    name:
                    <textarea value={this.state.value} onChange={this.handleOnChange}></textarea>
                </label>
                <input type="submit" value="submit"/>
           </form>
        );
    }
}

ReactDOM.render(
    <TextAreaForm/>,
    document.getElementById('root')
);*/

/*
class SelectForm extends React.Component {
    constructor (props){
        super(props);

        this.state = {value:'yes'};
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(event) {
        this.setState({value: event.target.value})
    }
    handleOnSubmit(event) {
        alert('your selected name is : ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
           <form onSubmit={this.handleOnSubmit}>
               <label>your name:
                    <select onChange={this.handleOnChange}>
                        <option>raindrops</option>
                        <option>yes</option>
                        <option>rotos</option>
                    </select>
               </label>
               <input type="submit" value='submit'/>
           </form>
        );
    }
}

ReactDOM.render(
    <SelectForm/>,
    document.getElementById('root')
);
*/

/*class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            igGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;

        this.setState({
           [name]: value
        });
    }
    render(){
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="igGoing"
                        type="checkbox"
                        checked={this.state.igGoing}
                        onChange={this.handleInputChange}
                    />
                    <br/>
                    <label>
                        number of Guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </label>
            </form>
        )
    }
}

ReactDOM.render(
    <Reservation/>,
    document.getElementById('root')
);*/
/*

function BoilingVerdict(props){
    if (props.celsius >= 100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not bild.</p>
}

class Calculator extends React.Component {
    constructor (props){
        super (props);
        this.state = {temperature:''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            temperature: event.target.value
        });
    }
    render(){
        return (
            <fieldset>
                <legend>Enter temperature in Ceisius: </legend>
                <input
                    value={this.state.temperature}
                    onChange={this.handleChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(this.state.temperature)}/>
            </fieldset>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
*/
/*

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

//Fahrenheit To Celsius
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
//Celsius To Fahrenheit
function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props){
    if (props.celsius >= 100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]};</legend>
                <input value={temperature}
                    onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor (props){
        super (props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature});
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);
*/
/*

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius(fahrenheit){
    return (fahrenheit -32 ) * 5/9;
}

function toFahrenheit(celsius){
    return (celsius*9 / 5 )+32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e){
        this.props.tempertureOnChange(e.target.value);
    }
    render(){
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        const temperatureOnChange = this.props.tempertureOnChange;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input
                    value={temperature}
                    onChange={this.handleOnChange}
                />
            </fieldset>
        );
    }
}

class Calculate extends React.Component {
    constructor (props){
        super(props);
        this.state={
            temperature: '',
            scale: 'c'
        };
        this.fahrenheitOnChange = this.fahrenheitOnChange.bind(this);
        this.celsiusOnChange = this.celsiusOnChange.bind(this);
    }
    fahrenheitOnChange(temperature){
        this.setState({
            scale: 'f',
            temperature
        });
    }
    celsiusOnChange(temperature){
        this.setState({
            scale:'c',
            temperature
        });
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    tempertureOnChange={this.celsiusOnChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    tempertureOnChange={this.fahrenheitOnChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

function BoilingVerdict(props){
    if (props.celsius >= 100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

ReactDOM.render(
    <Calculate/>,
    document.getElementById('root')
);
*/
/*

function FancyBorder(props){
    return (
        <div>
            {props.children}
        </div>
    );
}

function Dialog(props){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog(){
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!"
        />
    );
}

ReactDOM.render(
    <WelcomeDialog/>,
    document.getElementById('root')
);
*/
/*
function FancyBorder(props){
    return (
        <div>
            {props.children}
        </div>
    );
}
function Dialog(props){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }
    render() {
        return (
            <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }
    handleChange(e){
        this.setState({login: e.target.value});
    }
    handleSignUp(){
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('root')
);
*/




registerServiceWorker();
