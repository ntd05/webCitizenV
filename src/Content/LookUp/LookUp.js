import '../LookUp/LookUp.css'
import JsonData from '../ListData/Data/Data.json'
import { useState } from 'react';

export default function LookUp() {

    const [state, setState] = useState("");
    const [isOpen, setOpen] = useState(false);

    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.STT}</td>
                    <td>{info.CMND}</td>
                    <td>{info.name}</td>
                    <td>{info.DofB}</td>
                    <td>{info.Sex}</td>
                    <td>{info.Address}</td>
                    <td>{info.religion}</td>
                    <td>{info.EduLevel}</td>
                    <td>{info.Job}</td>
                </tr>
            )
        }
    )

    return (
        <div className="containerLookUp">
            <div className="HeaderLookUp">
                <div>
                    <input type="text" placeholder='Nhập CMND' onChange={e => setState(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => setOpen(true)}>Ghi nhận</button>
                </div>
            </div>
            <div className='BodyLookUp'>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>CCCD/CMND</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Địa chỉ</th>
                            <th>Tôn giáo</th>
                            <th>Trình độ văn hóa</th>
                            <th>Nghề nghiệp</th>
                            <th>dddd</th>
                        </tr>
                    </thead>
                    <tbody>
                    {isOpen && (JsonData.filter((val) => {
                        if (state == "") {
                            return val
                        }
                        else if (val.CMND.includes(state)) {
                            return val;
                        }
                    }).map((val, key) => {
                        console.log(val.name);
                        <tr>
                            <td>{val.STT}</td>
                            <td>{val.CMND}</td>
                            <td>{val.name}</td>
                            <td>{val.DofB}</td>
                            <td>{val.Sex}</td>
                            <td>{val.Address}</td>
                            <td>{val.religion}</td>
                            <td>{val.EduLevel}</td>
                            <td>{val.Job}</td>
                            <td>{val.Select}</td>
                        </tr>
                    }))}
                    </tbody>
                </table>
            </div >
        </div >
    )
}
