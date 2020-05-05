import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

class Block extends Component{
    render(){
        return(
            <div className="block-area">
                <div className="container-80 box-wrapper">
                    <div className="box">
                        <header>
                            <h3>Block 1</h3>
                        </header>
                        <div class="text-wrapper">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  as their default model text, and a search</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <header>
                            <h3>Block 2</h3>
                        </header>
                        <div class="text-wrapper">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  as their default model text, and a search</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <header>
                            <h3>Block 3</h3>
                        </header>
                        <div class="text-wrapper">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  as their default model text, and a search</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <header>
                            <h3>Block 4</h3>
                        </header>
                        <div class="text-wrapper">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum  as their default model text, and a search</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Block;