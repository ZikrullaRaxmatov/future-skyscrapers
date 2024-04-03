import React, { useState } from 'react';
import contact from '../assets/contact.avif'
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

function Contact() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    const [phone, setPhone] = useState("")
    const [fullName, setFullName] = useState("")
    const token = "7059841114:AAHetBoZeC10c2h0f-6ws6juSXHnXhpe0p4"
    const chat_id = "755982207"

    const submit = async (e) => {
        e.preventDefault()

        if (fullName || phone) {
            await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: `Full name: ${fullName} \nPhone number: ${phone}`
                })
            })
                .then(res => res.json())
                .then(info => {
                    toast.success("Your information has been send successfully!")
                    setFullName("")
                    setPhone("")
                })
                .catch(err => {
                    toast.error("Something went worong! \nPlease try again!")
                })
        } else {
            alert("Please, fill out the fields!!!")
        }
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
                            <div className="mt-3 mb-3">
                                <label htmlFor="textName" className="form-label">{t("contact.name")}</label>
                                <input type="text" className="form-control" id="textName" aria-describedby="emailHelp" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                <div id="textHelp" className="form-text text-danger">{t("contact.info")}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="textPhone" className="form-label">{t("contact.phone")}</label>
                                <input type="text" className="form-control" id="textPhone" value={phone} onChange={(e) => setPhone(e.target.value)} />
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