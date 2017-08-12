import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from './../ducks/reducer';

class Form extends Component {
  constructor(props) {
    super(props);
      this.state = {
        inputValue: ''
      }
      this.handleInputChange = this.handleInputChange.bind(this);

      this.handleButtonClick = this.handleButtonClick.bind(this);

  }

handleInputChange(event) {
  this.setState({
    inputValue: event.target.value
  })
}

handleButtonClick() {
  this.state.inputValue ? this.props.addNewTodo(this.state.inputValue) : alert('Must add new task.');
  this.setState({ inputValue: '' })
}

  render() {
    return (
      <div className="formContainer">
        <input
        value={this.state.inputValue}
        onChange={ this.handleInputChange }/>
        {console.log(this.state.inputValue)}
        <button
          className="submitNewTaskBtn"
          onClick={ this.handleButtonClick }>ADD TASK</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    toDoArr: state.toDoArr
  }
}

export default connect(mapStateToProps, { addNewTodo })(Form);
