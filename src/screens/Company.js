import React from 'react';
import growingImg from '../assets/man.avif'
import CountUp from 'react-countup';


function Company() {
    return (
        <div className="company" id='company'>
            <div className="company-img">
                <img src={growingImg} alt='growing' />
            </div>
            <div className="container">
                <div className="company-items">
                    <div className="raw">
                        <h1 className="mt-1 mt-lg-3">Our Company</h1>
                    </div>
                    <div className="raw company-info">
                        <div data-aos="zoom-out" data-aos-duration="2000" className="left">
                            <div className="col-3">
                                <h1> <CountUp end={120} duration={6}  /> +</h1>
                                <p>Number of employees</p>
                            </div>
                            <div className="col-3">
                                <h1><CountUp end={43} duration={6}/>+</h1>
                                <p>Objects</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2000" className="right">
                            <div className="col-3 last">
                                <h1><CountUp end={250} duration={6}/> +</h1>
                                <p>Special equipment</p>
                            </div>
                            <div className="col-3 last">
                                <h1><CountUp end={2} duration={6}/> +</h1>
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