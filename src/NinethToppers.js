import React, { Component } from 'react';
import ReactDom from 'react-dom';
import OverallTopperList from './OverallTopperList';
class NinethToppers extends Component{
    render(props){
        const toppersArray = [
            {
                id: 1,
                img: "https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png",
                name: "Amit Mishra",
                percentage: "91.80",
                school: "RBT"
            },
            {
                id: 2,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Jyoti jha",
                percentage: "90.60",
                school: "RBT"
            },
            {
                id: 3,
                name: "Chanda pandey",
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                percentage: "88.80",
                school: "RTP"
            },
            {
                id: 4,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Rohini Gupta",
                percentage: "88.40",
                school: "RTP"
            },
            {
                id: 5,
                img: "https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png",
                name: "Ganesh Singh",
                percentage: "87.00",
                school: "RBT"
            },
            {
                id: 6,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Munna Ansari",
                percentage: "86.40",
                school: "GRC",
            },
            {
                id: 7,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Amit Gupta",
                percentage: "85.80",
                school: "RBT"
            },
            {
                id: 8,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Madhuri Singh",
                percentage: "85.20",
                school: "RTP"
            },
            {
                id: 9,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Anil Prajapti",
                school: "GRC",
                percentage: "85.00"
            },
            {
                id: 10,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "pawan Pandey",
                school: "Narendra",
                percentage: "84.80"
            },
            {
                id: 11,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Gita Sharma",
                school: "GRC",
                percentage: "83.60"
            },
            {
                id: 12,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Sunny Jha",
                school: "RTP",
                percentage: "83.20"
            },
            {
                id: 13,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Rohit Singh",
                school: "RTP",
                percentage: "81.60"
            },
            {
                id: 14,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Sumit Malhotra",
                school: "RBT",
                percentage: "80.40"
            },
            {
                id: 15,
                img: "https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png",
                name: "Rohan Mishra",
                percentage: "80.00",
                school: "RBT"
            },
            {
                id: 16,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Pranita mishra",
                percentage: "80.00",
                school: "RTP"
            }
        ]
        const OverallToppersMap = toppersArray.map((toppers, i) => {
            return <OverallTopperList id={toppersArray[i].id} img={toppersArray[i].img} name={toppersArray[i].name} school={toppersArray[i].school} percentage={toppersArray[i].percentage}/>
        })
        return(
            <div class="topperList">
                <div className="container-80">
                    <h1>Toppers from last bathch 2018-19</h1>
                    <div className="topperList-wrapper">
                        {OverallToppersMap}
                    </div>
                </div>
            </div>
        );
    }
}
export default NinethToppers;