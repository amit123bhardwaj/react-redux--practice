import React from "react";
class Implementation extends React.Component{


   render(){
        return (
         <div  style={{background:'blue'}}>
             <input type="text" value={Math.abs(this.props.counter)}/>
         </div>
        );
   }
}
export default Implementation;