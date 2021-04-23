import Person from './person';
import React from 'react';


const deletePerson=(idx)=>{
    
}

class PersonList extends React.Component{
    state={
    
    }
    render(){
        const persons=this.props.personList.map((item,idx)=>{
            return <Person deleteItem={()=>deletePerson(idx)} key={item.id} id={item.id} age={item.age} name={item.name }/>
        });
    return <>
         {persons}
          </>
    }
}
export default PersonList;