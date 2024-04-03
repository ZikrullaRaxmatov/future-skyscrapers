import React, { useState } from 'react';
import contact from '../assets/contact.avif'
import { useTranslation } from 'react-i18next';

function Contact() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const submit = async (e) => {
        e.preventDefault()

        await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone_number: phone,
                password: password
            })
        })
            .then(res => res.json())
            .then(info => {
                console.log(info.data);
                localStorage.setItem("accessToken", info.data.tokens.accessToken.token)
            })
            .catch(err => {
                console.log(err);
            })
    }

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
                            <div className="mb-3">
                                <label htmlFor="textPhone" className="form-label">{t("contact.phone")}</label>
                                <input type="text" className="form-control" id="textPhone" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="mt-3 mb-3">
                                <label htmlFor="textName" className="form-label">{t("contact.name")}</label>
                                <input type="password" className="form-control" id="textName" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
                                <div id="textHelp" className="form-text text-danger">{t("contact.info")}</div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={(e) => submit(e)} >{t("contact.btnsend")}</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;