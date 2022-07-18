import React from 'react'
import image from "./Image/Mass.jpg"
import image1 from "./Image/13.jpg"
import image2 from "./Image/14.jpg"
import image3 from "./Image/12.jpg"

import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import About from './About'

const Home = () => {
  return (
    <>

      <Carousel fade className='margintop' >
        <Carousel.Item>
          <img

            className="d-block w-100 imagesize"
            src={image3}
            alt="Second slide"
          />
          <Carousel.Caption >
            <div className="slide-up left-margin">
              <p style={{ color: "white", fontSize: '25px' }}>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

          </Carousel.Caption>
          <Carousel.Caption >
            <div class="slide-down left-margin" >
              <p style={{ color: "white", fontSize: '25px' }}>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img

            className="d-block w-100 imagesize"
            src={image1}
            alt="Second slide"
          />
          <Carousel.Caption >
            <div className="slide-up left-margin">
              <p style={{ color: "white", fontSize: '25px' }}>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

          </Carousel.Caption>
          <Carousel.Caption >
            <div class="slide-down left-margin" >
              <p style={{ color: "white", fontSize: '25px' }}>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img

            className="d-block w-100 imagesize"
            src={image2}
            alt="Third slide"
          />
          <Carousel.Caption >
            <div className="slide-up left-margin">
              <p style={{ color: "white", fontSize: '25px' }}>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

          </Carousel.Caption>
          <Carousel.Caption >
            <div class="slide-down left-margin" >
              <p style={{ color: "white", fontSize: '25px' }}>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>


      <div className='container mt-3' >
        <div className='row animated animatedFadeInUp fadeInUp'>
          <center > <h2 style={{ color: "#121212", fontFamily: "Poppins" }}>WELCOME TO<span style={{ color: "red" }}> NATURE.IN</span></h2></center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='col-md-6' style={{ marginLeft: "0rem" }}>
            <h2 style={{ color: "#121212", fontFamily: "Poppins" }}>WHO ARE<span style={{ color: "red" }}> WE?</span></h2>
            <br />
            <p style={{ color: "grey", fontFamily: "Poppins" }}>
              RazeJobFinder, has been offering maid service in Kalyan-Dombivali . Being the best maid agency in Kalyan-Dombivali, we offer 24 hour maid service
              across Indian cities. With us, you can find the right maid, domestic help, housemaids, cooks ,caretakers, ayaas, peons, nurses, ward boys,
              babysitters , elderly caretakers , and any domestic help you are looking for. Through the experience of our Experts, RazeJobFinder helps
              you find the staff as per your requirement. Using RazeJobFinder.com you will definitely find the best domestic helper to ease your life.

            </p>
            <p style={{ color: "grey", fontFamily: "Poppins" }}>We are a private limited company, via our expert team of maids services staff assist people from India to find a solution for their home
              assistance needs. Using our maid services people can search home maids across any Indian cities.</p>
            <br />


            <Link className="btn btn-dark mx-1 " to="/" role="button" style={{}}>Read More</Link>


          </div>

          <div className='col-md-6' style={{ marginLeft: "0rem", marginTop: "1rem" }} >
            <center>  <img src={image} alt='error13' className='img-fluid '></img></center>

          </div>


        </div>
        <br />
        <div className='row animated animatedFadeInUp fadeInUp'>
          <div className='col-md-6'>
            <h3 style={{ color: "#121212", fontFamily: "Poppins" }}>Why We Do<span style={{ color: "red" }}> Business</span></h3>
            <p style={{ color: "grey", fontFamily: "Poppins" }}>
              At RazeJobFinder, we intend to make lives easier by providing maid service in Kalyan-Dombivali. Finding domestic help was a hassle until RazeJobFinder was launched. We have helped thousands of help seekers find what they are looking for whether it be a maid, cook, domestic helper, nanny or nurse.</p>

          </div>
          <div className='col-md-6'>
            <h3 style={{ color: "#121212", fontFamily: "Poppins" }}>How We <span style={{ color: "red" }}>Do It</span></h3>
            <p style={{ color: "grey", fontFamily: "Poppins" }}>With years of experience and trust, RazeJobFinder.com is now recognized as a reliable and dependable maid agency in Kalyan-Dombivali. Using design thinking as a business tool, we create environments, products and services at democratic prices that awe, inspire people and lift them out of the everyday into a happy and creative mental world.</p>

          </div>
        </div>

        <div className='row animated animatedFadeInUp fadeInUp'>



          <div className='col-md-6' style={{ marginLeft: "0rem", marginTop: "1rem" }} >
            <center>  <img src={image} alt='error13' className='img-fluid '></img></center>

          </div>
          <div className='col-md-6' style={{ marginLeft: "0rem" }}>
            <h2 style={{ color: "#121212", fontFamily: "Poppins" }}>WHO ARE<span style={{ color: "red" }}> WE?</span></h2>
            <br />
            <p style={{ color: "grey", fontFamily: "Poppins" }}>
              RazeJobFinder, has been offering maid service in Kalyan-Dombivali . Being the best maid agency in Kalyan-Dombivali, we offer 24 hour maid service
              across Indian cities. With us, you can find the right maid, domestic help, housemaids, cooks ,caretakers, ayaas, peons, nurses, ward boys,
              babysitters , elderly caretakers , and any domestic help you are looking for. Through the experience of our Experts, RazeJobFinder helps
              you find the staff as per your requirement. Using RazeJobFinder.com you will definitely find the best domestic helper to ease your life.

            </p>
            <p style={{ color: "grey", fontFamily: "Poppins" }}>We are a private limited company, via our expert team of maids services staff assist people from India to find a solution for their home
              assistance needs. Using our maid services people can search home maids across any Indian cities.</p>
            <br />


            <Link className="btn btn-dark mx-1 " to="/" role="button" style={{ backgroundColor: "#121212" }}>Read More</Link>


          </div>

        </div>

        <div className='row animated animatedFadeInUp fadeInUp'>



          <div className='col-md-6' style={{ marginLeft: "0rem", marginTop: "1rem" }} >

            <br />
            <p style={{ color: "grey", fontFamily: "Poppins" }}>
              RazeJobFinder, has been offering maid service in Kalyan-Dombivali . Being the best maid agency in Kalyan-Dombivali, we offer 24 hour maid service
              across Indian cities. With us, you can find the right maid, domestic help, housemaids, cooks ,caretakers, ayaas, peons, nurses, ward boys,
              babysitters , elderly caretakers , and any domestic help you are looking for. Through the experience of our Experts, RazeJobFinder helps
              you find the staff as per your requirement. Using RazeJobFinder.com you will definitely find the best domestic helper to ease your life.

            </p>
            <p style={{ color: "grey", fontFamily: "Poppins" }}>We are a private limited company, via our expert team of maids services staff assist people from India to find a solution for their home
              assistance needs. Using our maid services people can search home maids across any Indian cities.</p>
            <br />



          </div>
          <div className='col-md-6' style={{ marginLeft: "0rem" }}>

            <br />
            <p style={{ color: "grey", fontFamily: "Poppins" }}>
              RazeJobFinder, has been offering maid service in Kalyan-Dombivali . Being the best maid agency in Kalyan-Dombivali, we offer 24 hour maid service
              across Indian cities. With us, you can find the right maid, domestic help, housemaids, cooks ,caretakers, ayaas, peons, nurses, ward boys,
              babysitters , elderly caretakers , and any domestic help you are looking for. Through the experience of our Experts, RazeJobFinder helps
              you find the staff as per your requirement. Using RazeJobFinder.com you will definitely find the best domestic helper to ease your life.

            </p>
            <p style={{ color: "grey", fontFamily: "Poppins" }}>We are a private limited company, via our expert team of maids services staff assist people from India to find a solution for their home
              assistance needs. Using our maid services people can search home maids across any Indian cities.</p>
            <br />




          </div>


        </div>
        <div className='row animated animatedFadeInUp fadeInUp'>



          <div className='col-md-6' style={{ marginLeft: "0rem", marginTop: "1rem" }} >

            <br />
            <p style={{ color: "grey", fontFamily: "Poppins" }}>
              RazeJobFinder, has been offering maid service in Kalyan-Dombivali . Being the best maid agency in Kalyan-Dombivali, we offer 24 hour maid service
              across Indian cities. With us, you can find the right maid, domestic help, housemaids, cooks ,caretakers, ayaas, peons, nurses, ward boys,
              babysitters , elderly caretakers , and any domestic help you are looking for. Through the experience of our Experts, RazeJobFinder helps
              you find the staff as per your requirement. Using RazeJobFinder.com you will definitely find the best domestic helper to ease your life.

            </p>
            <p style={{ color: "grey", fontFamily: "Poppins" }}>We are a private limited company, via our expert team of maids services staff assist people from India to find a solution for their home
              assistance needs. Using our maid services people can search home maids across any Indian cities.</p>
            <br />



          </div>
          <div className='col-md-6' style={{ marginLeft: "0rem" }}>

            <br />
            <p style={{ color: "grey", fontFamily: "Poppins" }}>
              RazeJobFinder, has been offering maid service in Kalyan-Dombivali . Being the best maid agency in Kalyan-Dombivali, we offer 24 hour maid service
              across Indian cities. With us, you can find the right maid, domestic help, housemaids, cooks ,caretakers, ayaas, peons, nurses, ward boys,
              babysitters , elderly caretakers , and any domestic help you are looking for. Through the experience of our Experts, RazeJobFinder helps
              you find the staff as per your requirement. Using RazeJobFinder.com you will definitely find the best domestic helper to ease your life.

            </p>
            <p style={{ color: "grey", fontFamily: "Poppins" }}>We are a private limited company, via our expert team of maids services staff assist people from India to find a solution for their home
              assistance needs. Using our maid services people can search home maids across any Indian cities.</p>
            <br />




          </div>


        </div>




      </div>



      <div className='row head2 footer-booknow margin-bottom' style={{background:"black" ,marginBottom:"-2.9rem"}} >

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

export default Home