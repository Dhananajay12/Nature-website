import React, { useState } from 'react'

import { GiHamburgerMenu } from "react-icons/gi";
// import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

import logo from './Image/logo2.jpg'

const Navbars = () => {


    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const [color, setColor] = useState(false);

    const [logos, setLogo] = useState(false);

    
    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

   

    const changeLogo = () => {
        if (window.scrollY >= 50) {
            setLogo(true)
        } else {
            setLogo(false)
        }
    }
    window.addEventListener('scroll', changeLogo)

    const RenderMenu = () => {
    if (logos) {
        return (
          <>
         <img src={logo} alt="erroe" style={{height:"80px" , weight:"200px" , marginTop:"-0.5rem"}}></img>
          </>
        )
      } else {
        return (
          <>
          <i className="fa fa-tree mx-2 text-danger " style={{ fontSize: "30px", color: "white" }}></i>
          <span className='text-danger'>N</span>ature
          <span className='text-danger'>C</span>apture
          </>
        )
      }
    }



    return (
        <>
            <nav className={color ? 'main-nav  main-nav-bg' : 'main-nav'}  >
                <div className='logo' >
                    <h2 style={{ color: "white" }}>

           <RenderMenu></RenderMenu>
                    {/* <img src={logo} alt="erroe" style={{height:"80px" , weight:"200px" , marginTop:"-0.5rem"}}></img>
                        <span>N</span>ature
                        <span>O</span>ne */}
                    </h2>
                </div>
                <div className={showMediaIcons ? "menu-link mobile-menu-link " : 'menu-link'}>
                    <ul className="" >
                        <li className='zoom'>
                            <Link to='/' className=' color hover-underline-animation' style={{height:'1.6rem'}}>Home</Link>
                        </li>
                        <li className=' zoom  '><Link to='/about' className=' color hover-underline-animation' style={{height:'1.6rem'}}>About us</Link></li>
                      
                        <li className=' zoom  '><Link to='/gallary' className=' color hover-underline-animation' style={{height:'1.6rem'}} >Gallery Photo </Link></li>
                        <li className=' zoom'><Link to='/contactus' className='color hover-underline-animation'  style={{height:'1.6rem'}}>Contact us </Link></li>
                        <li className=' zoom'><Link to='/blog' className=' color hover-underline-animation' style={{height:'1.6rem'}} >Blog</Link></li>


                        {/* <div className="dropdown ">
                            <button className="dropbtn zoom color " style={{fontSize:"20px"}}>Dropdown</button>
                            <div class="dropdown-content">
                                <Link to="/">Link 1</Link>
                                <Link to="/">Link 2</Link>
                                <Link to="/">Link 3</Link>
                            </div>
                        </div> */}

                        <AiOutlineClose className='display text-white' onClick={() => setShowMediaIcons(false)} />

                    </ul>


                </div>

                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li >
                            <a href='/' >
                                {/* <FaInstagramSquare ></FaInstagramSquare> */}
                                <i className="fa fa-instagram zoom color" style={{ fontSize: "30px", color: "white" }}></i>
                            </a>
                        </li>
                        <li >
                            <a href='/'>
                                <i className="fa fa-facebook-official zoom color" style={{ fontSize: "30px" , color: "white"}}></i>
                                {/* <FaFacebookSquare></FaFacebookSquare> */}
                            </a>
                        </li>
                        <li >
                            <a href='/'>
                                {/* <FaYoutubeSquare></FaYoutubeSquare> */}
                                <i className="fa fa-twitter zoom color" style={{ fontSize: "30px", color: "white" }}></i>
                            </a>
                        </li>
                    </ul>
                    <div className='hamburger-menu'>
                        <Link to='/' onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu className='text-white' />
                        </Link>
                    </div>


                </div>


            </nav>

        </>
    )
}

export default Navbars