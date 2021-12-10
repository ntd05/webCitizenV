import React from 'react'
import Logo from "../image/logo.png"
import '../topBar/topbar.css'

export default function TopBar() {
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
                        <button id = 'log'>Đăng nhập</button>
                        <button id = 'sign'>Đăng kí</button>
                    </div>
                </div>
                <div className = "menu">
                    <ul className = "menuList">
                        <li className="menuListItem">Trang chủ</li>
                        <li className="menuListItem">Giới thiệu</li>
                        <li className="menuListItem">Liên hệ</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
