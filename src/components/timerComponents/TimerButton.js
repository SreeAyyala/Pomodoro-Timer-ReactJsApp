import React, { Component } from 'react';
import * as timerStates from './timerStates';
import {Alert} from 'react-bootstrap';
class TimerButton extends Component {

  getButton = () => {
    if (this.props.timerState === timerStates.NOT_SET)
      return (<button className="btn btn-dark center-block" onClick={this.props.startTimer}>Start</button>);

    if (this.props.timerState === timerStates.RUNNING)
      return (<button className="btn btn-danger center-block" onClick={this.props.stopTimer}>Stop</button>);

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <div>
        <Alert color="dark">The Timer has completed<br/>Click Reset for a new session!</Alert>
        <button className="btn btn-info center-block" onClick={this.props.resetTimer}>Reset</button>
        </div>
        );
  }

  render() {
    return (
      <div> {this.getButton()}</div>
    );
  }
}

export default TimerButton;