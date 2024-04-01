import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="footer" id='footer'>
            <div className="container">
                <div className="raw d-block d-md-flex justify-contet-center mb-3 ">
                    <div className="col-12  col-md-4 text-center mt-4">
                        <h1 className="grand-hotel-regular">Future <br /> skyscrapers</h1>
                        <h5 className="text-muted">{t("footer.subscribe")}</h5>
                        <ul className="footer-social-items">
                            <li className="footer-social-item">
                                <a href="facebook.com">
                                    <i className="fa-brands fa-facebook-f fa-xl"></i>
                                </a>
                            </li>
                            <li className="footer-social-item">
                                <a href='youtube.com' >
                                    <i className="fa-brands fa-youtube fa-xl text-danger"></i>
                                </a>
                            </li>
                            <li className="footer-social-item">
                                <a href='telegram.com' >
                                    <i className="fa-brands fa-telegram fa-xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12  col-md-4 text-center mt-4">
                        <h3>{t("footer.title1")}</h3>
                        <ul className="footer-company-items">
                            <li className="footer-company-item">
                                <a href='#main'>{t("footer.main")}</a>
                            </li>
                            <li className="footer-company-item">
                                <a href='#company'>{t("footer.company")}</a>
                            </li>
                            <li className="footer-company-item">
                                <a href='#services'>{t("footer.services")}</a>
                            </li>
                            <li className="footer-company-item">
                                <a href='#projects'>{t("footer.projects")}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12  col-md-4  text-center mt-4">
                        <h3>{t("footer.title2")}</h3>
                        <ul className="footer-company-items">
                            <li className="footer-company-item">
                                <a href='#01068532898'>+82-10-6853-2898</a>
                            </li>
                            <li className="footer-company-item">
                                <a href='#01068532899'>+82-10-6853-2899</a>
                            </li>
                            <li className="footer-company-item">
                                <a href='#01068532888'>+82-10-6853-2888</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;