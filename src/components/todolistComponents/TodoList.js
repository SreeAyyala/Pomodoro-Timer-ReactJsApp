import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from './Task';

class TodoList extends Component {
  
  render(){
    return(
      
        <div className="list-table-div">
          {this.props.tasks.map((task,index)=><Task key={`${task.key}`} id={index} task={task.value}/>)}
        </div>
        
    );
  }
 
}

const mapStateToProps = (state)=>{
  return{
    tasks:state.tasks
  }
}

export default connect(mapStateToProps)(TodoList);