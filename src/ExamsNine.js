import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ExamList from './ExamList';
class ExamsNine extends Component{
    render(props){
        const examsArray = [
            {
                id: 1,
                date: "13 July 2019",
                subject: "Maths 1st chapter",
                time: "11 am"

            },
            {
                id: 2,
                date: "25 July 2019",
                subject: "Science 1st & 2nd chapter",
                time: "11 am"
            },
            {
                id: 3,
                date: "31 July 2019",
                subject: "History 1st chapter",
                time: "11 am"

            },
            {
                id: 4,
                date: "16 August 2019",
                subject: "Geometry 1st & 2nd chapter",
                time: "11 am"
            },
            {
                id: 5,
                date: "25 August 2019",
                subject: "Algebra 2nd chapter",
                time: "11 am"

            },
            {
                id: 6,
                date: "2 September 2019",
                subject: "Science 3rd & 4th chapter",
                time: "11 am"
            },
            {
                id: 7,
                date: "11 september 2019",
                subject: "History 3rd & 4th chapter",
                time: "5 pm"

            },
            {
                id: 8,
                date: "18 September 2019",
                subject: "Hindi 1 to 4 chapter",
                time: "11 am"
            },
            {
                id: 9,
                date: "28 September 2019",
                subject: "Geometry 3rd chapter",
                time: "11 am"

            },
            {
                id: 10,
                date: "5 October 2019",
                subject: "Algerbra 3rd chapter",
                time: "5 pm"
            },
            {
                id: 11,
                date: "15 October 2019",
                subject: "Science term 1 test",
                time: "11 am"

            },
            {
                id: 12,
                date: "18 October 2019",
                subject: "Social science term 1 test",
                time: "5 pm"
            },
            {
                id: 13,
                date: "22 October 2019",
                subject: "Geometry term 1 test",
                time: "11 am"

            },
            {
                id: 14,
                date: "24 October 2019",
                subject: "Algebra term 1 test",
                time: "11 am"
            },
            {
                id: 15,
                date: "26 October 2019",
                subject: "Hindi term 1 test",
                time: "11 am"

            },
            {
                id: 16,
                date: "27 October 2019",
                subject: "English term 1 test",
                time: "11 am"
            },
            {
                id: 17,
                date: "28 October 2019",
                subject: "Marathi term 1 test",
                time: "11 am"

            }
        ]
        const examsArrayMap = examsArray.map((toppers, i) => {
            return <ExamList id={examsArray[i].id} date={examsArray[i].date} subject={examsArray[i].subject} time={examsArray[i].time} />
        })
        return(
            <div class="examList">
                <div className="container-80">
                    <h1>Exam schedule for 1st term</h1>
                    <div className="examList-wrapper">
                        <table>
                            <tr>
                                <th><b>Date</b> </th>
                                <th><b>Subject</b></th>
                                <th><b>Time </b></th>
                            </tr>
                            {examsArrayMap}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default ExamsNine;