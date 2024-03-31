import React from 'react';
import contact from '../assets/contact.avif'

function Contact() {
    return (
        <div class="contact" id='contact'>
            <div class="card text-bg-dark">
                <div class="container">
                    <img src={contact} class="card-img" alt="contact" />
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                        <form>
                            <h2>
                                Do you have any questions, <br/> suggestions or requests?
                            </h2>
                            <div class="mt-3 mb-3">
                                <label for="textName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="textName" aria-describedby="emailHelp" />
                                <div id="textHelp" class="form-text text-danger">We'll never share your info with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="textPhone" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="textPhone" />
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;