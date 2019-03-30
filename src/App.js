import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Stephanie', age: 26},
//     ],
//     otherState: 'some other value'
//   }

// TODO exmaple for React hooks
// React hooks EXample
const app = props => {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value'
  }

  //  chaning name using state
  switchNameHandler = () => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    })
    
  };

  render() {
    return (
      <div className="App">
       <h1>Hi I'm a react app</h1>
       <p>This is real working</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name}/>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1",{className: 'App'}, "Hi, I'm a React App!!!")
    // );
  }
}

export default App;
