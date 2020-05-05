import React, { Component } from 'react';
import ReactDom from 'react-dom';
import StudentListNine from './StudentListNine';
import NinethSyllabus from './NinethSyllabus';
import NinethToppers from './NinethToppers';
import Register from './Register';
import ExamsNine from './ExamsNine';
class ClassNine extends Component{
    render(){
        return(
            <div className="classNine-page">
                <NinethSyllabus/>
                <StudentListNine/>
                <NinethToppers/>
                <ExamsNine/>
                <Register/>
            </div>
        );
    }
}
export default ClassNine;