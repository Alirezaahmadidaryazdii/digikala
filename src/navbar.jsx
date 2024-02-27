import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  return (
    <div className="navbar-positon fixed-top" id="navBar">
      <img src={banner} className="w-100" height={50} />
      <nav className="navbar  " dir="rtl">
        <div className="nav-right">
          <div className=" d-flex align-items-center">
            <a className="navbar-brand ">
              <img
                src={logo}
                className="mt-3 ml-auto"
                id="iconBaner"
                alt="لوگو"
              />
            </a>
            <form className="d-flex m-2" id="form-search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="m-2 mt-2"
                id="icon-search"
              />
              <input type="text" placeholder="جستجو" id="search" />
            </form>
          </div>
        </div>
        <div className="nav-left">
          <Link to="/login" id="linkLogin">
            <div className="logIn d-inline">
              <FontAwesomeIcon icon={faArrowUpFromBracket} rotation={270} />
              <a className="log">ورود / ثبت نام</a>
            </div>
          </Link>
          <span className="m-2"> | </span>
          <FontAwesomeIcon icon={faCartShopping} id="icon-shop" />
        </div>
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
                <p className="text-muted mt-2 ">دسته بندی کالا ها</p>
                <span class="b3"></span>
                <span class="b4"></span>
              </div>
              <div className="tab" data-tab-index="1">
                <FontAwesomeIcon
                  icon={faPercent}
                  className="text-lg text-muted mb-1"
                />
                <p className="text-muted mt-2 "> شگفت انگیز ها</p>
                <span class="b3"></span>
                <span class="b4"></span>
              </div>
              <div className="tab" data-tab-index="2">
                <FontAwesomeIcon
                  icon={faStore}
                  className="text-lg text-muted mb-1"
                />
                <p className="text-muted mt-2 "> سوپر مارکت</p>
                <span class="b3"></span>
                <span class="b4"></span>
              </div>
              <div className="tab" data-tab-index="3">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="text-lg text-muted mb-1"
                />
                <p className="text-muted mt-2 "> کارت هدیه</p>
                <span class="b3"></span>
                <span class="b4"></span>
              </div>
              <div className="tab" data-tab-index="4">
                <FontAwesomeIcon
                  icon={faFire}
                  className="text-lg text-muted mb-1"
                />
                <p className="text-muted mt-2"> پرفروش ترین ها</p>
                <span class="b3"></span>
                <span class="b4"></span>
              </div>
              <div className="tab" data-tab-index="5">
                <FontAwesomeIcon
                  icon={faTags}
                  className="text-lg text-muted mb-1"
                />
                <p className="text-muted mt-2 ">تخفیف ها</p>
                <span class="b3"></span>
                <span class="b4"></span>
              </div>
              <div className="tab" data-tab-index="6">
                <p className="text-muted mt-2 "> سوالی دارید؟</p>
                <span class="b3"></span>
                <span class="b4"></span>
              </div>
            </div>
          </div>
          <div className="navLeft d-flex small">
            <FontAwesomeIcon icon={faLocation} className="text-lg mt-2" />
            <p className="text-muted m-3 ml-2 mt-1">لطفا شهر خود را انتخاب کنید</p>
          </div>
        </div>
        <hr id="straight" className="small" />
      </nav>
    </div>
  );
};

export default Navbar;
