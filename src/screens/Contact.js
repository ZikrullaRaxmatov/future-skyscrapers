import React from 'react';
import contact from '../assets/contact.avif'

function Contact() {
    return (
        <div className="contact" id='communication'>
            <div data-aos="fade-up" data-aos-duration="2000" className="card text-bg-dark">
                <div className="container">
                    <img src={contact} className="card-img" alt="contact" />
                    <div className="card-img-overlay d-flex justify-content-center align-items-center">
                        <form>
                            <h2>
                                Do you have any questions, <br/> suggestions or requests?
                            </h2>
                            <div className="mt-3 mb-3">
                                <label htmlFor="textName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="textName" aria-describedby="emailHelp" />
                                <div id="textHelp" className="form-text text-danger">We'll never share your info with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="textPhone" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="textPhone" />
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;