import React from 'react';
import mainImg from '../assets/imageMain.avif'

function Main(props) {
    return (
        <div class="main border border-danger">
            <div class="container1">
                <img class="w-100 " style={{ height: "650px" }} src={mainImg} alt='mainImg' />
                <div class="main-info card-img-overlay">
                    <div class="position-absolute top-50 start-50 ms-5 border border-danger">
                        <p class="text-white fw-bold fst-italic">Excellence in everything</p>
                        <h1 class="text-white " style={{ fontSize: "80px" }} >Future <br /> Skyscrapers</h1>
                    </div>
                    <div class="position-absolute top-50 start-0" style={{ marginTop: "200px", marginLeft: "100px" }}>
                        <button class="btn text-white border border-white rounded-pill">Our projects</button>
                        <button class="btn text-white border border-white rounded-pill ms-3">Connection</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;