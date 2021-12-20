import React from 'react'
import Logo from "../image/logo.png"
import '../topBar/topbar.css'
import { useState } from "react"
import {Link} from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'

export default function TopBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className = "header">
                <div className = "top">
                    <img id="logo" src={Logo}/>
                    <div>
                        <p id='nameWeb'>CitizenV</p>
                        <p id='desWeb'>HỆ THỐNG ĐIỀU TRA DÂN SỐ</p>
                    </div>
                    <div className="login">
                        <button id = 'log' onClick={() => setIsOpen(true)}>Đăng nhập</button>
                        <button id = 'sign'onClick={() => setIsOpen(false)}>Đăng kí</button>
                    </div>
                </div>
                <div className = "menu">
                    <ul className = "menuList">
                        <li className="menuListItem">
                            <Link to="/Home" style={{color:"white"}}>Trang chủ</Link>
                        </li>
                        <li className="menuListItem"> 
                            <Link to="/introduce" style={{color:"white"}}>Giới thiệu</Link>
                        </li>
                        <li className="menuListItem">
                            <Link to="/contact" style={{color:"white"}}>Liên hệ</Link>
                        </li>
                        <li className="menuListItem">
                        <Link to="/help" style={{color:"white"}}>Hướng dẫn</Link>
                        </li>
                    </ul>
                    <div className="search">
                        <input id='searchForm' type="text" placeholder ="Tìm kiếm..."/>
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
