import React, {Component} from 'react';
import Todolist from './TodoList'
import Todo from './Todo'

class TodoListMain extends Component {
  render() {
    return (<div className="p-2">
      <Todo/>
      <Todolist/>
    </div>);
  }
}

export default TodoListMain;
