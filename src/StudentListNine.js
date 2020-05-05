import React, { Component } from 'react';
import ReactDom from 'react-dom';
import StudentList from './StudentList';
class StudentListNine extends Component{
    render(){
        const primaryArray = [
            {
                id: 1,
                name: "Akash Singh"
            },
            {
                id: 2,
                name: "Sumit Singh"
            },
            {
                id: 3,
                name: "Ganesh Sawant"
            },
            {
                id: 4,
                name: "Siddesh Singh"
            },
            {
                id: 5,
                name: "Asif Shaikh"
            },
            {
                id: 6,
                name: "Rohan Deshmukh"
            },
            {
                id: 7,
                name: "Roshan Singh"
            },
            {
                id: 8,
                name: "Amit Mishra"
            },
            {
                id: 9,
                name: "Nitin Singh"
            },
            {
                id: 10,
                name: "Akash Singh"
            },
            {
                id: 11,
                name: "Mohan Singh"
            },
            {
                id: 12,
                name: "Ankit Pandit"
            },
            {
                id: 13,
                name: "Priya Singh"
            },
            {
                id: 14,
                name: "Ram Prasad"
            },
            {
                id: 15,
                name: "Abhishek Gupta"
            },
            {
                id: 16,
                name: "Abhishek Singh"
            },
            {
                id: 17,
                name: "Amit Singh"
            },
            {
                id: 18,
                name: "Kajal Singh"
            },
            {
                id: 19,
                name: "Archana Ram"
            },
            {
                id: 20,
                name: "Samantra Singh"
            },
            {
                id: 21,
                name: "Dilip Singh"
            },
            {
                id: 22,
                name: "Sarfaraz Shaikh"
            },
            {
                id: 23,
                name: "Nitish Singh"
            },
            {
                id: 24,
                name: "Laxman Singh"
            },
            {
                id: 25,
                name: "Nishant Patil"
            },
            {
                id: 26,
                name: "Priyanka Chaudhary"
            }
        ]
        const primaryMap = primaryArray.map((primary, i) => {
            return <StudentList id={primaryArray[i].id} name={primaryArray[i].name}/>
        })
        return(
            <div className="student-list">
                <div className="container-80">
                    <div className="student-center">
                        <h1>Student List</h1>
                        <h4>Students/Total Intake: 26/80</h4>
                        <div class="students">
                            <ul>
                                
                                {primaryMap}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default StudentListNine;