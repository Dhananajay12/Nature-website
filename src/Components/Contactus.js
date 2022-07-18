import React from 'react'
import { Link } from 'react-router-dom'
import image from './Image/water.jpg'
const Contactus = () => {
    return (
        <>

            <div >

                <div className="margintop height-for-navbar" style={{ width: "100%",background: "black" }}></div>



            </div>
          
            <section className="contactus-section  " >
         
                <div className="container rounded margin-top-contact card-5" style={{ background:"white" }} >
                
                    <div className="row" >
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row ">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <ul style={{ marginTop: "0.5rem" }}>
                                        <br />
                                        <h1 className="" style={{ textDecoration: "none" }}>Contact</h1>
                                        <br />
                                        <li className="" style={{ textDecoration: "none", fontSize: "17px" }}><i className="fas fa-map-marker-alt" ></i> Satyam Heights,309/308 Opp. Anjali Hospital ,<br />Malang Road ,kalyan east ,<br /> Thane-421306,Maharashtra</li><br />
                                        <li style={{ textDecoration: "none", fontSize: "17px" }}> <i className="fa fa-phone-square" ></i> +919137319282</li><br />
                                        <li style={{ textDecoration: "none", fontSize: "17px" }} > <i className="fa fa-envelope"></i> support@razejobfinder.com</li><br />
                                    </ul>
                                    <Link to="/"><i className="fa fa-instagram fa-3x zoom  text-dark" style={{ marginTop: "1.2rem", marginBottom: "1.2rem", paddingRight: "1.5rem", paddingLeft: "1.5rem" }}></i></Link>
                                    <Link to="/"><i className="fa fa-twitter-square fa-3x zoom  text-dark" style={{ paddingRight: "1.5rem", paddingLeft: "1rem" }}></i></Link>
                                    <Link to="/"><i className="fa fa-facebook-square fa-3x zoom text-dark" style={{ paddingRight: "1.5rem", paddingLeft: "1rem" }}></i></Link>
                                    <Link to="/"><i className="fa fa-skype fa-3x zoom text-dark" style={{ paddingRight: "1.5rem", paddingLeft: "1.5rem" }}></i></Link>
                                </div>

                                {/* right side contact form  */}
                                <div className="contact-rightside col-12 col-lg-7">

                                    <center> <h1 style={{ marginBottom: "3rem", marginTop: "1rem" }}>Contact With our Team</h1></center>
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-3rem" }}>
                                                <p className="mt-3 mb-2" style={{ fontSize: "17px" }}>FullName:</p>
                                                <input
                                                    type="text"
                                                    name="user_name"
                                                    id=""
                                                    className="form-control"

                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-3rem" }}>
                                                <p  className="mt-3 mb-2" style={{ fontSize: "17px"}}>PHONE NO:</p>
                                                <input
                                                    type="text"
                                                    name="user_phone"
                                                    id=""
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem" }}>
                                                <p  className="mt-3 mb-2" style={{ fontSize: "17px"}}>EMAIL:</p>
                                                <input
                                                    type="text"
                                                    name="user_email"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem" }}>
                                                <p className="mt-3 mb-2" style={{ fontSize: "17px" }}>SUBJECT:</p>
                                                <input
                                                    type="text"
                                                    name="user_sub"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12  contact-input-feild " style={{ marginTop: "-2rem" }}>
                                                <p style={{ fontSize: "17px", marginLeft: "0px", marginBottom: "5px" }}>MASSAGE:</p>

                                                <textarea className='text_field contact_form_message card-6 ' id='' type="text" name="message" cols="30" rows="4" ></textarea>
                                            </div>
                                        </div>
                                        <div className="form-check form-checkbox-style " style={{ marginTop: "-1rem" }}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label
                                                className=" form-check-label main-hero-para " style={{ marginTop: "-1.5rem" }} >
                                                I agree that the Razejob Finder may contact me at the email address or phone number above
                                            </label>
                                        </div>

                                        <button
                                            style={{ marginTop: "1rem", fontSize: "18px" }}
                                            type="submit"
                                            value="Send"
                                            className="btn btn-dark w-100 mb-5 rounded ">
                                            Submit
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div className="container-fluid " >
                <p className="maps " ><iframe style={{ width: "100%", height: "27rem", border: "0", allowfullscreen: "", loading: "lazy" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4229.063075291826!2d73.13154841324223!3d19.209752753873097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795efeb3d38eb%3A0x8d8b68aab4d64d6d!2sAuxilum%20hospital!5e0!3m2!1sen!2sin!4v1644228214354!5m2!1sen!2sin" ></iframe></p>
            </div>


            <div className='row head2 footer-booknow margin-bottom mt-5' style={{ background: "black", marginBottom: "-2.9rem" }} >

                <div className='col-lg-8 col-md-8 ' style={{ color: "white", marginTop: "1.2rem", marginBottom: "1.2rem" }} >
                    <center> <h3 className='small2'>Are you looking for stock photos <br></br> for Your website?</h3></center>

                </div>
                <div className='col-lg-4 col-md-4' style={{ color: "white", marginTop: "2.5rem" }}>
                    <center>  <h4 className='small3 '><i className="fa fa-phone-square" ></i> Call +91928299829  or  <span>    <Link to="/" type="button" className="btn btn-outline-danger mx-1" >
                        Buy now
                    </Link></span></h4></center>


                </div>
            </div>
        </>
    )
}

export default Contactus