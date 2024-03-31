import React from 'react';
import mainImg from '../assets/imageMain.avif'

function Main(props) {
    return (
        <div class="main" id='main'>
            <img class="main-image" src={mainImg} alt='mainImg' />
            <div class="container">
                <div class="main-info">
                    <p>Excellence in everything</p>
                    <h1>Future <br /> Skyscrapers</h1>

                    <div class="main-btns">
                        <button class=" btn rounded-pill">Connection</button>
                        <button class=" btn rounded-pill">Our projects</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;