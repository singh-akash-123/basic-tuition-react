import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Fee from './Fee';
import StudentListPrimary from './StudentListPrimary';
import Register from './Register';

class Primary extends Component{
    render(){
        return(
            <div className="primaray-page">
               <Fee/>
               <StudentListPrimary/>
               <Register/>
            </div>
        );
    }
}
export default Primary;