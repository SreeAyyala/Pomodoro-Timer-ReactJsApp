import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Info from './components/Info';
import Timer from './components/timerComponents/Timer';
import TodoListMain from './components/todolistComponents/TodoList_main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Pomodoro Timer!</h1>
        </header>
        <div className="row container_main">
          <div className="col-sm align-items-center"><Info/></div>
          <div className="col-sm align-items-center"><Timer/></div>
          <div className="col-sm align-items-center"><TodoListMain/></div>
        </div>
      </div>
    );
  }
}

export default App;
