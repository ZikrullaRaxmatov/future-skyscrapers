import React from 'react';
import info from '../assets/info1.avif'
import doc from '../assets/doc1.avif'
import repair from '../assets/repair1.avif'
import prof from '../assets/team1.avif'

function Services() {
    return (
        <div class="services " id='services'>
            <div class=" service-info pb-5">
                <div class="container">
                    <h1 class="text-center pt-5">Our services</h1>
                    <div class="raw d-md-flex px-3 pt-3">
                        <div data-aos="fade-down" data-aos-duration="3000" class="service-item col-12 col-md-6 col-lg-8 shadow border-start border-end  border-primary rounded-pill d-flex justify-content-end align-items-center">
                            {/* <i class="fa-solid fa-circle-info rounded-pill"></i> */}
                            <p>You can get <br /> free information </p>
                            <img src={info} alt="info" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" class="service-item col-12 col-md-6 col-lg-4  shadow border-start border-end border-primary rounded-pill d-flex justify-content-end align-items-center">
                            {/* <i class="fa-solid fa-file-contract rounded-pill"></i> */}
                            <p>Documents <br /> clearance</p>
                            <img src={doc} alt="info" />
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" class="raw d-md-flex px-3 pt-md-4">
                        <div class="service-item col-12 col-md-6 col-lg-4 shadow border-start border-end border-primary rounded-pill d-flex justify-content-end align-items-center">
                            {/* <i class="fa-solid fa-gears rounded-pill"></i> */}
                            <p>Repair <br /> service</p>
                            <img src={repair} alt="info" />
                        </div>
                        <div data-aos="fade-down" data-aos-duration="3000" class="service-item col-12 col-md-6 col-lg-8 shadow border-start border-end border-primary rounded-pill d-flex justify-content-end align-items-center">
                            {/* <i class="fa-solid fa-truck-fast rounded"></i> */}
                            <p>Team of <br /> professionals</p>
                            <img src={prof} alt="info" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;