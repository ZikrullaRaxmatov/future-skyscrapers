import React from 'react';

function Services() {
    return (
        <div class="services">
            <div class="bg-color-gradient service-info pb-4">
                <div class="container">
                    <h1 class="text-center text-white pt-4">Our services</h1>
                    <div class="raw d-md-flex px-3 pt-3">
                        <div class="service-item col-12 col-md-6 col-lg-8 shadow border border-dark rounded-pill d-flex justify-content-center align-items-center m-2">
                            <i class="fa-solid fa-circle-info"></i>
                            <p>You can get <br /> free information </p>
                        </div>
                        <div class="service-item col-12 col-md-6 col-lg-4  shadow border border-dark rounded-pill d-flex justify-content-center align-items-center m-2">
                            <i class="fa-solid fa-file-contract fa-2xl"></i>
                            <p>Documents <br /> clearance</p>
                        </div>
                    </div>
                    <div class="raw d-md-flex px-3 pt-md-4">
                        <div class="service-item col-12 col-md-6 col-lg-4 shadow border border-dark rounded-pill d-flex justify-content-center align-items-center m-2">
                            <i class="fa-solid fa-gears fa-2xl"></i>
                            <p>Repair <br /> service</p>
                        </div>
                        <div class="service-item col-12 col-md-6 col-lg-8 shadow border border-dark rounded-pill d-flex justify-content-center align-items-center m-2">
                            <i class="fa-solid fa-truck-fast fa-2xl"></i>
                            <p>Team of <br /> professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;