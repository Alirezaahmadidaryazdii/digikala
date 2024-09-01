// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import ShowProduct from "../componentRout/showProductDigikala";
// import {Link} from 'react-router-dom';
// import '../style.css';
// const ProductDigikala = ({productDigikala})=>{

//     return(
//         <Link to="/product" id="linkLogin"> 
      
//          <div className="item p-3 ">
//          <div className="card p-3">
//             <img src={productDigikala.image} alt="" id="imageProductDigicala"/>
//             <div className="textTitleProductDigikala"dir="rtl">
//                 <div className="rightProductDigicala">{productDigikala.rebate}</div>
//                 <div className="leftProductDigikala"dir="rtl">{productDigikala.price} <span className="text-sm">تومان</span> </div>
//             </div>
//             <div className="price">
//                 <p className="text-decoration-line-through text-muted">{productDigikala.discount}</p>
//             </div>
//           </div>
//          </div>
//         </Link>
//     )
// }
// export default ProductDigikala;

// ProductDigikala.jsx
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import ShowProduct from "../componentRout/showProductDigikala";
import { Link } from 'react-router-dom';
import '../style.css';
import { useEffect, useState } from "react";
import ImageWithLoading from "../loading/imgLoading";

const ProductDigikala = ({ productDigikala }) => {
  const [urlImage, setUrlImage] = useState([])
  const [urlPage, setUrlPage] = useState('')

  useEffect(()=>{
    setUrlPage(`/pageProduct?p=${productDigikala.id}`)
  },[])
  
  useEffect(() => {
    try {
      // استفاده از regex برای استخراج همه لینک‌های تصاویر
      const regex = /https:\/\/[^\s"]+/g;
      const imageArray = productDigikala.images[0].match(regex);
      
      // بررسی اینکه آرایه شامل لینک‌ها باشد
      if (imageArray && imageArray.length > 0) {
        // console.log(imageArray[0])
        setUrlImage(imageArray[0]); // استفاده از اولین لینک
      }
    } catch (error) {
      console.error("Error extracting image URLs:", error);
    }
  }, [productDigikala.images]);

  return (
    <Link to={urlPage}  id="linkLogin">
      <div className="item p-3">
        <div className="card p-3">
        {urlImage && <img src={urlImage? urlImage : ''} alt="" id="imageProductDigicala" />}
          {/* <img src={productDigikala.images[2]} alt="" id="imageProductDigicala" /> */}
          <p className="text-center">{productDigikala.title}</p>
          <div className="textTitleProductDigikala" dir="rtl">
            {/* <div className="rightProductDigicala">{productDigikala.rebate}</div> */}
            <div className="leftProductDigikala" dir="rtl">{productDigikala.price} <span className="text-sm">$</span></div>
          </div>
          <div className="price">
            {/* <p className="text-decoration-line-through text-muted">{productDigikala.discount}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductDigikala;
