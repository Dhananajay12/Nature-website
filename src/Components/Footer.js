import React, {useEffect}  from 'react';
import { Link } from 'react-router-dom';

import image from "./Image/Mass.jpg"
const Footer = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //  }, [])
  
   
    return (
        <>

            <footer style={{  marginBottom: "-2rem" }} className="mt-5">

                <div className='background5' style={{background:"black" , opacity:""}} >
                    <div className='transbox5' >
                        <div className='container'>
                            <div className='row'>
                                <div className="col-sm-6 col-md-4  mt-5 mb-5"   style={{  fontFamily: "Poppins"   }}>
                                    <ul  >

                                    <h2  className="text-white mt-4" >About Us</h2>
                                        {/* <img  className="mt-4" src={image} classNAme="mb-5" alt="error" style={{width:"50px" ,height:"50px"}}></img>   */}
                                        <p  className="mt-3" style={{ color: "white" ,fontFamily: "Poppins"}}> Daily life has become complicated and stressful.<br></br>
                                            We often wish that we had a genie who could
                                            take some load off our daily chores so that<br />
                                            we can have a little bit of extra time to do something we love.<br />
                                            Don't we?<br />
                                            RazeJob Finder help you to do that.</p>
                                        <Link to="/aboutus" className="btn btn-outline-danger" style={{ marginTop: "1rem"}}>Learn More</Link>

                                    </ul>
                                </div>


                                <div className="col-sm-6 col-md-4 mt-5 mb-5" style={{  fontFamily: "Poppins"   }} >

                                    <ul>
                                        <br />
                                        <h2  className="text-white mb-4" >Quick Link</h2>
                                        <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}><Link  to="/housemaid"  className="text-white color mt-1"> <i className="fa fa-angle-right" aria-hidden="true"></i> Using Bhagavad-Gita For Everyday Life</Link></li>
                                        <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}>  <Link to="/cook"  className="text-white color"> <i className="fa fa-angle-right" aria-hidden="true"></i> About Dudhgaonkar Family</Link></li>
                                        <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}><Link  to="/babysitter"  className="text-white color"><i className="fa fa-angle-right" aria-hidden="true"></i>Sahakar Maharshi Late Limbajirao Nagorao Dudhgaonkar</Link></li>
                                        <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}>  <Link to="/cook"  className="text-white color"> <i className="fa fa-angle-right" aria-hidden="true"></i> Samir Dudhgaonkar. (M. S. Mech Engg USA)</Link></li>
                                    </ul>
                                </div>



                         
                                <div className="col-sm-6 col-md-4 mt-5 mb-5" style={{  fontFamily: "Poppins"   }}>
                                    <ul>
                                        <br />
                                        <h2 className='text-white mb-4' >Contact</h2>
                                 
                                        <li className='text-white'  ><i className="fa fa-phone-square" ></i>+919137319282</li><br />
                                        <li  className='text-white'   > <i className="fa fa-envelope"></i> support@razejobfinder.com</li><br />
                                        <li className='text-white' ><i className="fa fa-map-marker" ></i> Satyam Heights,309/308 Opp. Anjali Hospital ,<br />Malang Road ,kalyan east ,<br /> Thane-421306,Maharashtra</li><br />
                                    </ul>



                                </div>
                       
                            </div>
                        
                        </div>
                      
                    </div>

                </div>
                
            </footer>
            <div className='col-md-12 mt-4' style={{height:"5rem",background:"#5e5c5c",color:"white",marginBottom:"-4rem"}}>
           <center  style={{marginTop:"0.6rem" ,fontFamily: "Poppins" }} className="left2 fontsize">  © Copyright 2022, <Link to="/" className="text-dark" style={{ textDecoration:"none"}}>Razejobfinder.com </Link>  All Rights Reserved</center> 
           <center    style={{marginTop:"0.6rem",fontFamily: "Poppins"}} className="right2 fontsize">Designed By <Link to="/"  className="text-dark" style={{textDecoration:"none"}}>Razer</Link> </center> 
        
 

        
            </div>





        </>


    );
};

export default Footer;