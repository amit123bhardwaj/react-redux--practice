
const initialState = {
    counter:0,
    person:[{id:'1',age:'11',name:'111'},{id:'2',age:'22',name:'222'},{id:'3',age:'33',name:'333'}],
}

const reducer = (state=initialState,action) => {
  switch(action.type){
    case 'INCREMENT': {
      return {
          ...state,
          counter:state.counter+action.value,
      }
    }
    case 'DECREMENT':{
        return {
            ...state,
            counter:state.counter-action.value,
        }
    }
    case 'INCREMENT10':{
        return {
            ...state,
            counter:state.counter+action.value,
        }
    }
    case 'DECREMENT10':{
        return {
            ...state,
            counter:state.counter-action.value,
        }
    }
    case 'RESETVALUE':{
        return {
            ...state,
            counter:initialState.counter,
        }
    }
    case 'GET_PERSON':{
        return{
            ...state,
            person:action.value,
        }
    }
    default:
        return{
            ...state
        }
  }
}
export default reducer;