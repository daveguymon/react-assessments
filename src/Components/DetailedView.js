import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateTask, getTasks } from './../ducks/reducer';
import axios from 'axios';
import { connect } from 'react-redux';


class DetailedView extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      completed: null
    }
  }
  componentWillMount(){
    this.props.getTasks();
  }

  componentWillUpdate(nextProps,nextStates){
    this.setState({
      title: this.props.tasks[this.props.match.params.id].title,
      description: this.props.tasks[this.props.match.params.id].description,
      completed: this.props.tasks[this.props.match.params.id].completed
    })
  }


onTitleChange(event){
  this.setState({
    title: event.target.value
  })
}

onDescriptionChange(event){
  this.setState({
    description: event.target.value
  })
}

changeTitle(){
  axios.patch(`https://practiceapi.devmountain.com/api/tasks/${this.props.tasks[this.props.match.params.id].id}`, {title: this.state.title})
  .then(res => {
    this.setState({
      title: ''
    })
  })

}

  changeDescription(){
    axios.patch(`https://practiceapi.devmountain.com/api/tasks/${this.props.tasks[this.props.match.params.id].id}`, {description: this.state.description})
    .then(res => {
      this.setState({
        description: ''
      })
    })
}



cancelTitleChange(){
  this.setState({
    title: ''
  })
}

cancelDescriptionChange(){
  this.setState({
    description: ''
  })
}

  completeTask(){
    axios.patch(`https://practiceapi.devmountain.com/api/tasks/${this.props.tasks[this.props.match.params.id].id}`, {completed: !this.state.completed}).then(res => this.props.getTasks())
}

  render(){

    return (
      <div>
        <p>Title: {this.state.title}</p>
        <input value={this.state.title} onChange={this.onTitleChange.bind(this)}/>

        <Link to="/">
        <button onClick={this.changeTitle.bind(this)}>Save Changes</button>
        </Link>
        <button onClick={this.cancelTitleChange.bind(this)}>Cancel Changes</button>

        <p>Description: {this.state.description}</p>
        <input value={this.state.description} onChange={this.onDescriptionChange.bind(this)}/>

        <Link to="/">
        <button onClick={this.changeDescription.bind(this)}>Save Changes</button>
        </Link>
        <button onClick={this.cancelDescriptionChange.bind(this)}>Cancel Changes</button>

        <Link to="/">
        <button onClick={this.completeTask.bind(this)}>Complete Task</button>
        </Link>

        <Link to="/">
        <p>Return to Tasks</p>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log("State is: ",state.tasks.toDoArr)
  return {
    tasks: state.tasks.toDoArr
  }
}

export default connect(mapStateToProps, { updateTask, getTasks })(DetailedView);
