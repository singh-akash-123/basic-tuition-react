import React, { Component } from 'react';
import ReactDom from 'react-dom';
import OverallTopperList from './OverallTopperList';
class OverallToppers extends Component{
    render(props){
        const toppersArray = [
            {
                id: 1,
                img: "https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png",
                name: "Rohan Das",
                batch: "2005-06",
                percentage: "84"
            },
            {
                id: 2,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Sumitra jha",
                batch: "2006-07",
                percentage: "84"
            },
            {
                id: 3,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Rupali Ram",
                batch: "2007-08",
                percentage: "87"
            },
            {
                id: 4,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Rohini Gupta",
                batch: "2008-09",
                percentage: "80"
            },
            {
                id: 5,
                img: "https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png",
                name: "Ganesh Sawant",
                batch: "2009-10",
                percentage: "84.57"
            },
            {
                id: 6,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Sohan Mishra",
                batch: "2010-11",
                percentage: "87.88"
            },
            {
                id: 7,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Amit Mishra",
                batch: "2011-12",
                percentage: "85.88"
            },
            {
                id: 8,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Sumitra Singh",
                batch: "2012-13",
                percentage: "88"
            },
            {
                id: 9,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Pawan Das",
                batch: "2013-14",
                percentage: "88.59"
            },
            {
                id: 10,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "pawan Pandey",
                batch: "2014-15",
                percentage: "89"
            },
            {
                id: 11,
                img: "https://c7.uihere.com/files/670/509/166/avatar-female-clip-art-girls-avatar.jpg",
                name: "Sita Sharma",
                batch: "2015-16",
                percentage: "89.90"
            },
            {
                id: 12,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Sunny Jha",
                batch: "2016-17",
                percentage: "91"
            },
            {
                id: 13,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Mohit Singh",
                batch: "2017-18",
                percentage: "92.50"
            },
            {
                id: 14,
                img: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-young-service-men-avatar-free-vector-png-image_4825375.jpg",
                name: "Chandrakumar Singh",
                batch: "2018-19",
                percentage: "94.40"
            }
        ]
        const OverallToppersMap = toppersArray.map((toppers, i) => {
            return <OverallTopperList id={toppersArray[i].id} img={toppersArray[i].img} name={toppersArray[i].name} batch={toppersArray[i].batch} percentage={toppersArray[i].percentage}/>
        })
        return(
            <div class="topperList">
                <div className="container-80">
                    <h1>Overall Toppers from different bathches</h1>
                    <div className="topperList-wrapper">
                        {OverallToppersMap}
                    </div>
                </div>
            </div>
        );
    }
}
export default OverallToppers;