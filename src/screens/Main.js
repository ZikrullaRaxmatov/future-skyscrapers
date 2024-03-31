import React from 'react';
import mainImg from '../assets/imageMain.avif'

function Main(props) {
    return (
        <div class="main" id='main'>
            <img data-aos="fade-right" data-aos-duration="2000" class="main-image" src={mainImg} alt='mainImg' />
            <div class="container">
                <div class="main-info">
                    <p data-aos="zoom-in" data-aos-duration="3000">Excellence in everything</p>
                    <h1 data-aos="zoom-in" data-aos-duration="3000" >Future <br /> Skyscrapers</h1>

                    <div class="main-btns">
                        <button class=" btn rounded-pill" data-aos="fade-right" data-aos-duration="3000" >Connection</button>
                        <button class=" btn rounded-pill" data-aos="fade-right" data-aos-duration="3000" >Our projects</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;