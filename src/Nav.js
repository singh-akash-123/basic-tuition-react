import React, {Component} from 'react';
import './nav.css';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <BrowserRouter>          
              <nav className="navigation-bar">
                <input type="checkbox" id="check"></input>
                <label for="check" className="checkbtn"><FontAwesomeIcon icon={faBars} /></label>
                <label className="logo">Basic Tuition website</label>
                <ul>
                    <li className="activenav"><a href="/"> Home</a></li>
                    <li><a href="Primary">Primary</a></li>
                    <li><a href="ClassNine">Class 9</a></li>
                    <li><a href="ClassTen">Class 10</a></li>
                    
                </ul>
            </nav>
            </BrowserRouter>
        );
    }
}
export default Nav;