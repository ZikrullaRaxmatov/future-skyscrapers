import React from 'react';

function Services() {
    return (
        <div class="services">
            <div class=" service-info pb-4">
                <div class="container">
                    <h1 class="text-center pt-5">Our services</h1>
                    <div class="raw d-md-flex px-3 pt-3">
                        <div class="service-item col-12 col-md-6 col-lg-8 shadow border border-primary rounded-pill d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-circle-info rounded-pill"></i>
                            <p>You can get <br /> free information </p>
                        </div>
                        <div class="service-item col-12 col-md-6 col-lg-4  shadow border border-primary rounded-pill d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-file-contract rounded-pill"></i>
                            <p>Documents <br /> clearance</p>
                        </div>
                    </div>
                    <div class="raw d-md-flex px-3 pt-md-4">
                        <div class="service-item col-12 col-md-6 col-lg-4 shadow border border-primary rounded-pill d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-gears rounded-pill"></i>
                            <p>Repair <br /> service</p>
                        </div>
                        <div class="service-item col-12 col-md-6 col-lg-8 shadow border border-primary rounded-pill d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-truck-fast rounded"></i>
                            <p>Team of <br /> professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;