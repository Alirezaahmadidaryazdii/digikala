import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  faMagnifyingGlass,
  faArrowUpFromBracket,
  faCartShopping,
  faBars,
  faPercent,
  faStore,
  faCreditCard,
  faFire,
  faTags,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import banner from "./image/digicala.gif";
import logo from "./image/logo.svg";
import "./style.css";
import { ShopContext } from "./Context/shopContext";
import shop from "./image/shop.gif";
import person from "./image/personal.gif";
import home from "./image/home-icon.gif";
import { UserContex } from "./Context/userContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { showCount } = useContext(ShopContext);
  const { user, setUser } = useContext(UserContex);

  const [valueInput, setValueInput] = useState("");

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [isScrolled, setIsScrolled] = useState(false);

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [prevScrollPosition2, setPrevScrollPosition2] = useState(0);

  const isDesktop = window.innerWidth > 768; // عرض 768 پیکسل به بالا را حالت کامپیوتر در نظر می‌گیریم

  // recognise scroll down and top
  useEffect(() => {
    if (isDesktop) {
      const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        const currentScrollPosition2 = window.scrollY;
        if (currentScrollPosition > prevScrollPosition) {
          yourFunction();
        }
        if (currentScrollPosition2 < prevScrollPosition2) {
          yourFunction2();
        }
        setPrevScrollPosition(currentScrollPosition);
        setPrevScrollPosition2(currentScrollPosition2);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPosition, prevScrollPosition2, isDesktop]);

  // set class scroll navbar
  useEffect(() => {
    if (isDesktop) {
      const handleScroll = () => {
        setIsScrolled(document.documentElement.scrollTop > 0);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isDesktop]);

  useEffect(() => {
    let dataUser = JSON.parse(localStorage.getItem("user"));
    if (dataUser !== null) setUser(dataUser);
  }, []);

  const yourFunction = () => {
    const scrol = document.getElementById("navDisplay");
    scrol.style.display = "none";
  };

  const yourFunction2 = () => {
    const scrol = document.getElementById("navDisplay");
    scrol.style.display = "block";
  };

  const inputResultSearch = (event) => {
    if (event.key === "Enter")
      navigate(`/searchResult?q=${event.target.value}`);
  };
  return (
    <>
      <img src={banner} className="w-100 ban" height={50} />
      <div
        className={`navbar-positon ${isScrolled ? "fixed-top" : ""}`}
        id="navBar"
      >
        <nav className="navbar" dir="rtl">
          <div className="nav-right">
            <div className="d-flex align-items-center">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="mt-3 ml-auto"
                  id="iconBaner"
                  alt="لوگو"
                />
              </Link>
              <form className="d-flex m-2" id="form-search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="m-2 mt-2"
                  id="icon-search"
                />
                <input
                  type="text"
                  placeholder="جستجو"
                  id="search"
                  onKeyDown={(event) => inputResultSearch(event)}
                />
              </form>
              <a className="icon-bars-mobile">
                <FontAwesomeIcon icon={faBars} onClick={handleShow2} />
              </a>
            </div>
          </div>
          <div className="nav-left d-flex" id="navigation-left">
            {user ? (
              <Link to="/user?part=product" className="text-decoration-none">
                <div className=" mx-2">
                  <img src={user.avatar} alt="" id="imgProfileUser" />
                  <p className="log">{user.name}</p>
                </div>
              </Link>
            ) : (
              <>
                <Link to="/login" id="linkLogin" className="my-1">
                  <div className="logIn d-inline">
                    <FontAwesomeIcon
                      icon={faArrowUpFromBracket}
                      rotation={270}
                    />
                    <a className="log">ورود / ثبت نام</a>
                  </div>
                </Link>
              </>
            )}

            <span className="m-2"> | </span>
            <Link to="/show-shop" className="text-decoration-none">
              <img src={shop} id="icon-shop" />
              <span id="show-count">{showCount()}</span>
            </Link>
          </div>
          <Modal
            show={show2}
            onHide={handleClose2}
            dialogClassName="modal-600w"
            style={{ overflow: "hidden" }}
          >
            <Modal.Body>
              <div className="show-btn-closer">
                {/* <Link to="/login" id="linkLogin">
                  <div className="">
                    <img src={person} alt="" width={50} />
                    <a className="log-log2">ورود / ثبت نام</a>
                  </div>
                </Link> */}
                {user ? (
                  <Link to="/user?part=product">
                    <div className=" mx-2 d-flex">
                      <img src={user.avatar} alt="" id="imgProfileUser" />
                      <p className="log mx-2 mt-3">{user.name}</p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <Link to="/login" id="linkLogin" className="my-1">
                      <div className="logIn d-inline">
                        <FontAwesomeIcon
                          icon={faArrowUpFromBracket}
                          rotation={270}
                        />
                        <a className="log">ورود / ثبت نام</a>
                      </div>
                    </Link>
                  </>
                )}
                <Link to="/show-shop" className="text-decoration-none">
                  <img src={shop} id="icon-shop" />
                  <span id="show-count">{showCount()}</span>
                  <a className="shop-closer">سبد خرید</a>
                </Link>
                <Link to="/" className="text-dark text-decoration-none">
                  <img src={home} id="icon-home" alt="" />
                  <a className="shop-closer">خانه</a>
                </Link>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose2}>
                بستن
              </Button>
            </Modal.Footer>
          </Modal>
        </nav>
        <nav id="navDisplay">
          <div className="navigator d-flex" dir="rtl">
            <div className="navRight">
              <div className="tabs small" dir="rtl">
                <div className="tab" data-tab-index="0">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-lg text-muted mr-2 mb-1"
                  />
                  <p className="text-muted mt-2">دسته بندی کالا ها</p>
                  <span className="b3"></span>
                  <span className="b4"></span>
                </div>
                <div className="tab" data-tab-index="1">
                  <FontAwesomeIcon
                    icon={faPercent}
                    className="text-lg text-muted mb-1"
                  />
                  <p className="text-muted mt-2"> شگفت انگیز ها</p>
                  <span className="b3"></span>
                  <span className="b4"></span>
                </div>
                <div className="tab" data-tab-index="2">
                  <FontAwesomeIcon
                    icon={faStore}
                    className="text-lg text-muted mb-1"
                  />
                  <p className="text-muted mt-2"> سوپر مارکت</p>
                  <span className="b3"></span>
                  <span className="b4"></span>
                </div>
                <div className="tab" data-tab-index="3">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="text-lg text-muted mb-1"
                  />
                  <p className="text-muted mt-2"> کارت هدیه</p>
                  <span className="b3"></span>
                  <span className="b4"></span>
                </div>
                <div className="tab" data-tab-index="4">
                  <FontAwesomeIcon
                    icon={faFire}
                    className="text-lg text-muted mb-1"
                  />
                  <p className="text-muted mt-2"> پرفروش ترین ها</p>
                  <span className="b3"></span>
                  <span className="b4"></span>
                </div>
                <div className="tab" data-tab-index="5">
                  <FontAwesomeIcon
                    icon={faTags}
                    className="text-lg text-muted mb-1"
                  />
                  <p className="text-muted mt-2">تخفیف ها</p>
                  <span className="b3"></span>
                  <span className="b4"></span>
                </div>
                <div className="tab" data-tab-index="6">
                  <p className="text-muted mt-2"> سوالی دارید؟</p>
                  <span className="b3"></span>
                  <span className="b4"></span>
                </div>
              </div>
            </div>
            <button
              onClick={handleShow}
              className="d-flex bg-transparent border-0"
            >
              <FontAwesomeIcon icon={faLocation} className="text-lg mt-2" />
              <p className="text-muted m-3 ml-2 mt-1">
                لطفا شهر خود را انتخاب کنید
              </p>
            </button>
          </div>
          <hr id="straight" className="small" />
        </nav>

        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-600w"
          style={{ overflow: "hidden" }}
        >
          <Modal.Header closeButton className="modal-headerf">
            <Modal.Title className="mx-auto">موقعیت مکانی</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414688.4539493808!2d51.01798638705839!3d35.707681958380014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1709473474547!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              بستن
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default Navbar;
