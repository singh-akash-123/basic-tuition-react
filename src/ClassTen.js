import React, { Component } from 'react';
import ReactDom from 'react-dom';
import TenthSyallbus from './TenthSyllabus';
import StudentListTen from './StudentListTen';
import Register from './Register';
import TenthToppers from './TenthToppers';
import ExamsTen from './ExamTen';
class ClassTen extends Component{
    render(){
        return(
            <div className="classTen-page">
                <TenthSyallbus/>
                <StudentListTen/>
                <TenthToppers/>
                <ExamsTen/>
                <Register/>
            </div>
        );
    }
}
export default ClassTen;