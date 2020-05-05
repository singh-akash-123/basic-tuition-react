import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './nav.css';
class Footer extends Component{
    render(){
        return(
            <div className="footer-area">
                <div className="footer">
                    <h2>Email: robinakash123@gmail.com</h2>
                    <hr/>
                    <h2>Mobile: 9321585085</h2>
                    
                </div>
            </div>
        );
    }
}
export default Footer;