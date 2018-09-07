import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteTask} from './actions/todo_action';

class Task extends Component{
    state={
        checked: false
    }

    handleClick = ()=>{
        this.setState({
            checked: !this.state.checked

        })     
    }

    render() {
        const { checked } = this.state
        const taskStyle = checked ? { textDecoration: 'line-through'} : null
      return (
          <table className="list-table">
            <colgroup>
                <col/>
                <col width= "80%"/>
                <col/>
            </colgroup>
            <tbody>
                <tr>
                    <td id="td1">
                        <input type="checkbox" className="list-checkbox" checked={checked} onClick={this.handleClick}/>  
                    </td>
                    <td id="td2">
                        <span className="task" style={taskStyle}>{this.props.task}</span>
                    </td>    
                    <td id="td3">
                        <button className="btnDelete" onClick={()=>{this.props.deleteTask(this.props.id)}}>&times;</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteTask},dispatch);
}
export default connect(null, mapDispatchToProps)(Task);