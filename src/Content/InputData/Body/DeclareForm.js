import '../Body/DeclareForm.css';
import { useFormik } from "formik";
import * as Yup from "yup";

function DeclareForm() {
    const validationSchema = Yup.object().shape({
        FullName: Yup.string().required('Vui lòng điền họ tên!').matches(),
        DofB: Yup.string().required('Vui lòng điền ngày sinh!').matches(),
        CMND: Yup.string().required('Vui lòng điền CCCD/CMND!').matches(),
        Ethnic: Yup.string().required('Vui lòng điền dân tộc!').matches(),
        Region: Yup.string().required('Vui lòng điền tôn giáo!').matches(),
        Email: Yup.string().required('Vui lòng điền email!').matches().email('Email không hợp lệ!'),
        PhoneNum: Yup.string().min(10, 'Số điện thoại không hợp lệ!').max(10, 'Số điện thoại không hợp lệ!').required('Vui lòng điền số điện thoại!'),
        EduLevel: Yup.string().required('Vui lòng điền trình độ văn hóa!').matches(),
        Job: Yup.string().required('Vui lòng điền nghề nghiệp').matches(),
    });

    const formik = useFormik({
        initialValues: {
            FullName: "",
            DofB: "",
            CMND: "",
            Ethnic: "",
            Region: "",
            Email: "",
            PhoneNum: "",
            EduLevel: "",
            Job: "",
        },
        validationSchema,
    });
    return (
        <div>
        <form className='formDeclareForm' onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="emailField">Họ tên:</label>
                <div>
                    <input value={formik.values.FullName}
                        onChange={formik.handleChange}
                        name="FullName"
                    />
                    {formik.errors.FullName && formik.touched.FullName && (
                        <div className="warn">{formik.errors.FullName}</div>
                    )}
                </div>
                <label htmlFor="emailField">Ngày sinh:</label>
                <div>
                    <input value={formik.values.DofB}
                        onChange={formik.handleChange}
                        name="DofB"
                    />
                    {formik.errors.DofB && formik.touched.DofB && (
                        <div className="warn">{formik.errors.DofB}</div>
                    )}
                </div>
            </div>  
            <div>
                <label>Giới tính:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Giới tính</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>      
                <label htmlFor="emailField">Số CCCD/CMND:</label>
                <div>
                    <input value={formik.values.CMND}
                        onChange={formik.handleChange}
                        name="CMND"
                    />
                    {formik.errors.CMND && formik.touched.CMND && (
                        <div className="warn">{formik.errors.CMND}</div>
                    )}
                </div>
            </div>
            <div>
                <label htmlFor="emailField">Dân tộc:</label>
                <div>
                    <input value={formik.values.Ethnic}
                        onChange={formik.handleChange}
                        name="Ethnic"
                    />
                    {formik.errors.Ethnic && formik.touched.Ethnic && (
                        <div className="warn">{formik.errors.Ethnic}</div>
                    )}
                </div>
                <label htmlFor="emailField">Tôn giáo:</label>
                <div>
                    <input value={formik.values.Region}
                        onChange={formik.handleChange}
                        name="Region"
                    />
                    {formik.errors.Region && formik.touched.Region && (
                        <div className="warn">{formik.errors.Region}</div>
                    )}
                </div>
            </div>  
            <div>
                <label>Quê quán:</label>
                <select class="form-select" aria-label="Default select example">
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
                <label>Địa chỉ thường trú:</label>
                <select class="form-select" aria-label="Default select example">
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
                <label>Địa chỉ tạm trú:</label>
                <select class="form-select" aria-label="Default select example">
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
                <label htmlFor="emailField">Email:</label>
                <div>
                    <input value={formik.values.Email}
                        onChange={formik.handleChange}
                        name="Email"
                    />
                    {formik.errors.Email && formik.touched.Email && (
                        <div className="warn">{formik.errors.Email}</div>
                    )}
                </div>
                <label htmlFor="emailField">Điện thoại:</label>
                <div>
                    <input value={formik.values.PhoneNum}
                        onChange={formik.handleChange}
                        name="PhoneNum"
                    />
                    {formik.errors.PhoneNum && formik.touched.PhoneNum && (
                        <div className="warn">{formik.errors.PhoneNum}</div>
                    )}
                </div>
            </div>  
            <div>
                <label htmlFor="emailField">Trình độ văn hóa:</label>
                <div>
                    <input value={formik.values.EduLevel}
                        onChange={formik.handleChange}
                        name="EduLevel"
                    />
                    {formik.errors.EduLevel && formik.touched.EduLevel && (
                        <div className="warn">{formik.errors.EduLevel}</div>
                    )}
                </div>
                <label htmlFor="emailField">Nghề nghiệp:</label>
                <div>
                    <input value={formik.values.Job}
                        onChange={formik.handleChange}
                        name="Job"
                    />
                    {formik.errors.Job && formik.touched.Job && (
                        <div className="warn">{formik.errors.Job}</div>
                    )}
                </div>
            </div>   
            <div className='Send'>
                <button type="submit" onClick={formik.handleSubmit}>Ghi nhận</button>
            </div>
        </form>
        </div>
    );
}

export default DeclareForm;