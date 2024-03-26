import React from 'react';

function Header(props) {
    return (
        <div class='header'>
            <nav class="navbar fixed-top">
                <div class="container-fluid border border-danger">
                    <div class="raw d-flex w-100">
                        <div class="col-6 col-md-12 border border-success">
                            <ul class="nav nav-underline justify-content-evenly align-items-center d-none d-md-flex ">
                                <li class="nav-item">
                                    <a class="nav-link" href="#main">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#company">About company</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-center border border-success" href="#main">
                                        <h5>Future
                                            <br />
                                            Skyscrapers
                                        </h5>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href='#projects'>Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='#news'>News</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='#communication'>Communication</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='#communication'>En</a>
                                </li>
                            </ul>
                            <button class="navbar-toggler d-md-none mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="col-6 d-flex justify-content-end d-md-none border border-danger ">
                            <a class="nav-link  d-md-none" href="#!">
                                <a class="nav-link text-center border border-success" href="#main">
                                    <h5>Future
                                        <br />
                                        Skyscrapers
                                    </h5>
                                </a>
                            </a>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                                        <a class="nav-link text-center border border-success" href="#main">
                                            <h5>Future
                                                <br />
                                                Skyscrapers
                                            </h5>
                                        </a>
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#main">Main</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#company">About company</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#services">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href='#projects'>Projects</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href='#news'>News</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href='#communication'>Communication</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href='#communication'>En</a>
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