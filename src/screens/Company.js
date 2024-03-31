import React from 'react';
import growingImg from '../assets/man.avif'
import CountUp from 'react-countup';


function Company() {
    return (
        <div class="company">
            <div class="company-img">
                <img src={growingImg} alt='growing' />
            </div>
            <div class="container">
                <div class="company-items">
                    <div class="raw">
                        <h1 class="mt-1 mt-lg-3">Our Company</h1>
                    </div>
                    <div class="raw company-info">
                        <div class="left">
                            <div class="col-3">
                                <h1> <CountUp end={120} /> +</h1>
                                <p>Number of employees</p>
                            </div>
                            <div class="col-3">
                                <h1>43 +</h1>
                                <p>Objects</p>
                            </div>
                        </div>
                        <div class="right">
                            <div class="col-3 last">
                                <h1>250 +</h1>
                                <p>Special equipment</p>
                            </div>
                            <div class="col-3 last">
                                <h1>2 +</h1>
                                <p>14 years on the market</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Company;