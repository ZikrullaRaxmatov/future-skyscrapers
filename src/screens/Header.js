import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import eng from '../assets/flag-eng.jpg'
import uzb from '../assets/flag-uzb.png'
import kor from '../assets/flag-kor.png'

function Header() {

    const [t, i18n] = useTranslation("global")
    const [bgColor, setBgColor] = useState(false);

    const changeHeaderColor = () => {
        if (window.scrollY >= 600) {
            setBgColor(true)
        } else {
            setBgColor(false)
        }
    }

    const changeLanguage = (lan) => {
        i18n.changeLanguage(lan)
    }

    window.addEventListener('scroll', changeHeaderColor)

    return (
        <div className="header" >
            <nav className={bgColor ? 'navbar fixed-top header-scroll-bg' : "navbar fixed-top" }>
                <div className="container ">
                    <div className="raw d-flex w-100">
                        <div className="col-6 col-md-12 ">
                            <ul className="nav nav-underline justify-content-evenly align-items-center d-none d-md-flex ">
                                <li className="nav-item">
                                    <a className="nav-link header-text" href="#main">{t("header.main")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-text" href="#company">{t("header.about")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-text" href="#services">{t("header.services")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white text-center" href="#main">
                                        <h3 className="grand-hotel-regular">
                                            Future
                                            <br />
                                            Skyscrapers
                                        </h3>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-text" href='#projects'>{t("header.projects")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-text" href='#communication'>{t("header.contact")}</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle header-text" data-bs-toggle="dropdown" href="#lan" role="button" aria-expanded="false">{t("header.lan")}</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#eng" onClick={() => changeLanguage("en")} ><img className='rounded me-2' style={{ width: "30px" }} src={eng} alt="Eng" /> English</a></li>
                                        <li><a className="dropdown-item" href="#uzb" onClick={() => changeLanguage("uz")} ><img className='rounded me-2' style={{ width: "30px" }} src={uzb} alt="Uzb" /> O'zbekcha</a></li>
                                        <li><a className="dropdown-item" href="#kor" onClick={() => changeLanguage("ko")} ><img className='rounded me-2' style={{ width: "30px" }} src={kor} alt="Kor" /> 한국어</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <button className="navbar-toggler d-md-none mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                {/* <span className="navbar-toggler-icon"></span> */}
                                <span><i className="fa-solid fa-sliders"></i></span>
                            </button>
                        </div>
                        <div className="col-6 d-flex justify-content-end d-md-none">
                            <a className="nav-link  d-md-none" href="#!">
                                <a className="nav-link text-center" href="#main">
                                    <h3 className="grand-hotel-regular">Future
                                        <br />
                                        Skyscrapers
                                    </h3>
                                </a>
                            </a>
                            <div className="offcanvas offcanvas-end bg-color-light text-white" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                        <a className="nav-link text-center" href="#main">
                                            <h3 className="grand-hotel-regular">Future
                                                <br />
                                                Skyscrapers
                                            </h3>
                                        </a>
                                    </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link text-white " href="#main">{t("header.main")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#company">{t("header.about")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#services">{t("header.services")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href='#projects'>{t("header.projects")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href='#communication'>{t("header.contact")}</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#lan" role="button" aria-expanded="false">{t("header.lan")}</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#eng" onClick={() => changeLanguage("en")} ><img className='rounded me-2' style={{ width: "30px" }} src={eng} alt="Eng" /> English</a></li>
                                                <li><a className="dropdown-item" href="#uzb" onClick={() => changeLanguage("uz")} ><img className='rounded me-2' style={{ width: "30px" }} src={uzb} alt="Uzb" /> O'zbekcha</a></li>
                                                <li><a className="dropdown-item" href="#kor" onClick={() => changeLanguage("ko")} ><img className='rounded me-2' style={{ width: "30px" }} src={kor} alt="Kor" /> 한국어</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;