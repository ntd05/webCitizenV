import '../InputData/InputData.css'
import DeclareForm from './Body/DeclareForm'

export default function InputData() {
    return (
        <div className='containerInData'>
            <div className='MainInData'>
                <div>
                    <p>Khai báo thông tin</p>
                </div>
                <div className='HeaderInData'>
                    <button className='inData'>
                        Nhập dữ liệu
                    </button>
                    <button className='printDeclaration'>
                        Mẫu phiếu điều tra
                    </button>
                </div>
                <div className='BodyInData'>
                    <DeclareForm/>
                </div>
            </div>
        </div>
    )
}
