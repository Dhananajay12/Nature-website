
import React, { useState, useEffect } from 'react'
import image1 from './Image/1.jpg'
import image2 from './Image/water.jpg'
import image3 from './Image/2.jpg'
import image4 from './Image/3.jpg'
import image5 from './Image/4.jpg'
import image6 from './Image/5.jpg'

import image7 from './Image/6.jpg'
import image8 from './Image/7.jpg'
import image9 from './Image/8.jpg'
import image10 from './Image/9.jpg'
import image11 from './Image/10.jpg'
import image12 from './Image/11.jpg'
import image13 from './Image/12.jpg'
import image14 from './Image/13.jpg'
import image15 from './Image/14.jpg'
import image16 from './Image/15.jpg'

import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Gallary = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let data = [

        {
            id: 1,
            imgSrc: image3,
        },
        {
            id: 2,
            imgSrc: image6,

        },

        {
            id: 3,
            imgSrc: image12,
        },

        {
            id: 4,
            imgSrc: image4,
        },

        {
            id: 5,
            imgSrc: image5,
        },


        {
            id: 6,
            imgSrc: image3,
        },

        {
            id: 7,
            imgSrc: image7,
        },

        {
            id: 8,
            imgSrc: image5,
        },
        {
            id: 9,
            imgSrc: image10,
        },

        {
            id: 10,
            imgSrc: image11,
        },

        {
            id: 11,
            imgSrc: image12,
        },

        {
            id: 12,
            imgSrc: image13,
        },
        {
            id: 13,
            imgSrc: image14,
        },
        {
            id: 14,
            imgSrc: image15,
        },
        {
            id: 15,
            imgSrc: image16,
        },
        {
            id: 16,
            imgSrc: image15,
        },
        {
            id: 17,
            imgSrc: image11,
        },
        {
            id: 18,
            imgSrc: image3,
        },

        {
            id: 19,
            imgSrc: image7,
        },

        {
            id: 20,
            imgSrc: image5,
        },
        {
            id: 21,
            imgSrc: image10,
        },

        {
            id: 22,
            imgSrc: image11,
        },

        {
            id: 23,
            imgSrc: image12,
        },
        {
            id: 24,
            imgSrc: image3,
        },





    ];

    console.log(data);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }



    return (
        <>

            <div>

                {/* <img src={image2} alt="error" style={{width:"100%" , height:'20rem' ,marginTop:"-5rem"}}></img> */}

                <div className="margintop " style={{ width: "100%", height: '5rem', background: "black" }}></div>

            </div>


            <div className={model ? 'model open ' : "model "}>
                <img src={tempimgSrc} className="img-fluid "  style={{height:"100%"}}/>


                <AiOutlineClose onClick={() => setModel(false)} />
            </div>
            <br />
            <br />
            <br />
           <div className='container mb-5'>
                 <div className='row'>
                 <h1 className='text-danger'>ALASHKA LANDSCAPE PHOTOGRAPHY</h1>
                 <h5>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                 </h5>
                 <h4 className='text-danger'>Click on Image to see animation</h4>
                 </div>

           </div>



            <div className='container-fluid'>

                <div className='row'>

                    {data.map((item, index) => {
                        return (
                            <div className='col-md-3 mt-2' key={index} onClick={() => getImg(item.imgSrc)} >
                                <img src={item.imgSrc} style={{ cursor: "pointer",height:"100%" }} className="img-fluid rounded" />
                            </div>

                        )
                    })}

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

export default Gallary