import React, { Component } from 'react';
import ReactDom from 'react-dom';
class OverallTopperList extends Component{
    render(props){
        return(
            <div class="toppers">
                <div className="display-card">
                    <div className="img-container">
                        <img src={this.props.img} alt={this.props.name}/>
                    </div>
                    <div className="text-container">
                        <h4>{this.props.name}</h4>
                        <h4>{this.props.batch}</h4>
                        <h4>{this.props.percentage}%</h4>
                        <h4>{this.props.school}</h4>
                    </div>
                </div>
            </div>
        );
    }
}
export default OverallTopperList;