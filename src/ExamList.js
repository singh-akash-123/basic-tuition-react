import React, { Component } from 'react';
import ReactDom from 'react-dom';
class ExamList extends Component{
    render(props){
        return(
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.time}</td>
            </tr>
        );
    }
}
export default ExamList;