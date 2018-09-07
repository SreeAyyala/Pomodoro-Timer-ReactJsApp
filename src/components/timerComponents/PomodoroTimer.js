import React, { Component } from 'react';
import moment from 'moment';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerConfig from './TimerConfig';
import * as timerStates from './timerStates';

class PomodoroTimer extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      currentTime: moment.duration(nextProps.time, 'minutes'),
      baseTime: moment.duration(nextProps.time, 'minutes'),
    }
  }
  state = {
      currentTime: moment.duration(this.props.time, 'minutes'),
      baseTime: moment.duration(this.props.time, 'minutes'),
      timerState: timerStates.NOT_SET,
      timer: null,
  }
  
  setBaseTime = (newBaseTime) => {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });
  }

  startTimer = () => {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  stopTimer = ()  => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.currentTime),
    });
  }

  resetTimer = (time) => {  
    this.setState({
      timerState: timerStates.NOT_SET,
      baseTime: moment.duration(time, 'minutes'),
      currentTime: moment.duration(time, 'minutes'),
    });
  }

  reduceTimer = () => {
    if (this.state.currentTime.get('minutes') === 0
          && this.state.currentTime.get('seconds') === 0) {
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime,
    });
  }

  completeTimer = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null,
    });
  }

  render()
  {
    return (
      <div className="container timer">
        <TimerDisplay
          currentTime={this.state.currentTime}
          timerState={this.state.timerState}
        />
        <TimerButton
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
          timerState={this.state.timerState}/>
        {
          (this.state.timerState !== timerStates.RUNNING)
            &&
            (<TimerConfig
              time = {this.state.currentTime.get('minutes')}
              setBaseTime={this.setBaseTime}
            />)
        }
      </div>
    );
  }
}
export default PomodoroTimer;