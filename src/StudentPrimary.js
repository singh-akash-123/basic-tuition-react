import React, { Component } from 'react';
import ReactDom from 'react-dom';
class StudentPrimary extends Component{
    render(props){
        return(
            <div className="s-list">
                <h3>{this.props.standard}</h3>
                <h3>{this.props.students}</h3>
                <h3>{this.props.capacity}</h3>
            </div>
        );
    }
}
export default StudentPrimary;