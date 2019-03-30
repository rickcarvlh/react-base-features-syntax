import React from 'react';
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

// TODO example for React hooks
// React hooks Example
const app = props => {

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
};


export default app;

// state = {
//     persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 26 },
//     ],
//     otherState: 'some other value'
// };
//
// //  chaning name using state
// switchNameHandler = () => {
//     // console.log('was clicked');
//     this.setState({
//         persons: [
//             { name: 'Maximilian', age: 28 },
//             { name: 'Manu', age: 29 },
//             { name: 'Stephanie', age: 27 },
//         ],
//     })
//

