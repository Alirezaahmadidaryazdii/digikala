import React from "react";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const PeroductPerson = ({ product }) => {
  return (
    <>
      <div className="item owl-rtl m-auto"dir="rtl" id="personProfile">
        <div className="personImg">
               <img src={product.img} alt="" id="imagePerson" />     
        </div>
        <p className="textPerson">{product.textTitle}</p>
      </div>
    </>
  );
};
export default PeroductPerson;
