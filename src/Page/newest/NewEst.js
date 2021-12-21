import './NewEst.css'
import Introduce from '../Introduce/Introduce'
import React from 'react'
import Help from '../Help/Help'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


export default function NewEst() {
    return (
        <div className='nes'>
            {/*<Introduce/>*/}
            {/*<Help/>*/}
            <Routes>
                <Route path='help' element={<Help/>}/>
                <Route path='introduce' element={<Introduce/>}/>
            </Routes>
            <div className='ne'>
                <div>
                    <h1>Tin mới nhất</h1>
                </div>
                <div>
                    <img src='https://i1-vnexpress.vnecdn.net/2021/12/09/Anh-chup-Man-hinh-2021-12-09-l-1122-4152-1639018012.png?w=680&h=0&q=100&dpr=1&fit=crop&s=mLvtawk0LGDDYHOp25MysA'></img>
                    <a href='https://vnexpress.net/dua-du-lieu-dieu-tra-dan-so-len-mang-4400596.html'>Đưa dữ liệu điều tra dân số lên mạng</a>
                </div>
                <div>
                    <img src='http://tongdieutradanso.vn/uploads/data/6/files/files/1_-Naomi-profile-228x300.jpg'></img>
                    <a href='http://tongdieutradanso.vn/vai-tro-cua-tong-dieu-tra-dan-so-va-nha-o-doi-voi-su-phat-trien-cua-moi-quoc-gia.html'>VAI TRÒ CỦA TỔNG ĐIỀU TRA DÂN SỐ VÀ NHÀ Ở ĐỐI VỚI SỰ PHÁT TRIỂN CỦA MỖI QUỐC GIA</a>
                </div>
            </div>
        </div>
    )
}



