import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./userComponent.css";
import { UserContex } from "../Context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faDatabase,
  faSearch,
  faComment,
  faBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

// import mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Sidebar = () => {
  const [searchParams] = useSearchParams();
  const part = searchParams.get("part");

  // state mui
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user, setUser } = useContext(UserContex);

  const [dataLi, setDataLi] = useState([
    { id: 1, title: "داشبورد", icon: faHome, current: false },
    { id: 2, title: "پروفایل", icon: faUser, current: false },
    { id: 3, title: "تاریخچه", icon: faDatabase, current: false },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(()=>{
    let dataUser = JSON.parse(localStorage.getItem("user"));
    if (dataUser !== null) setUser(dataUser);
  },[])

  const navigateSetParamsUrl = (id) => {
    let newDataLi = dataLi.map((item) => {
      item.current = item.id === id;
      return item;
    });
    setDataLi(newDataLi);

    if (id === 1) {
      navigate("/user?part=product");
    } else if (id === 2) {
      navigate("/user?part=profile");
    } else if (id === 3) {
      navigate("/user?part=storage");
    }
  };

  useEffect(() => {
    if (part === "product") {
      setDataLi((prevData) =>
        prevData.map((item) => ({
          ...item,
          current: item.id === 1,
        }))
      );
    } else if (part === "profile") {
      setDataLi((prevData) =>
        prevData.map((item) => ({
          ...item,
          current: item.id === 2,
        }))
      );
    } else if (part === "storage") {
      setDataLi((prevData) =>
        prevData.map((item) => ({
          ...item,
          current: item.id === 3,
        }))
      );
    }
  }, [part]);

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
  }

  const handleLogOut = async () => {
    try {
      const token = await loginData(user.email, user.password);
  
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/users/${user.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(response.statusText || "Failed to delete user");
      }
  
      const result = await response.json();
      console.log(result);
  
    } catch (error) {
      console.error("Error during API calls:", error.message);
    } finally {
      // این بخش در هر صورت اجرا خواهد شد، چه try موفق باشد چه catch
      console.log('hello')
      localStorage.removeItem("user");
      localStorage.removeItem("recentProduct");
      setUser(null);
  
      navigate("/");
    }
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler mb-2 bg-light d-block d-lg-none"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-collapse collapse ${isMenuOpen ? "show" : ""}`}>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top"
              dir="rtl"
            >
              <Link
                to="/"
                className="navbar-brand text-white text-center d-block mx-auto py-3 mb-4 bottom-border"
              >
                دیچیکالا
              </Link>
              <div className="bottom-border pb-3">
                <img
                  src={
                    user?.avatar
                      ? user?.avatar
                      : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  }
                  className="rounded-circle ml-3"
                  style={{ width: "50px" }}
                  alt="Profile"
                />
                <Link to="/" className="text-white">
                  {user ? user?.name : "نام کاربر"}
                </Link>
              </div>
              <ul className="nav-bar list-unstyled flex-column mt-4">
                {dataLi.map((item) =>
                  user?.role === "admin" ? (
                    <li
                      key={item.id}
                      className={`nav-item sidebar-link nav-link text-white p-3 mb-2 ${
                        item.current ? "current" : ""
                      }`}
                      onClick={() => navigateSetParamsUrl(item.id)}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        size="lg"
                        className="mx-2"
                      />
                      {item.title}
                    </li>
                  ) : item.id !== 1 ? (
                    <li
                      key={item.id}
                      className={`nav-item sidebar-link nav-link text-white p-3 mb-2 ${
                        item.current ? "current" : ""
                      }`}
                      onClick={() => navigateSetParamsUrl(item.id)}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        size="lg"
                        className="mx-2"
                      />
                      {item.title}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-8 bg-dark fixed-top py-2 mr-auto top-navbar d-none d-lg-block">
              <div className="row">
                <div className="col-md-4">
                  <h4 className="text-light">داشبورد</h4>
                </div>
                <div className="col-md-5">
                  <form className="my-4 my-md-0" action="">
                    <div className="input-group">
                      <button className="btn btn-white search-bottom">
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-danger"
                        />
                      </button>
                      <input
                        type="text"
                        placeholder="جستجو"
                        className="search-input form-control"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-3">
                  <ul className="navbar-nav flex-row justify-content-between">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <FontAwesomeIcon
                          icon={faComment}
                          className="text-white"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="text-warning"
                        />
                      </a>
                    </li>
                    <li className="nav-item mr-md-auto m-auto">
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="text-danger"
                        onClick={handleOpen}
                        size="lg"
                      />

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            dir="rtl"
                          >
                            آیا میخواید از حساب کاربری خارج شوید ؟
                          </Typography>
                          <div className="d-flex justify-content-between mt-4">
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={handleLogOut}
                            >
                              خروج
                            </Button>
                            <Button
                              variant="contained"
                              color="success"
                              onClick={handleClose}
                            >
                              ماندن
                            </Button>
                          </div>
                        </Box>
                      </Modal>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
