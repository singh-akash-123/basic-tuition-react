import React, { Component } from 'react';
import ReactDom from 'react-dom';
import StudentList from './StudentList';
class StudentListTen extends Component{
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
            },
            {
                id: 27,
                name: "Mohit Singh"
            },
            {
                id: 28,
                name: "Archana Singh"
            },
            {
                id: 29,
                name: "Pari Sawant"
            },
            {
                id: 30,
                name: "Siddesh Sharma"
            },
            {
                id: 31,
                name: "Sujit Singh"
            },
            {
                id: 32,
                name: "Rohan Rathod"
            },
            {
                id: 33,
                name: "Pappu Morya"
            },
            {
                id: 34,
                name: "Rahul Gupta"
            },
            {
                id: 35,
                name: "Pankaj Singh"
            },
            {
                id: 36,
                name: "Akhilesh Mishra"
            },
            {
                id: 37,
                name: "Parvati Mishra"
            },
            {
                id: 38,
                name: "Sabina Shaikh"
            },
            {
                id: 39,
                name: "Imtiyaz Shaikh"
            },
            {
                id: 40,
                name: "Gautam Singh"
            },
            {
                id: 41,
                name: "Nisha Mishra"
            },
            {
                id: 42,
                name: "Pooja Giri"
            },
            {
                id: 43,
                name: "Vishal Singh"
            },
            {
                id: 44,
                name: "Anil Prajapati"
            },
            {
                id: 45,
                name: "Vikas Yadav"
            },
            {
                id: 46,
                name: "Deepu Gupta"
            },
            {
                id: 47,
                name: "Pintu Singh"
            },
            {
                id: 48,
                name: "Govind Gupta"
            },
            {
                id: 49,
                name: "Rohini Mishra"
            },
            {
                id: 50,
                name: "Omprakash Singh"
            },
            {
                id: 51,
                name: "Simpi Singh"
            },
            {
                id: 52,
                name: "Suraj Pandit"
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
                        <h4>Students/Total Intake: 52/80</h4>
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
export default StudentListTen;