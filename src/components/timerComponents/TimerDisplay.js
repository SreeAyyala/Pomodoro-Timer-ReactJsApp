import React from 'react';
import * as timerStates from './timerStates';

const leftPad = (val) => {
  if (val < 10) return `0${val}`;
  return `${val}`;
}

const TimerDisplay = (props) => (
  <div className='container centered'>
    <div>
      {
        (props.timerState === timerStates.COMPLETE)
      }
    </div>
    <div>
      <h1>
        {`${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
      </h1>
    </div>
  </div>
);

export default TimerDisplay;