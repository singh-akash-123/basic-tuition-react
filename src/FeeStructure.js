import React, { Component } from 'react';
import ReactDom from 'react-dom';
class FeeStructure extends Component{
    render(props){
        return(
            <div className="fee">
                <h3>standard: {this.props.id}</h3>
                <p><b>Subjects:</b> {this.props.subject}</p>
                <h4>{this.props.fee}</h4>
            </div>
        );
    }
}
export default FeeStructure;