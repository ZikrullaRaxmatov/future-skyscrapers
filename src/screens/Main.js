import React from 'react';
import mainImg from '../assets/imageMain.avif'

function Main(props) {
    return (
        <div class="main">
            <img class="main-image" src={mainImg} alt='mainImg' />
            <div class="container">
                <div class="main-info">
                    <p>Excellence in everything</p>
                    {/* <p class="d-none main-info-p-md d-md-block d-lg-none">Excellence in everything</p>
                    <p class="d-none main-info-p-lg d-lg-block">Excellence in everything</p> */}

                    <h1 class="d-md-none main-info-h-sm" >Future <br /> Skyscrapers</h1>
                    <h1 class="d-none main-info-h-md d-md-block d-lg-none " >Future <br /> Skyscrapers</h1>
                    <h1 class="d-none main-info-h-lg d-lg-block " >Future <br /> Skyscrapers</h1>

                    <div class="d-flex justify-content-center d-md-none ">
                        <button class=" main-btn-sm btn rounded-pill">Connection</button>
                        <button class=" main-btn-sm btn main-btn-sm-project rounded-pill">Our projects</button>
                    </div>
                    <div class="d-none d-md-flex d-lg-none">
                        <button class=" main-btn-md btn rounded-pill">Connection</button>
                        <button class=" main-btn-md btn rounded-pill main-btn-md-project">Our projects</button>
                    </div>
                    <div class="d-none d-lg-flex">
                        <button class=" main-btn-lg btn rounded-pill">Connection</button>
                        <button class=" main-btn-lg btn rounded-pill main-btn-lg-project">Our projects</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;