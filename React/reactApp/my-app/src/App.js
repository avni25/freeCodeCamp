import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React from "react";

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
        <ShoppingList/>
        <Counter/>
        <ControlledInput />
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

class ShoppingList extends React.Component{
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}



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

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment(){
    this.setState((s)=>({
      count: s.count+1
    }));
  }

  decrement(){
    if(this.state.count > 0){
      this.setState(s => ({
        count: s.count-1
      }));
    }      
  }

  reset(){
    this.setState(()=>({
      count: 0
    }));
  }

  render(){
    return(
      <div>
        <button className='inc' onClick={this.increment}>Inc</button>
        <button className='dec' onClick={this.decrement} >Dec</button>
        <button className='res' onClick = {this.reset}>Reset</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }

}

class ControlledInput extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      input: ""
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }

  render(){
    return(
      <div>
        <input value={this.state.input}  onChange= {this.handleChange} ></input>
        <p> {this.state.input} </p>
      </div>
    )
  }

}







export default App;
