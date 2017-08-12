import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from './../ducks/reducer';

class IndividualTask extends Component {
  constructor(props){
    super(props);
    this.state={
      completed: false
    }

    this.markComplete = this.markComplete.bind(this);

  }


markComplete(){
  this.setState({
    completed: !this.state.completed
  })
}

  render() {
    const completedStyle={ textDecoration: "line-through", color: "grey" }

    return (
      <div>
        <p style={ this.state.completed ? completedStyle : null } >{this.props.title}</p>

        <button onClick={ this.markComplete } disabled={ this.state.completed } >COMPLETE</button>

        <button onClick={ ()=> this.props.deleteTodo(this.props.id) }>DELETE</button>
      </div>
    )
  }
}



export default connect(null, { deleteTodo })(IndividualTask);
