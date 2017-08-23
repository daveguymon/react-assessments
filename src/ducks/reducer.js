import * as tasks from './../service';


const initialState = {
  toDoArr: [],
  loading: false
}

const GET_TASKS = 'GET_TASKS';
const GET_TASKS_PENDING = 'GET_TASKS_PENDING';
const GET_TASKS_FULFILLED = 'GET_TASKS_FULFILLED';


// const ADD_NEW_TODO = 'ADD_NEW_TODO';
const DELETE_TODO = 'DELETE_TODO';


export default function reducer(state = initialState, action) {
  console.log("Action.type is :", action.type)
  switch(action.type) {

    case GET_TASKS_PENDING:
    return Object.assign({}, state, {loading: true})

    case GET_TASKS_FULFILLED:
    console.log("Fulfilled :", action.payload.data)
    return Object.assign({}, state, {loading: false, toDoArr: action.payload.data})


    default:
      return state;
  }
}

export function getTasks() {
  console.log("Reached getTasks")
  return {
    type: GET_TASKS,
    payload: tasks.getTasks()
  }
}


// export function addNewTodo(inputVal){
//   return {
//     type: ADD_NEW_TODO,
//     payload: inputVal
//   }
// }

export function deleteTodo(id){
  return {
    type: DELETE_TODO,
    payload: id
  }
}



    //
    // case ADD_NEW_TODO:
    // return (
    //   Object.assign( {}, state, {toDoArr: [...state.toDoArr, action.payload]} )
    // )
    //
    // case DELETE_TODO:
    // const newTodoArr = state.toDoArr.filter( (task, index) => index !== action.payload);
    // return (
    //   Object.assign( {}, state, {toDoArr: newTodoArr} )
    // )
