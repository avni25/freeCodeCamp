import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>huseyin avni</h1>
        {/* <Fruits /> */}
        <ShoppingCart date={Date()}/>
        <Person name={"qwe"} eyeColor={"qweq"}/>
        <Camper />
        <div id="mydiv"></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart {props.date}</h1>
      <p>{props.fx}</p>
    </div>
  )
};

ShoppingCart.defaultProps = {fx:"qwer"};


const Person = (props)=> {  
    return (
      <div>
        <p> Name: {props.name} </p>
        <p>EyeColor: {props.eyeColor}</p>
        <p>Age : {props.age} </p>
      </div>
    )  
};
  
Person.defaultProps = {
  name: "huseyin",
  eyeColor: "green",
  age: "37"
}

const Camper = (props) => {
  return(
    <div>
      <p> {props.name} </p>
      <input type="text"></input>
      <button>Click me</button>
    </div>
  );
}
Camper.defaultProps = {
  name: "CamperBot"
};
Camper.propTypes = {
  name: PropTypes.string.isRequired
};











export default App;
