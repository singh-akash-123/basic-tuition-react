import React, { Component } from 'react';
import ReactDom from 'react-dom';
import OverallTopperList from './OverallTopperList';
class TenthToppers extends Component{
    render(props){
        const toppersArray = [
            {
                id: 1,
                img: "https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png",
                name: "Akash Singh",
                percentage: "92.40",
                school: "RBT"
            },
            {
                id: 2,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Reena jha",
                percentage: "91.80",
                school: "RBT"
            },
            {
                id: 3,
                name: "Rani Sharma",
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                percentage: "91.40",
                school: "Narendra"
            },
            {
                id: 4,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Ram Gupta",
                percentage: "90.40",
                school: "RTP"
            },
            {
                id: 5,
                img: "https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png",
                name: "Pawan Mishra",
                percentage: "90.00",
                school: "Narendra"
            },
            {
                id: 6,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Sahjad Ansari",
                percentage: "88.40",
                school: "RBT",
            },
            {
                id: 7,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Shyam Rai",
                percentage: "88.40",
                school: "GRC"
            },
            {
                id: 8,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Pari Singh",
                percentage: "88.00",
                school: "RTP"
            },
            {
                id: 9,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Anil Sharma",
                school: "RBT",
                percentage: "87.00"
            },
            {
                id: 10,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Shani Pandey",
                school: "Narendra",
                percentage: "86.80"
            },
            {
                id: 11,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Kajal Sharma",
                school: "GRC",
                percentage: "86.40"
            },
            {
                id: 12,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Mohan Jha",
                school: "RBT",
                percentage: "86.20"
            },
            {
                id: 13,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Pravin Singh",
                school: "Narendra",
                percentage: "85.80"
            },
            {
                id: 14,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Aman Verma",
                school: "Narendra",
                percentage: "85.00"
            }
        ]
        const OverallToppersMap = toppersArray.map((toppers, i) => {
            return <OverallTopperList id={toppersArray[i].id} img={toppersArray[i].img} name={toppersArray[i].name} school={toppersArray[i].school} percentage={toppersArray[i].percentage}/>
        })
        return(
            <div class="topperList">
                <div className="container-80">
                    <h1>Our brilliant students from last batch</h1>
                    <div className="topperList-wrapper">
                        {OverallToppersMap}
                    </div>
                </div>
            </div>
        );
    }
}
export default TenthToppers;