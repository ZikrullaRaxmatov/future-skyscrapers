import React, { useState } from 'react';
import growingImg from '../assets/man.avif'
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import ScrollTrigger from 'react-scroll-trigger';


function Company() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")
    const [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className="company" id='company'>
                <div className="company-img">
                    <img src={growingImg} alt='growing' />
                </div>
                <div className="container">
                    <div className="company-items">
                        <div className="raw">
                            <h1 className="mt-1 mt-lg-3">{t("about.title")}</h1>
                        </div>
                        <div className="raw company-info">
                            <div data-aos="zoom-out" data-aos-duration="2000" className="left">
                                <div className="col-3">
                                    <h1> {counterOn && <CountUp start={0} end={120} duration={6} delay={0} />}  +</h1>
                                    <p>{t("about.employees")}</p>
                                </div>
                                <div className="col-3">
                                    <h1>{counterOn && <CountUp start={0} end={43} duration={6} delay={0} />} +</h1>
                                    <p>{t("about.objects")}</p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="2000" className="right">
                                <div className="col-3 last">
                                    <h1>{counterOn && <CountUp start={0} end={250} duration={6} delay={0} />} +</h1>
                                    <p>{t("about.equipment")}</p>
                                </div>
                                <div className="col-3 last">
                                    <h1>{counterOn && <CountUp start={0} end={2} duration={6} delay={0} />} +</h1>
                                    <p>{t("about.experience")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>

    );
}

export default Company;