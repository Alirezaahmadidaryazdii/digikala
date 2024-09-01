import { useEffect, useState } from "react";
import img from "../image/logoLogin.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../style.css";
import { useContext } from "react";
import { UserContex } from "../Context/userContext";
import LinearProgress from "@mui/material/LinearProgress";

const Login = () => {
  const [login, setLogin] = useState("logIn");
  const { user, setUser, checkDataLogin, addDataLogin } = useContext(UserContex);
  const [loading, setLoading] = useState(true); // برای کنترل لودینگ

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("لطفا ایمیل خود را بنویسید")
      .email("ایمیل نادرست است"),
    password: yup
      .string()
      .required("رمز عبور الزامی است"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    login === "logIn" ? checkDataLogin(data) : addDataLogin(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // تنظیم زمان لودینگ

    return () => clearTimeout(timer); // پاکسازی تایمر هنگام خروج از کامپوننت
  }, []);

  if (loading) {
    return (
      // <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <LinearProgress sx={{ width: "100%" }} color="error" />
    )
  }

  return (
    <>
      <div className="container border rounded login-component p-4" dir="rtl">
        <div className="d-flex justify-content-center">
          <img src={img} alt="" className="mb-2" />
        </div>
        <h5 className="d-flex">
          <button onClick={() => setLogin("logIn")} className="text-decoration-none btn px-2 py-0">ورود</button>
          |
          <button onClick={() => setLogin("signIn")} className="text-decoration-none btn px-2 py-0">ثبت نام</button>
        </h5>
        <p className="text-muted">سلام!</p>

        <form onSubmit={handleSubmit(onFormSubmit)}>
          <p className="text-muted m-0 p-0">لطفا ایمیل خودتان را وارد کنید</p>
          <input
            type="text"
            className="m-2 p-2 border border-danger rounded-3 input-login"
            {...register("email")}
          />
          <p className="text-danger">{errors.email?.message}</p>
          <>
            <p className="text-muted m-0 p-0">لطفا رمز خودتان را وارد کنید</p>
            <input
              type="password"
              className="m-2 p-2 border border-danger rounded-3 input-login"
              {...register("password")}
            />
            <p className="text-danger">{errors.password?.message}</p>
          </>
          <button type="submit" className="btn btn-danger w-100 text-white m-auto mb-2">
            {login === 'signIn' ? 'ثبت نام' : 'ورود'}
          </button>
        </form>
        <p className="text-muted">ورود شما به معنای پذیرش شرایط دیجیکلا و شرایط خصوصی است</p>
      </div>
    </>
  );
};

export default Login;
