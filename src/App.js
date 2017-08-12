import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import IndividualTask from './Components/IndividualTask';
import { connect } from 'react-redux';

class App extends Component {

markComplete

  render() {

    const myTodos = this.props.toDoArr.map( (taskObject, index, arr) => {
      return (
          <IndividualTask title={taskObject} key={index} id={index}/>
      )
    })

    return (
      <div className="App">
        <h1>REACT REDUX TODO APP</h1>
        <Form />
        {myTodos}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toDoArr: state.toDoArr
  }
}

export default connect(mapStateToProps)(App);
