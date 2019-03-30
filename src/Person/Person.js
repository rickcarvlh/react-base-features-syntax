import React from 'react';


const person = (props) => {
    const math = Math.floor(Math.random() * 30);
    return (
      <div>
        <p>
          I'm a person and i'm {math} years old and i like {props.name} and {props.age}
        </p>
        <p>{props.chldren}</p>
      </div>
    );
};


export default person;