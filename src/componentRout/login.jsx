import img from '../image/logoLogin.svg';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../style.css';

const Login = () => {
    const schema = yup.object().shape({
        email: yup.string().required("لطفا ایمیل خود را بنویسید").email("ایمیل نادرست است"),
    });

    const { register, handleSubmit, formState:{errors} } = useForm({ resolver: yupResolver(schema) });

    const onFormSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="container border rounded login-component p-4" dir='rtl'>
                <div className='d-flex justify-content-center'>
                    <img src={img} alt="" className='mb-2' />
                </div>
                <h5>ورود | ثبت نام</h5>
                <p className='text-muted'>سلام!</p>
                <p className='text-muted'>لطفا ایمیل خودتان را وارد کنید</p>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <input type="text" className='m-2 p-2 border border-danger rounded-3 input-login' {...register("email")} />
                    <p className='text-danger'>{errors.email?.message}</p>
                    <button type='submit' className='btn btn-danger w-100 text-white m-auto  mb-2'>ورود</button>
                </form>
                <p className='text-muted'>ورود شما به معنای پذیرش شرایط دیجیکلا و شرایط خصوصی است</p>
            </div>
        </>
    );
};

export default Login;
