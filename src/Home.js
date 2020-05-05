import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Block from './Block';
import Calltoaction from './Calltoaction';
import TenthSyllabus from './TenthSyllabus';
import OverallToppers from './OverallToppers';
import Register from './Register';
import Fee from './Fee';
class Home extends Component{
    render(){
        return(
            <div className="home-page">
                <Block/>
                <Fee/>
                <Register/>
                <TenthSyllabus/>
                <OverallToppers/>
            </div>
        );
    }
}
export default Home;