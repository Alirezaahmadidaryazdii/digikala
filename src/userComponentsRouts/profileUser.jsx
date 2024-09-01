// import { useContext, useState } from "react";
// import { UserContex } from "../Context/userContext";
// import "./userComponent.css";
// import person from "../image/personal.gif";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// function ProfileUser() {
//   const { user } = useContext(UserContex);

//   const [login, setLogin] = useState("edit");
//   const schema = yup.object().shape({
//     email: yup
//       .string()
//       .required("لطفا ایمیل خود را بنویسید")
//       .email("ایمیل نادرست است"),
//     password: yup.string().required("رمز عبور الزامی است"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   // /////////////////////////////////////////////////////////////////

//   const loginData = async (email, password) => {
//     const url = "https://api.escuelajs.co/api/v1/auth/login/";

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("Access Token:", data.access_token);
//       return data.access_token; // توکن دسترسی را برمی‌گرداند
//     } else {
//       const errorData = await response.json();
//       console.error("Error:", errorData);
//     }
//   };

//   // /////////////////////////////////////////////////////////////////

//   const onFormSubmit = async (data) => {
//     console.log(user.email, user.password, user.id);
//     const token = await loginData(user.email, user.password);

//    await fetch(`https://api.escuelajs.co/api/v1/users/${user.id}`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`, // اضافه کردن توکن در هدر
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((res) => console.log("succesfully edit account", res))
//       .catch((err) => {
//         console.log(err);
//       });

//     // else {
//     //   fetch("https://api.escuelajs.co/api/v1/users")
//     //     .then((res) => res.json())
//     //     .then((res) => {
//     //       let foundUser = res.find(
//     //         (item) =>
//     //           item.email === data.email && item.password === data.password
//     //       );
//     //       return foundUser;
//     //     })
//     //     .then((idUser) => {
//     //       fetch(`https://api.escuelajs.co/api/v1/users/${idUser.id}`, {
//     //         method: "DELETE",
//     //       })
//     //         .then((res) => res.json())
//     //         .then((res) => console.log("succesfully delete account", res))
//     //         .catch((err) => {
//     //           console.log(err);
//     //         });
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });
//     // }
//   };
//   return (
//     <>
//       <div className="head d-flex">
//         <p className="txt-show">پروفایل من</p>
//         <img src={person} alt="" width={80} />
//       </div>
//       <div className="profileUser m-auto text-center">
//         <img src={user.avatar} alt="" id="user-avatar" />
//         <h3>{user.name}</h3>
//         <div className="d-flex flex-column justify-content-center align-items-center">
//           <div className="email d-flex">
//             <p className="text-muted">{user.email}</p>
//             <p className="text-dark mx-1" id="label-profileUser">
//               :email
//             </p>
//             <FontAwesomeIcon
//               icon={faEnvelope}
//               size="lg"
//               className="text-danger mx-2"
//             />
//           </div>
//           <div className="password d-flex">
//             <p className="text-muted">{user.password}</p>
//             <p className="text-dark mx-1" id="label-profileUser">
//               :password
//             </p>
//             <FontAwesomeIcon
//               icon={faLock}
//               size="lg"
//               className="text-danger mx-2"
//             />
//           </div>
//           <div className="role d-flex">
//             <p className="text-muted">{user.role}</p>
//             <p className="text-dark mx-1" id="label-profileUser">
//               :role
//             </p>
//             <FontAwesomeIcon
//               icon={faGlobe}
//               size="lg"
//               className="text-danger mx-2"
//             />
//           </div>
//         </div>
//       </div>
//       <h5 className="d-flex justify-content-center mt-5">
//         <button
//           onClick={() => setLogin("edit")}
//           className="text-decoration-none btn px-2 py-0"
//         >
//           ویرایش
//         </button>
//       </h5>
//       <form
//         onSubmit={handleSubmit(onFormSubmit)}
//         className="d-flex flex-column justify-content-center align-items-center"
//       >
//         <p className="text-muted m-0 p-0">لطفا ایمیل خودتان را وارد کنید</p>
//         <input
//           type="text"
//           className="m-2 p-2 border border-danger rounded-3 input-login"
//           {...register("email")}
//         />
//         <p className="text-danger">{errors.email?.message}</p>
//         <>
//           <p className="text-muted m-0 p-0">لطفا رمز خودتان را وارد کنید</p>
//           <input
//             type="password"
//             className="m-2 p-2 border border-danger rounded-3 input-login"
//             {...register("password")}
//           />
//           <p className="text-danger">{errors.password?.message}</p>
//         </>
//         <button
//           type="submit"
//           className="btn btn-danger text-white m-auto mb-2"
//           style={{ width: "50%" }}
//         >
//           ویرایش
//         </button>
//       </form>
//     </>
//   );
// }
// export default ProfileUser;

import { useContext, useEffect, useState } from "react";
import { UserContex } from "../Context/userContext";
import "./userComponent.css";
import person from "../image/personal.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import from material ui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
// import react hot toast
import toast from "react-hot-toast";

const CustomIconButton = styled(IconButton)({
  color: "red", // رنگ آیکون را قرمز می‌کند
  fontSize: "30px", // سایز آیکون را بزرگتر می‌کند
});

function ProfileUser() {
  const { user, setUser } = useContext(UserContex); // استفاده از setUser برای به‌روزرسانی کانتکست
  const [dataUser, setDataUser] = useState([]);
  const [login, setLogin] = useState("edit");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/users");
        const data = await res.json();
        setDataUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dataUser]);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("لطفا ایمیل خود را بنویسید")
      .email("ایمیل نادرست است"),
    password: yup.string().required("رمز عبور الزامی است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const loginData = async (email, password) => {
    const url = "https://api.escuelajs.co/api/v1/auth/login/";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Access Token:", data.access_token);
      return data.access_token;
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
    }
  };

  const onFormSubmit = async (data) => {
    try {
      const token = await loginData(user.email, user.password);
      const updatedUser = { ...user, ...data }; // ترکیب داده‌های کاربر قبلی با داده‌های جدید
  
      const updatePromise = async () => {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/users/${user.id}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`, // اضافه کردن توکن در هدر
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser), // ارسال داده‌های به‌روز شده
          }
        );
  
        if (!response.ok) {
          throw new Error(response.statusText || "Failed to update user");
        }
  
        const res = await response.json();
        setUser(res); // به‌روزرسانی کانتکست با داده‌های جدید
        localStorage.setItem("user", JSON.stringify(res));
        return res;
      };
  
      toast.promise(updatePromise(), {
        loading: "Updating user...",
        success: "Account successfully updated!",
        error: "Failed to update account",
      });
    } catch (err) {
      console.log("Error during form submission:", err);
    }
  };
  

  const handleDeleteUser = async (user) => {
    const deletePromise = async () => {
      const token = await loginData(user.email, user.password); // دریافت توکن
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/users/${user.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // اضافه کردن توکن در هدر
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(response.statusText || "Failed to delete user");
      }
  
      return response.json();
    };
  
    toast.promise(deletePromise(), {
      loading: "Deleting user...",
      success: `User with ID ${user.id} was successfully deleted.`,
      error: "Failed to delete user",
    });
  };

  useEffect(()=>{
    let dataUser = JSON.parse(localStorage.getItem("user"));
    if (dataUser !== null) setUser(dataUser);
  },[])
  return (
    <>
      <div className="head d-flex">
        <p className="txt-show">پروفایل من</p>
        <img src={person} alt="" width={80} />
      </div>
      <div className="profileUser m-auto text-center">
        <img src={user?.avatar} alt="" id="user-avatar" />
        <h3>{user?.name}</h3>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="email d-flex">
            <p className="text-muted">{user?.email}</p>
            <p className="text-dark mx-1" id="label-profileUser">
              :email
            </p>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="text-danger mx-2"
            />
          </div>
          <div className="password d-flex">
            <p className="text-muted">{user?.password}</p>
            <p className="text-dark mx-1" id="label-profileUser">
              :password
            </p>
            <FontAwesomeIcon
              icon={faLock}
              size="lg"
              className="text-danger mx-2"
            />
          </div>
          <div className="role d-flex">
            <p className="text-muted">{user?.role}</p>
            <p className="text-dark mx-1" id="label-profileUser">
              :role
            </p>
            <FontAwesomeIcon
              icon={faGlobe}
              size="lg"
              className="text-danger mx-2"
            />
          </div>
        </div>
      </div>
      <h5 className="d-flex justify-content-center mt-5">
        <button
          onClick={() => setLogin("edit")}
          className="text-decoration-none btn px-2 py-0"
        >
          ویرایش
        </button>
      </h5>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="d-flex flex-column justify-content-center align-items-center"
      >
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
        <button
          type="submit"
          className="btn btn-danger text-white m-auto mb-2"
          style={{ width: "50%" }}
        >
          ویرایش
        </button>
      </form>

      {/* matrial ui */}
      {user?.role === "admin" && (
        <>
          <div className="head d-flex mt-5">
            <p className="txt-show">پروفایل کاربران</p>
            <img src={person} alt="" width={80} />
          </div>
          <List
            sx={{
              width: "100%",
              maxWidth: 500,
              bgcolor: "background.paper",
              maxHeight: 300,
              overflowY: "auto",
            }}
            className="mx-auto my-5 p-2"
          >
            {dataUser?.map((item, index) => (
              <ListItem alignItems="flex-start" key={index}>
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.email}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.name}
                      </Typography>
                      {` - password: ${item.password}`}
                    </>
                  }
                />
                <CustomIconButton
                  edge="end"
                  aria-label="delete"
                  className="mx-3"
                  onClick={() => handleDeleteUser(item)}
                >
                  <DeleteIcon style={{ fontSize: "inherit" }} />
                </CustomIconButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
}

export default ProfileUser;
