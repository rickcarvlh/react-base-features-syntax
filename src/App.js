import React, {useState} from 'react';
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

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26},
        ],
        otherState: 'some other value'
    });

    // note it became in function inside a function
    const switchNameHandler = () => {
        // console.log('was clicked');
        setPersonsState({
            persons: [
                {name: 'Maximilian', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27},
            ],
        });
    };

    // note -> personState replaces persons array in the return
    return (
        <div className="App">
            <h1>Hi I'm a react app</h1>
            <p>This is real working</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name}>My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name}/>
        </div>
    );

};
export default app;




