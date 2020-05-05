import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Sylb from './Sylb'; 

class NinethSyllabus extends Component{
    render(){
        const syllabusArray = [
            {
                id: 1,
                subject: "Hindi",
                description: "This is the Hindi subject of nineth class",
                button: "9th Hindi" 
            },
            {
                id: 2,
                subject: "Marathi",
                description: "This is the Marathi subject of nineth class",
                button: "9th marathi" 
            },
            {
                id: 3,
                subject: "English",
                description: "This is the English subject of nineth class",
                button: "9th English" 
            },
            {
                id: 4,
                subject: "Maths",
                description: "This is the Maths subject of nineth class",
                button: "9th Maths" 
            },
            {
                id: 5,
                subject: "History & Civics",
                description: "This is the history subject of nineth class",
                button: "9th History" 
            },
            {
                id: 6,
                subject: "Science",
                description: "This is the Science subject of nineth class",
                button: "9th Science" 
            },
            {
                id: 7,
                subject: "Geography",
                description: "This is the Geography subject of nineth class",
                button: "9th Geaography" 
            }
        ]
        const syllabusMap = syllabusArray.map((Syllabus, i) => {
            return <Sylb id={syllabusArray[i].id} subject={syllabusArray[i].subject} description={syllabusArray[i].description} button={syllabusArray[i].button}/>
        })

        return(
            <div className="pass-syllabus">
                <h1>Syallabus</h1>
                    <p>You can download by clicking button</p>
                <div className="container-80 syllabus-wrapper">
                    {syllabusMap}
                </div>
            </div>
        );
    }
}
export default NinethSyllabus;