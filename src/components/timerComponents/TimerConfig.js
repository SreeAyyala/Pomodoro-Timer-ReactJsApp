import React, { Component } from 'react';
import moment from 'moment';

class TimerConfig extends Component {
 static getDerivedStateFromProps(nextProps, prevState) {
    
    return {
      value: nextProps.time
    }
  }
  
  state ={
        value: this.props.time,
        message: null
  }

  updateBaseTime = (value) => {
    const newBaseTime = moment.duration(value, 'minutes');

    this.props.setBaseTime(newBaseTime);
  }
  
   handleOnChange = (event) => {
     const value = parseInt(event.target.value, 10)

     switch(true) {
       case value < 1 : 
          this.setState({
            message: "Can't decrement. Since 1 is the min value"
          });
          break;
      case value > 60 :
        this.setState({
          message: "Can't increment. Since 60 is the max value"
        });
        break;
      default: 
        this.setState({
          value: value,
          message: null
        });
        this.updateBaseTime(value)
     }
   }

  doDecrement = (value) => {
    if(value > 1) {
      this.setState({
        value: value - 1,
          message: null
      });
      this.updateBaseTime(value - 1)
    } else {
      this.setState({
        message: "Can't decrement. Since 1 is the min value"
      });
    }
  }

  doIncrement = (value) => {
    if(value < 60) {
      this.setState({
        value: value + 1,
        message: null
      });
      this.updateBaseTime(value + 1)
    } else {
      this.setState({
        message: "Can't increment. Since 60 is the max value"
      });
    }
  }

  render() {
    const { value } = this.state
    return (
      <div className='container centered'>
        <p>Time Duration</p>
        <div className="duration">
          <button onClick={() => this.doDecrement(value)} className="fa fa-minus fa-inverse fa-2x"></button>
          <input type="number" value={value} onChange={this.handleOnChange}></input>
          <button onClick={() => this.doIncrement(value)} className="fa fa-plus fa-inverse fa-2x"></button>
          <sub>{this.state.message}</sub>
          </div>
      </div>
    );
  }
}

export default TimerConfig;