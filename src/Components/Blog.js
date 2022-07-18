import React from 'react'
import image from './Image/11.jpg'
import image1 from './Image/12.jpg'
import image2 from './Image/13.jpg'
import image3 from './Image/14.jpg'
import image4 from './Image/15.jpg'
import image5 from './Image/8.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>

            <div>

                {/* <img src={image2} alt="error" style={{width:"100%" , height:'20rem' ,marginTop:"-5rem"}}></img> */}

                <div className="margintop " style={{ width: "100%", height: '5rem', background: "black" }}></div>

            </div>

            <div className='container mt-5 mb-5' >
                <center>
                    <h2>The standard Lorem Ipsum BLOG page</h2>
                    <h5 className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
                </center>

            </div>



            <div className='container card-5 rounded'>
                <div className='row'>
                    <div className='col-md-6 mb-3' style={{ marginLeft: "0rem", marginTop: "1rem" }} >
                        <center>  <img src={image} alt='error13' className='img-fluid rounded '></img></center>

                    </div>

                    <div className='col-md-6 ' style={{ marginLeft: "0rem" }}>

                        <br />
                        <br />


                        <h4 className=''>We are a private limited company, via our expert team of maids services staff assist people from India to find a solution for their home
                            assistance needs. </h4>
                        <br />
                        <p style={{ color: "grey", fontFamily: "Poppins" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>

                        <button type="button" className="btn btn-danger mb-2" >Read More</button>

                    </div>





                </div>

            </div>

            <div className='container mt-5 rounded'>
                <div className='row'>

                    <div className="card card-5 mx-2 mt-3" style={{ width: "26rem" }}>
                        <img className="card-img-top mt-2" src={image4} alt="Card image cap" style={{ height: "100%" }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card card-5 mx-2 mt-3" style={{ width: "26rem" }}>
                        <img className="card-img-top mt-2" src={image1} alt="Card image cap" style={{ height: "100%" }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card card-5 mx-2 mt-3" style={{ width: "26rem" }}>
                        <img className="card-img-top mt-2" src={image2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>



                </div>

                <div className='row'>

                    <div className="card card-5 mx-2 mt-3" style={{ width: "26rem" }}>
                        <img className="card-img-top mt-2" src={image3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card card-5 mx-2 mt-3" style={{ width: "26rem" }}>
                        <img className="card-img-top mt-2" src={image4} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card card-5 mx-2 mt-3" style={{ width: "26rem" }}>
                        <img className="card-img-top mt-2" src={image5} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>



                </div>
            </div>


            <div className='container-fluid mt-4'>
                <div className='row'>

                    <h5 className='text-secondary'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </h5>
                </div>
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

export default Blog