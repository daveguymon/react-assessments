import React, { Component } from 'react';
import { deleteTodo, getTasks } from './../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


class IndividualTask extends Component {
  constructor(props){
    super(props);

    this.markComplete = this.markComplete.bind(this);

  }


markComplete(){
  this.setState({
    completed: !this.state.completed
  })
}


deleteTask(){
  axios.delete(`https://practiceapi.devmountain.com/api/tasks/${this.props.id}`)
  .then(res => this.props.getTasks())
}

completeTask(){
  axios.patch(`https://practiceapi.devmountain.com/api/tasks/${this.props.id}`, {completed: !this.props.completed}).then(res => this.props.getTasks())
}

  render() {
    const completedStyle={ textDecoration: "line-through", color: "grey" }

    return (
      <div>
        <Link to={'/' + this.props.index}>
          <p style={ this.props.completed ? completedStyle : null } >{this.props.title}</p>
        </Link>

        <button onClick={ this.completeTask.bind(this) }  >COMPLETE</button>

        <button onClick={this.deleteTask.bind(this) }>DELETE</button>
      </div>
    )
  }
}



export default connect(null, { deleteTodo, getTasks })(IndividualTask);
