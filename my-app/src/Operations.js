import React from 'react';
import Implementation from './Implementations';
import PersonList from './PersonList';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {increment,decrement,increment10,decrement10,resetValue,getPersonData} from './store/action';


class Operation extends React.Component{

   handleIncrement=(e)=>{
       console.log('inside increment function and event is: ',e);
    //    this.setState({
    //        counter:this.state.counter+1,
    //    })
        console.log('inside incr. -> props ', this.props);
          this.props.increment();
   }

   handleDecrement=(e)=>{
    console.log('inside decrement function and event is: ',e);
    // this.setState({
    //     counter:this.state.counter-1,
    // })
    this.props.decrement('id');
   }

   handleIncrement10=(e)=>{
    console.log('inside increment10 function and event is: ',e);
    // this.setState({
    //     counter:this.state.counter+10,
    // }) 
       this.props.increment10();
   }

   handleDecrement10=(e)=>{
    console.log('inside decrement10 function and event is: ',e);
    // this.setState({
    //     counter:this.state.counter-10,
    // })
    this.props.decrement10(); 
   }
   handleReset=(e)=>{
       console.log('inside reset value',e);
    //    this.setState({
    //        counter:0,
    //    })
       this.props.resetValue();
   }
   
   componentDidMount=()=>{
      this.props.getPersonData();
   }
   componentWillUnmount=()=>{
      console.log('person data before unmounting is -> ', this.props.person);
   }
   componentDidUpdate=()=>{
     console.log('current props are',this.props.person);
   }
   
   componentWillReceiveProps=()=>{
      console.log('u r inside a deprecated method');
   }
   getDerivedStateFromErrors=()=>{

   }
   componentDidCatch=(error,errorInfo)=>{

   }
   render(){
      return (
      <div>
            <Implementation counter={this.props.ctr}/>
            {/* directly calling the function*/}
            <button onClick={this.props.increment}> increment </button>
            {/* calling the function via handler*/}
            <button onClick={this.handleDecrement}> decrement </button>
            <button onClick={this.handleIncrement10}> increment10 </button>
            <button onClick={this.handleDecrement10}> decrement10 </button>
            <input type="text" disabled value={this.props.ctr} /> 
            <button onClick={this.handleReset}> Reset </button>
            <PersonList personList={this.props.person}/>
       </div>
       );
   }
}

 const mapStateToProps = (state,ownProps) => {
     console.log('store state is', state);
   return {
        ctr:state.counter,
        person:state.person
   };
};
 const mapDispatchToProps = (dispatch) => {
     console.log('inside dispatch func');
    //  return {
    //      increment: () => dispatch({type:'INCREMENT',value:1}),
    //      decrement: () => dispatch({type:'DECREMENT',value:1}),
    //      increment10: () => dispatch({type:'INCREMENT10',value:10}),
    //      decrement10: () => dispatch({type:'DECREMENT10',value:10}),
    //      resetValue: () => dispatch({type:'RESETVALUE'}),
    //  }
   return bindActionCreators({increment,decrement,increment10,decrement10,resetValue,getPersonData},dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(Operation);