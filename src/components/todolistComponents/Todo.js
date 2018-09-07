import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from './actions/todo_action';

class Todo extends Component {
  state = {
    inputValue: ''
  }

  handleOnClick = () => {
    const addTaskArgs = {
      value: this.state.inputValue,
      key: Date.now()
    }
    this.props.addTask(addTaskArgs)
    this.setState({
      inputValue: '' 
    })
  }

  handleOnChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }
  
  render(){
    return(
      <div>
        <h1>Your ToDo List!</h1>
        <input className="todo" type="text" ref="task" onChange={this.handleOnChange} value={this.state.inputValue} placeholder="Enter your task" required/>
        <button className="btnAdd" onClick={this.handleOnClick} disabled={!this.state.inputValue} >Add Task!</button>
      </div>
    );
  }

};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({addTask}, dispatch);
}

export default connect(() =>{return{};}, mapDispatchToProps)(Todo);