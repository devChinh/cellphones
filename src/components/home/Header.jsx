import React, { useEffect, useState } from 'react'
import { IoIosListBox } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GrPhone } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

import "../../styles/home/header.css"

function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

    }, [])

    return (
        <div className="header-bgcolor">
            <div className='header-container'>
                <div className='header-logo'>
                    <img src="https://res.cloudinary.com/dduabjddc/image/upload/v1731424726/cjjcksesgr8obeuayyen.jpg" alt="logo" />
                </div>
                <div className='header-listBox'>
                    <IoIosListBox />
                    <p>Danh mục</p>
                </div>
                <div className='header-locationPrice'>
                    <FaLocationDot />
                    <div>
                        <div>
                            <p>Xem giá tại</p>
                            <IoIosArrowDown />
                        </div>
                        <p>Hồ Chí Minh</p>
                    </div>
                </div>
                <div className='header-search'>
                    <FaSearch />
                    <input type="text" placeholder='Bạn cần tìm gì?' />
                </div>
                <div className='header-phone'>
                    <GrPhone />
                    <div>
                        {
                            windowWidth > 1100 ? <p>Gọi mua hàng <br /> 1800.2097</p> : <p>Gọi mua <br /> hàng 1800.2097</p>
                        }
                    </div>
                </div>
                <div className='header-locationDot'>
                    <FaLocationDot />
                    {
                        windowWidth > 1100 ? <h2>Cửa hàng  <br />  gần bạn</h2> : <h2>Cửa <br /> hàng gần bạn</h2>
                    }
                </div>
                <div className='header-truckDelivery'>
                    <TbTruckDelivery />
                    <h2>Tra cứu <br />  đơn hàng</h2>
                </div>
                <div className='header-shoppingBag'>
                    <FaShoppingBag />
                    <h2>Giỏ <br />  hàng</h2>
                </div>
                <div className='header-userLogin'>
                    <FaRegUserCircle />
                    <h2>Đăng nhập</h2>
                </div>
            </div>
        </div>
    )
}

export default Header