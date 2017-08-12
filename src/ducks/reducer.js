const initialState = {
  toDoArr: []
}


const ADD_NEW_TODO = 'ADD_NEW_TODO';
const DELETE_TODO = 'DELETE_TODO';


export default function reducer(state = initialState, action) {
  switch(action.type) {

    case ADD_NEW_TODO:
    return (
      Object.assign( {}, state, {toDoArr: [...state.toDoArr, action.payload]} )
    )

    case DELETE_TODO:
    const newTodoArr = state.toDoArr.filter( (task, index) => index !== action.payload);
    return (
      Object.assign( {}, state, {toDoArr: newTodoArr} )
    )

    default:
      return state;

  }
}


export function addNewTodo(inputVal){
  return {
    type: ADD_NEW_TODO,
    payload: inputVal
  }
}

export function deleteTodo(id){
  return {
    type: DELETE_TODO,
    payload: id
  }
}
