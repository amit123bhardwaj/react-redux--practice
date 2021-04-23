import axios from "axios";

export const increment = (dispatch) =>{
     return {
         type:'INCREMENT',
         value:1,
     }
    // return function(){
    //     return {
    //         type:'INCREMENT',
    //         value:1
    //     }
    // }
}

export const decrement = (id) =>(dispatch) =>{
    console.log('props passed is ->',id);
    return dispatch({
        type:'DECREMENT',
        value:1,
    })
}

export const increment10 = (dispatch) =>{
    return {
        type:'INCREMENT10',
        value:10,
    }
}

export const decrement10 = (dispatch) =>{
    return {
        type:'DECREMENT10',
        value:10,
    }
}

export const resetValue = (dispatch) =>{
    return {
        type:'RESETVALUE',
    }
}

export const getPersonData = () => (dispatch) => {
    console.log('inside get person data');
     axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
         console.log('inside api call -> ', res.data);
       return dispatch({
           type:'GET_PERSON',
           value:res.data
       })
     });
}