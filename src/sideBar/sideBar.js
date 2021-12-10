import '../sideBar/sideBar.css'

export default function sideBar() {
    return (
        <div className="BodyMenu">
            <div className="News">
                <i class="far fa-newspaper"></i>
                <p>Tin tức</p>
            </div>
            <div className="AreaMana">
                <i class="fas fa-tasks"></i>
                <p>Quản lý khu vực</p>
            </div>
            <div className="AccessMan">
                <i class="far fa-user-circle"></i>
                <p>Quản lý truy cập</p>
            </div>
            <div className="Progress">
                <i class="far fa-clock"></i>
                <p>Kiểm tra tiến độ</p>
            </div>
            <div className="Analysis">
                <i class="fas fa-chart-line"></i>
                <p>Phân tích dữ liệu</p>
            </div>
            <div className="List">
                <i class="fas fa-database"></i>
                <p>Danh sách</p>
            </div>
            <div className="InputData">
                <i class="far fa-edit"></i>
                <p>Nhập liệu</p>
                </div>
            </div>
    )
}
