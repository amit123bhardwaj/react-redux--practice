import React from 'react';



const Person=(props)=>{
   return (
      <div style={{background:'grey'}}>
          <h5>Name: {props.name}</h5>
          <h5>Age: {props.age}</h5>
          <h5>id: {props.age}</h5>
      </div>
   );
}
export default Person;