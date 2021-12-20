import '../ListData/ListData.css'
import JsonData from './Data/Data.json'

export default function ListData() {
    const DisplayData=JsonData.map(
        (info)=>{
            return(
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
                    <td>{info.Select}</td>
                </tr>
            )
        }
    )
    return (
        <div className="containerListData">
            <div className="HeaderListData">
                <div>
                    <p>Danh sách dân số</p>
                </div>
                <div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Tỉnh/Thành phố</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Quận/Huyện/Thị Xã</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Phường/Xã/Thị Trấn</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <button>Ghi nhận</button>
                </div>
            </div>
            <div className='BodyListData'>
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
                <td>Tùy chọn</td>
            </tr>
        </thead>
        <tbody>
            {DisplayData}
        </tbody>
    </table>
            </div>
        </div>
    )
}
