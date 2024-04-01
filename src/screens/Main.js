import React from 'react';
import mainImg from '../assets/imageMain.avif'
import { useTranslation } from 'react-i18next';

function Main() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="main" id='main'>
            <img data-aos="fade-right" data-aos-duration="2000" className="main-image" src={mainImg} alt='mainImg' />
            <div className="container">
                <div className="main-info">
                    <div className='main-title border border-danger'>
                        <p className='title-p' data-aos="zoom-in" data-aos-duration="3000"> {t("main.subtitle")}</p>
                        <h1 className='title-h' data-aos="zoom-in" data-aos-duration="3000" >Future <br /> Skyscrapers</h1>
                    </div>

                    <div className="main-btns border border-danger">
                        <a href='#communication' className="btn rounded-pill" data-aos="fade-right" data-aos-duration="3000" >{t("main.btnconnection")}</a>
                        <a href='#projects' className=" btn rounded-pill" data-aos="fade-right" data-aos-duration="3000" >{t("main.btnprojects")}</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;