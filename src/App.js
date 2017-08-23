import React, { Component } from 'react';
import './App.css';
import { getTasks } from './ducks/reducer';
import IndividualTask from './Components/IndividualTask';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks: []
    }
  }


  render() {
    const tasks = this.props.toDoArr.map( (task, i) => (
      <IndividualTask key={i} index={i} title={task.title} id={task.id} completed={task.completed}/>

    ))

    {console.log("ToDoArray: ", this.props.toDoArr)}


    return (
      <div className="App">
        <h1>REACT REDUX TODO APP</h1>
        <button onClick={this.props.getTasks}>Get Tasks</button>
        {tasks}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toDoArr: state.tasks.toDoArr,
    loading: state.tasks.loading
  }
}

export default connect(mapStateToProps, { getTasks })(App);




// import Form from './Components/Form';
// import IndividualTask from './Components/IndividualTask';


// const myTodos = this.props.toDoArr.map( (taskObject, index, arr) => {
//   return (
//       <IndividualTask title={taskObject} key={index} id={index}/>
//   )
// })

        // <Form />
        // {myTodos}
