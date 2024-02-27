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
import ShowProduct from "../componentRout/showProductDigikala";
import { Link } from 'react-router-dom';
import '../style.css';

const ProductDigikala = ({ productDigikala }) => {
  return (
    <Link to="/product" id="linkLogin">
      <div className="item p-3">
        <div className="card p-3">
          <img src={productDigikala.image} alt="" id="imageProductDigicala" />
          <div className="textTitleProductDigikala" dir="rtl">
            <div className="rightProductDigicala">{productDigikala.rebate}</div>
            <div className="leftProductDigikala" dir="rtl">{productDigikala.price} <span className="text-sm">تومان</span></div>
          </div>
          <div className="price">
            <p className="text-decoration-line-through text-muted">{productDigikala.discount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductDigikala;
