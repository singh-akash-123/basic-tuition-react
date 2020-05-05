import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ExamList from './ExamList';
class ExamsTen extends Component{
    render(props){
        const examsArray = [
            {
                id: 1,
                date: "10 July 2019",
                subject: "Algerbra 1st chapter",
                time: "2 pm"

            },
            {
                id: 2,
                date: "20 July 2019",
                subject: "Science 1st & 2nd chapter",
                time: "1 pm"
            },
            {
                id: 3,
                date: "31 July 2019",
                subject: "History 1st & 2nd chapter",
                time: "1 pm"

            },
            {
                id: 4,
                date: "10 August 2019",
                subject: "Geometry 1st & 2nd chapter",
                time: "1 pm"
            },
            {
                id: 5,
                date: "21 August 2019",
                subject: "Algebra 2nd & 3rd chapter",
                time: "8 am"

            },
            {
                id: 6,
                date: "28 August 2019",
                subject: "English test",
                time: "8 am"
            },
            {
                id: 7,
                date: "05 september 2019",
                subject: "History and geography test",
                time: "8 am"

            },
            {
                id: 8,
                date: "18 September 2019",
                subject: "Hindi 1 to 5 chapter",
                time: "8 am"
            },
            {
                id: 9,
                date: "28 September 2019",
                subject: "Science 3 to 5 chapters",
                time: "8 am"

            },
            {
                id: 10,
                date: "5 October 2019",
                subject: "Algebra term 1 test",
                time: "11 am"
            },
            {
                id: 11,
                date: "8 October 2019",
                subject: "Science term 1 test",
                time: "8 am"

            },
            {
                id: 12,
                date: "10 October 2019",
                subject: "Social science term 1 test",
                time: "11 am"
            },
            {
                id: 13,
                date: "14 October 2019",
                subject: "Geometry term 1 test",
                time: "11 am"
            },
            {
                id: 14,
                date: "17 October 2019",
                subject: "Hindi term 1 test",
                time: "11 am"
            },
            {
                id: 15,
                date: "20 October 2019",
                subject: "Marathhi term 1 test",
                time: "11 am"

            },
            {
                id: 16,
                date: "22 October 2019",
                subject: "English term 1 test",
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
export default ExamsTen;