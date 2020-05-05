import React, {Component} from 'react';
import ReactDom from 'react-dom';
class StudentList extends Component{
    render(props){
        return(
            <li>{this.props.name}</li>
        );
    }
}
export default StudentList;