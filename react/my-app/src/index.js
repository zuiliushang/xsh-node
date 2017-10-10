import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*ReactDOM.render(<App />, document.getElementById('root'));
function formatName(user){
    return user.firstname + " " + user.secondname;
}

const user = {
    firstname: 'ra',
    secondname: 'rsc'
}*/
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
/*
class ProductCategoryRow extends React.Component {
    render(){
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
                {product.name}
            </span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product)=>{
           if (product.category !== lastCategory){
               rows.push(
                   <ProductCategoryRow
                     category={product.category}
                        key={product.category}/>
               );
           }
           rows.push(
               <ProductRow
                    product={product}
                    key={product.name}/>);
           lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render(){
        return (
            <form>
                <input type="text" placeholder="search..."/>
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return(<div>
            <SearchBar/>
            <ProductTable products={this.props.products}/>
        </div>
        )
    }
}

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
);*/
/*

class ChooseProductDialog extends React.Component {
    constructor (props){
        super(props);
        this.state= {
            keyword: '',
            showStocked: false
        };
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleShowStockedChange = this.handleShowStockedChange.bind(this);
    }
    handleKeywordChange(keyword){
        this.setState({
           keyword: keyword
        });
    }
    handleShowStockedChange(showStocked){
        this.setState({
           showStocked: showStocked
        });
    }
    render(){
        return (
            <div>
                <SearchProductBox
                    checked={this.state.showStocked}
                    keyword={this.state.keyword}
                    handleKeywordChange={this.handleKeywordChange}
                    handleShowStockedChange={this.handleShowStockedChange}
                />
                <ProductBoxWrapper
                    showStocked={this.state.showStocked}
                    keyword={this.state.keyword}
                    products={this.props.products}
                />
            </div>
        );
    }
}

class SearchProductBox extends React.Component {
    constructor(props){
        super (props);
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
        this.handleCheckOnChange = this.handleCheckOnChange.bind(this);
    }
    handleInputOnChange(e){
        this.props.handleKeywordChange(e.target.value);
    }
    handleCheckOnChange(e){
        this.props.handleShowStockedChange(e.target.checked);
    }
    render(){
        const keyword = this.props.keyword;
        const checked = this.props.checked;
        return (
            <div>
                <div>
                    <input type="text" value={keyword} onChange={this.handleInputOnChange}/>
                </div>
                <div>
                    <input type="checkbox" checked={checked} onChange={this.handleCheckOnChange}/>
                    Only show products in stock
                </div>
            </div>
        );
    }
}

class ProductBoxWrapper extends React.Component {
    render(){
        const showStocked = this.props.showStocked;
        const keyword = this.props.keyword;
        const rows=[];
        const products = this.props.products;
        let category = '';
        products.forEach((product)=>{
            if(product.name.indexOf(keyword)===-1){
                return ;
            }
            if(showStocked === true && product.stocked === false){
                return ;
            }
            if (product.category !== category){
                rows.push(
                    <CategoryBox
                        category={product.category}
                        key={product.category}
                    />
                );
                category = product.category;
            };
            rows.push(
                <ProductItem
                    product={product}
                    key={product.name}
                />
            );
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class CategoryBox extends React.Component {
    render(){
        const category = this.props.category;
        return (
            <tr>
                <td colSpan='2'>{category}</td>
            </tr>
        )
    }
}

class ProductItem extends React.Component {
    render(){
        const product = this.props.product
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
                {product.name}
            </span>
        const price = product.price;
        return (
            <tr >
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        );
    }
}


const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <ChooseProductDialog products={PRODUCTS}/>,
    document.getElementById('root')
);
*/
/*
const components = {
    photo: 1,
    video: 2
};

function Story(props) {
    // Correct! JSX type can be a capitalized variable.
    const SpecificStory = components[props.storyType];
    return <SpecificStory story={props.story} />;
}

ReactDOM.render(
    <Story/>,
    document.getElementById('root')
);*/

/*class Greeting extends React.Component {
    render(){
        return (
            <h1>Hello , {this.props.name}</h1>
        );
    }

}


Greeting.defaultProps = {
    name: 'Raindrops'
};

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);*/

/*class CustomTextInput extends React.Component {
    constructor(props){
        super(props);
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput(){
        this.textInput.focus();
    }
    render(){
        return(
            <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; }} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}
ReactDOM.render(
    <CustomTextInput/>,
    document.getElementById('root')
);*/
/*class NameForm extends React.Component {
    constructor (props) {
        super (props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input type="text" defaultValue='bib' ref={(input) => this.input = input} />
                </label>
                <input type="submit" value='Submit' />
            </form>
        )
    }
}


ReactDOM.render(
    <NameForm/> ,
    document.getElementById('root')
);*/

/*class CounterButton extends React.Component {
    constructor (props) {
        super (props);
        this.state = {count: 1};
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }
    render(){
        return (
            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({count: state.count + 1}))}
            >
                Count: {this.state.count}
            </button>
        )
    }
}

ReactDOM.render(
    <CounterButton color='red'/>,
    document.getElementById('root')
);*/

/*const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount(){
        modalRoot.appendChild(this.el);
    }
    componentWillUnmount(){
        modalRoot.removeChild(this.el);
    }
    render(){
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }))
    }
    render(){
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools to obsetve that the button is not a child of
                    the div with the onClick handle.
                </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }
}

function Child(){
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    )
}

ReactDOM.render(<Parent/>, appRoot);*/

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({counter}) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

function App2() {
    return (
        <div>
            <p>
                <b>
                    This is an example of error boundaries in React 16.
                    <br /><br />
                    Click on the numbers to increase the counters.
                    <br />
                    The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
                </b>
            </p>
            <hr />
            <ErrorBoundary>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        </div>
    );
}



ReactDOM.render(
    <App2 />,
    document.getElementById('root')
);

registerServiceWorker();
