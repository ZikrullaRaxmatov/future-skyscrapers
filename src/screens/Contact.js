import React from 'react';
import contact from '../assets/contact.avif'
import { useTranslation } from 'react-i18next';

function Contact() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="contact" id='communication'>
            <div data-aos="fade-up" data-aos-duration="2000" className="card text-bg-dark">
                <div className="container">
                    <img src={contact} className="card-img" alt="contact" />
                    <div className="card-img-overlay d-flex justify-content-center align-items-center">
                        <form>
                            <h2>
                                {t("contact.title1")} <br /> {t("contact.title2")}
                            </h2>
                            <div className="mt-3 mb-3">
                                <label htmlFor="textName" className="form-label">{t("contact.name")}</label>
                                <input type="text" className="form-control" id="textName" aria-describedby="emailHelp" />
                                <div id="textHelp" className="form-text text-danger">{t("contact.info")}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="textPhone" className="form-label">{t("contact.phone")}</label>
                                <input type="text" className="form-control" id="textPhone" />
                            </div>
                            <button type="submit" className="btn btn-primary">{t("contact.btnsend")}</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;