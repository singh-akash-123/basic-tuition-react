import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Nav from './Nav';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Block from './Block';
import Calltoaction from './Calltoaction';
import TopperList from './TopperList';
import TenthSyllabus from './TenthSyllabus';
import OverallToppers from './OverallToppers';
import Register from './Register';
import Fee from './Fee';
import StudentListPrimary from './StudentListPrimary';
import StudentListNine from './StudentListNine';
import ClassNine from './ClassNine';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Primary from './Primary';
import Home from './Home';
import ClassTen from './ClassTen';
import Footer from './Footer';
class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Nav/>
                <div class="app-page">
                    <Switch>
                        <Route path="/Home" exact component={Home}/>
                        <Route path="/ClassNine" component = {ClassNine}/>
                        <Route path="/Primary" component={Primary}/>
                        <Route path="/ClassTen" component={ClassTen}/>
                    </Switch>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}
export default App;