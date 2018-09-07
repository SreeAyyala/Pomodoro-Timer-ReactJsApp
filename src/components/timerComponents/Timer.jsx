import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import PomodoroTimer from './PomodoroTimer';
import '../../App.css';

class Timer extends Component {
  state = {
    time: 0
  }

  handleOnClick = (time) => {
    this.setState({time: time});

  }

  render() {
    return (<div className='align-self-center p-2'>
      <div className="timer-buttons">
        <button type="button" className="btn btn-dark" onClick={() => this.handleOnClick(25)}>Pomodoro</button>
        <button type="button" className="btn btn-dark" onClick={() => this.handleOnClick(5)}>Short Break</button>
        <button type="button" className="btn btn-dark" onClick={() => this.handleOnClick(15)}>Long-Break</button>
      </div>
      <div className='timer-div'>
        <PomodoroTimer time={this.state.time}/>
      </div>
    </div>);
  }
}

export default Timer;
