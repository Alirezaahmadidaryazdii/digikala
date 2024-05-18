import digiplusIcon from "../image/digiplus-logo.svg";
import digiplusLogo from "../image/plus-widget.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { dataDigiplus } from "../data/dataDigiplus";
import Selecte from "../selected/selected";
import '../style.css';
import { useState, useEffect } from "react";

const ProductDigiplus = ({ product }) => {

  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isWideScreenMobile,setIsWideMobile] = useState(false);
  const [isWideScreenLaptop,setIsWideLaptop] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth <= 900 && window.innerWidth > 500);
      setIsWideMobile(window.innerWidth < 500);
      setIsWideLaptop(window.innerWidth > 900)
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return (
    <>
      <div className="row row-digiplus" dir="rtl">
        <div className="col-lg-4 col-md-12 p-3">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-6">
              <div className="logo">
                <img src={digiplusIcon} alt="" />
              </div>
              <div className="direct text-white">
                <p>خدمات ویژه برای اعضای دیجی پلاس</p>
                <button
                  className="btn  text-white d-flex border border-white border-1 btn-sm d-inine"
                  dir="rtl"
                >
                  <p>عضویت</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    rotation={180}
                    className="m-2"
                  />
                </button>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-6">
              <div className="png">
                <img
                  src={digiplusLogo}
                  alt=""
                  className="digiplusLogo w-100 mb-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 " dir="rtl">
          <div className="w-100 bg-white mr-5 mt-3 p-4 rounded border ">
            <div className="header d-flex justify-content-between">
              <div className="right d-flex">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mt-2 m-2 icon-digiplus"
                />
                <h5 className="font-weight-bold txt-digiPlus">ارسال فوری رایگان</h5>
              </div>
              <div className="left d-flex">
                <p>مشاهده همه</p>
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={270}
                  className="mt-lg-2 mt-md-1 m-2 icon-digi"
                />
              </div>
            </div>
            <div className="row mt-3" dir="rtl">
              {isWideScreenMobile
              && dataDigiplus.filter((item)=>item.id <= 6).map((item)=>{
                return (
                  <div
                    className="col-4 col-lg-2 col-md-2 col-sm-4 mb-4"
                    key={item.id}
                  >
                    <img src={item.image} alt="" className="w-100" />
                  </div>
                );
              })
              }
              {isWideScreen
              &&  dataDigiplus.filter((item)=> item.id <= 12).map((item)=>{
                return (
                  <div
                    className="col-4 col-lg-2 col-md-2 col-sm-4 mb-4"
                    key={item.id}
                  >
                    <img src={item.image} alt="" className="w-100" />
                  </div>
                );
              })
              }
            {isWideScreenLaptop
            &&  dataDigiplus.map((item) => {
              return (
                <div
                  className="col-4 col-lg-2 col-md-2 col-sm-4 mb-4"
                  key={item.id}
                >
                  <img src={item.image} alt="" className="w-100" />
                </div>
              );
            })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDigiplus;
