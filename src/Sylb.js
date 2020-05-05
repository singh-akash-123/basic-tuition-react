import React, { Component } from 'react';
import ReactDom from 'react-dom';
class Sylb extends Component{
    render(props){
        return(
            <div className="syllabus">
                <h4>{this.props.subject}</h4>
                <p>{this.props.description}</p>
                <a href="" className="sylb-btn">{this.props.button}</a>
            </div>
        );
    }
}
export default Sylb;