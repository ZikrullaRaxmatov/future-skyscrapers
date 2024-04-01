import React from 'react';
import info from '../assets/info1.avif'
import doc from '../assets/doc1.avif'
import repair from '../assets/repair1.avif'
import prof from '../assets/team1.avif'
import { useTranslation } from 'react-i18next';

function Services() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="services " id='services'>
            <div className=" service-info pb-5">
                <div className="container">
                    <h1 className="text-center pt-5">{t("services.title")}</h1>
                    <div className="raw d-md-flex px-3 pt-3">
                        <div data-aos="fade-down" data-aos-duration="3000" className="service-item col-12 col-md-6 col-lg-8 shadow border-start border-end  border-primary rounded-pill d-flex justify-content-end align-items-center">
                            {/* <i className="fa-solid fa-circle-info rounded-pill"></i> */}
                            <p>{t("services.info1")} <br /> {t("services.info2")} </p>
                            <img src={info} alt="info" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className="service-item col-12 col-md-6 col-lg-4  shadow border-start border-end border-primary rounded-pill d-flex justify-content-end align-items-center">
                            {/* <i className="fa-solid fa-file-contract rounded-pill"></i> */}
                            <p>{t("services.doc1")} <br /> {t("services.doc2")}</p>
                            <img src={doc} alt="info" />
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className="raw d-md-flex px-3 pt-md-4">
                        <div className="service-item col-12 col-md-6 col-lg-4 shadow border-start border-end border-primary rounded-pill d-flex justify-content-end align-items-center">
                            {/* <i className="fa-solid fa-gears rounded-pill"></i> */}
                            <p>{t("services.repair1")} <br /> {t("services.repair2")}</p>
                            <img src={repair} alt="info" />
                        </div>
                        <div data-aos="fade-down" data-aos-duration="3000" className="service-item col-12 col-md-6 col-lg-8 shadow border-start border-end border-primary rounded-pill d-flex justify-content-end align-items-center">
                            {/* <i className="fa-solid fa-truck-fast rounded"></i> */}
                            <p>{t("services.team1")} <br /> {t("services.team2")}</p>
                            <img src={prof} alt="info" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;