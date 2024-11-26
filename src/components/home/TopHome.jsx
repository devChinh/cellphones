import React from 'react';
import "../../styles/home/topHome.css"

import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function TopHome() {

    return (
        <div className="topHome-container">
            <div className='topHome-menuMain'>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        l  <h2>Điện thoại, tabet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='topHome-menuMain-item'>
                    <div>
                        <IoPhonePortraitOutline />
                        <h2>Điện thoại, tablet</h2>
                    </div>
                    <MdKeyboardArrowRight />
                </div>

            </div>
            <div className='topHome-sliding'>
                <div className="topHome-sliding-image" >
                    <Slider {...settings}>
                        <div>
                            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-s24-ultra-home-20-11.png" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/sliding-home-iphone-16-pro-km-moi.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-s24-ultra-home-20-11.png" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-s24-ultra-home-20-11.png" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-s24-ultra-home-20-11.png" alt="" />
                        </div>
                    </Slider>

                </div>
                <div className="topHome-sliding-tab">
                    <div>
                        MỪNG KHAI TRƯƠNG
                        <br />
                        Ưu đãi cực khủng
                    </div>
                    <div>
                        IPHONE 16 SERIES
                        <br />
                        Mua ngay
                    </div>
                    <div>
                        GALAXY S24 ULTRA
                        <br />
                        Giá tốt chốt ngay
                    </div>
                    <div>
                        IPAD MINI 7
                        <br />
                        Mua ngay
                    </div>
                    <div>
                        TECNO CAMON 30S
                        <br />
                        Giá tốt chốt ngay
                    </div>
                </div>
            </div>
            <div className='topHome-rightBanner'>
                <a href="">
                    <img src="https://res.cloudinary.com/dduabjddc/image/upload/v1732113473/l2pqyomfbgnm4vhhkxxa.webp" alt="" />
                </a>
                <a href="">
                    <img src="https://res.cloudinary.com/dduabjddc/image/upload/v1732113473/s5trhe6cdlauiapgr495.webp" alt="" />
                </a>
                <a href="">
                    <img src="https://res.cloudinary.com/dduabjddc/image/upload/v1732113479/r99zfpgzuzabmgopbszh.webp" alt="" /></a>
            </div>
        </div>
    )
}

export default TopHome