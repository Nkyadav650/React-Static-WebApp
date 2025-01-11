import React from "react";
import Base from "./globlePage/Base";
import Image from "../buildingImage/Image";
import { Button, Form, Input } from "reactstrap";

const Contact = () => {


    return (
        <Base>
            <>
                <div className="contact">
                    <div className="contact_us">

                        <h2>GC Construction</h2>
                        <p>We are your trusted partner in construction. Reach out to us for inquiries or assistance.</p>
                    </div>
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.036400128739!2d82.62485907480159!3d24.065022676626146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f36a1cfd14639%3A0x163b4a6f0609aab9!2sAmbedkar%20Chowk%2C%20Waidhan%2C%20Madhya%20Pradesh%20486886!5e0!3m2!1sen!2sin!4v1708963252088!5m2!1sen!2sin"
                            width="100%" height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="phone_headquarter">
                        <div>
                            <div>
                                <h5>Headquarters</h5>
                                <p>GC Construction, Ambedkar Chowk,
                                    Waidhan, Singrauli, Madhya Pradesh, 486886</p>
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <p>Main Office: +91-7879634456,
                                    +91-9826795285</p>
                            </div>
                            <div >
                                <h5> Email</h5>
                                <p>General Inquiries: info@gcconstruction.com</p>
                            </div>
                            <div >
                                <h5>Business Hours</h5>
                                <p> 365 days: 8 AM to 10 PM</p>
                            </div>
                            <div>
                                <h5>We're Hiring</h5>
                                <p>Join our talented team. Explore career opportunities</p>
                            </div>

                            <div>
                                <h5>Visit Our Office</h5>
                                <p>Schedule an appointment to visit our office and discuss your project in person. We'd love to meet you!</p>
                            </div>
                        </div>

                        <div>

                            <Form className="contact-form" action="#" method="POST">
                                <p><b>Get in touch</b></p>
                                <p>Nullam dictum felis eu pede mollis pretium.</p>
                                <Input type="text" name="username" id="username" placeholder="Your Name*" autoComplete="off" required />
                                <Input type="email" name="email" id="email" placeholder="Email Address*" autoComplete="off" required />
                                <Input type="text" name="subject" id="subject" placeholder="Subject*" autoComplete="off" required />
                                <input type="tel" name="contact" id="contact" placeholder="Mobile Number*" autoComplete="off" required />

                                <textarea name="message" cols="47" rows="6" placeholder="Your message..." autoComplete="off" required />
                                <Button color="primary">SEND MESSAGE</Button>
                            </Form>
                        </div>
                    </div>
                    {/* 8. **Find Us on the Map:** */}
                    {/* [Google Maps Embedded Location] */}

                    <div className="social_contact">
                        <div>
                            <a href="https://www.facebook.com/nandkumar.yadav.127" target="_blank"><img src={Image.facebooklogo} alt="Facebook" width="50px" height="50px" /> Facebook</a>
                        </div>
                        <div>
                            <a href="https://twitter.com/home" target="_blank"><img src={Image.twitterXlogo} alt="Twitter" width="50px" height="50px" /> Twitter</a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/nandkumar_yadav650/?hl=en" target="_blank"><img src={Image.instagramlogo} alt="Instagrm" width="50px" height="50px" /> Instagrm</a>
                        </div>

                    </div>
                </div>

            </>
        </Base>
    )
}
export default Contact;