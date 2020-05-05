import React, { Component } from 'react';
import ReactDom from 'react-dom';
import FeeStructure from './FeeStructure';
class Fee extends Component{

    render(){
        const feeArray = [
            {
                id: 1,
                subject: "Hindi, English, Maths",
                fee: 250
            },
            {
                id: 2,
                subject: "Hindi, English, Maths",
                fee: 300
            },
            {
                id: 3,
                subject: "Hindi, English, Maths",
                fee: 350
            },
            {
                id: 4,
                subject: "Hindi, English, Maths, History, Geography, Science" ,
                fee: 400
            },
            {
                id: 5,
                subject: "Hindi, English, Maths, History, Geography, Science",
                fee: 400
            },
            {
                id: 6,
                subject: "Hindi, English, Maths, History, Geography, Science, Marathi",
                fee: 450
            },
            {
                id: 7,
                subject: "Hindi, English, Maths, History, Geography, Science, Marathi",
                fee: 450
            },
            {
                id: 8,
                subject: "Hindi, English, Marathi, Science, Maths, History, Geography",
                fee: 500
            }
        ]
        const feeMap = feeArray.map((fee, i) => {
            return <FeeStructure id={feeArray[i].id} subject={feeArray[i].subject} fee={feeArray[i].fee} />
        })
        return(
            <div class="fee-structure">
                <div class="container-80">
                    <h1>Fee structure</h1>
                    <div class="fee-grid">
                        {feeMap}
                    </div>
                </div>
            </div>
        );
    }
}
export default Fee;