import React, { Component } from 'react';
import ReactDom from 'react-dom';
import StudentPrimary from './StudentPrimary';
class StudentListPrimary extends Component{
    render(){
        const primaryArray = [
            {
                id: 1,
                standard: "First",
                students: 24,
                capacity: 40 
            },
            {
                id: 2,
                standard: "Second",
                students: 34,
                capacity: 40 
            },
            {
                id: 3,
                standard: "Third",
                students: 24,
                capacity: 40
            },
            {
                id: 4,
                standard: "Fourth",
                students: 40,
                capacity: 50 
            },
            {
                id: 5,
                standard: "Fifth",
                students: 28,
                capacity: 50 
            },
            {
                id: 6,
                standard: "Sixth",
                students: 38,
                capacity: 60 
            },
            {
                id: 7,
                standard: "Seventh",
                students: 27,
                capacity: 60 
            },
            {
                id: 8,
                standard: "Eighth",
                students: 42,
                capacity: 60 
            }
        ]
        const primaryMap = primaryArray.map((primary, i) => {
            return <StudentPrimary id={primaryArray[i].id} standard={primaryArray[i].standard} students={primaryArray[i].students} capacity={primaryArray[i].capacity}/>
        })
        return(
            <div className="student-list">
                <div className="container-80">
                    <div className="student-center">
                        <h1>Student List</h1>
                        <div className="s-list">
                            <h3 className="p-b">Standard</h3>
                            <h3 className="p-b">Students</h3>
                            <h3 className="p-b">Capacity</h3>
                        </div>
                        {primaryMap}
                    </div>
                </div>
            </div>
        );
    }
}
export default StudentListPrimary;