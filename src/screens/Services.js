import React from 'react';

function Services() {
    return (
        <div class="services">
            <h1 class="text-center pt-3">Our services</h1>
            <div class="bg-color-light service-info">
                <div class="container">
                    <div class="raw d-flex px-3 pt-5">
                        <div class="col-8 row1-col1 shadow border border-dark rounded-pill d-flex justify-content-center align-items-center m-2">
                            <i class="fa-solid fa-circle-info fa-2xl m-5"></i>
                            <p class="fs-4 fw-bold fst-italic">You can get free information <br /> from our company's specialists</p>
                        </div>
                        <div class="col-4 row1-col2 shadow border border-dark rounded-pill d-flex justify-content-center align-items-center m-2">
                            <i class="fa-solid fa-file-contract fa-2xl m-5"></i>
                            <p class="fs-4 fw-bold fst-italic ">Documents <br /> clearance</p>
                        </div>
                    </div>
                    <div class="raw d-flex px-3 pt-4">
                        <div class="col-4 row1-col1 shadow border border-dark rounded-pill d-flex justify-content-center align-items-center m-2">
                            <i class="fa-solid fa-gears fa-2xl m-5"></i>
                            <p class="fs-4 fw-bold fst-italic ">Repair <br /> service</p>
                        </div>
                        <div class="col-8 row1-col2 shadow border border-dark rounded-pill d-flex justify-content-center align-items-center m-2">
                            <i class="fa-solid fa-truck-fast fa-2xl m-5"></i>
                            <p class="fs-4 fw-bold fst-italic ">Team of <br /> professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;