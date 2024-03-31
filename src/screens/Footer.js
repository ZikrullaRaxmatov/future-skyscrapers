import React from 'react';

function Footer() {
    return (
        <div class="footer" id='footer'>
            <div class="container">
                <div class="raw d-block d-md-flex justify-contet-center mb-3 ">
                    <div class="col-12  col-md-4 text-center mt-4">
                        <h3>Future <br /> skyscrapers</h3>
                        <h5 class="text-muted">Subscribe to our social networks</h5>
                        <ul class="footer-social-items">
                            <li class="footer-social-item">
                                <a href="facebook.com">
                                    <i class="fa-brands fa-facebook-f fa-xl"></i>
                                </a>
                            </li>
                            <li class="footer-social-item">
                                <a href='youtube.com' >
                                    <i class="fa-brands fa-youtube fa-xl text-danger"></i>
                                </a>
                            </li>
                            <li class="footer-social-item">
                                <a href='telegram.com' >
                                    <i class="fa-brands fa-telegram fa-xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12  col-md-4 text-center mt-4">
                        <h3>Our Company</h3>
                        <ul class="footer-company-items">
                            <li class="footer-company-item">
                                <a href='#main'>Main</a>
                            </li>
                            <li class="footer-company-item">
                                <a href='#company'>Company</a>
                            </li>
                            <li class="footer-company-item">
                                <a href='#services'>Services</a>
                            </li>
                            <li class="footer-company-item">
                                <a href='#projects'>Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12  col-md-4  text-center mt-4">
                        <h3>Communication</h3>
                        <ul class="footer-company-items">
                            <li class="footer-company-item">
                                <a href='#01068532898'>+82-10-6853-2898</a>
                            </li>
                            <li class="footer-company-item">
                                <a href='#01068532899'>+82-10-6853-2899</a>
                            </li>
                            <li class="footer-company-item">
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