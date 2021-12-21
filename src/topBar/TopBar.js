import React from 'react'
import Logo from "../image/logo.png"
import '../topBar/topbar.css'
import Menu from './Menu'

export default function TopBar() {
    return (
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
    )
}
