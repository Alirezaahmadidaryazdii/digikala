// import { dataServies } from "../data/dataServies";
// import ProductServiesApp from "./productServiesApp";
// import { fetchProductData } from "../data/dataServies";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import '../style.css'
// import ProductDigikala from "./productDigkala";
// import offerIncredble from '../image/offerIncredible.svg';
// import boxOfferIncredble from '../image/boxOfferIncrodeble.webp';
// const Servies = async()=>{
//   const dataProductDigikala = await fetchProductData()
//    const option = {
//     items: 6,
//     margin: 1,
//     loop: false,
//     autoplay: false,
//     nav:false,
//     rtl:false,
//     dots:false,
//     responsive: {
//       767:{
//         items: 4
//       },
//       500:{
//         items: 3
//       },
//       360:{
//         items: 2
//       },
//       1024:{
//         items: 5
//       }
//     }
//    }
//     return(
//         <>
//           <div className="ApplicationProduct row">
//           {dataServies.map((item)=>{
//             return <ProductServiesApp key={item.id} productApp={item} />
//           })}
//           </div>

//           <OwlCarousel className="bg-danger"{...option} >
//              <div className="item main-item">
//               <div className="card-main">
//                   <img src={offerIncredble} alt="" className="imageIncredible" />
//                   <img src={boxOfferIncredble} alt="" className="boxImage"/>
//               </div>
//             </div>
//             {dataProductDigikala.map((item)=>{
//                 return <ProductDigikala key={item.id} productDigikala={item} />
//             })}
//           </OwlCarousel>
//         </>
//     )
// }
// export default Servies;

import { useState, useEffect } from "react";
import { dataServies, fetchProductData } from "../data/dataServies";
import ProductServiesApp from "./productServiesApp";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../style.css";
import ProductDigikala from "./productDigkala";
import offerIncredble from "../image/offerIncredible.svg";
import boxOfferIncredble from "../image/boxOfferIncrodeble.webp";
import { Link } from "react-router-dom";

// mui import 
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ImageWithLoading from "../loading/imgLoading";

const Servies = () => {
  const [dataProductDigikala, setDataProductDigikala] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        setDataProductDigikala(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const option = {
    items: 6,
    margin: 1,
    loop: false,
    autoplay: false,
    nav: false,
    rtl: false,
    dots: false,
    responsive: {
      767: {
        items: 4,
      },
      500: {
        items: 3,
      },
      360: {
        items: 2,
      },
      1024: {
        items: 5,
      },
    },
  };

  if (loading) {
    return <div className="my-5 p-5 text-center">
    <svg width={0} height={0}>
      <defs>
        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e01cd5" />
          <stop offset="100%" stopColor="#1CB5E0" />
        </linearGradient>
      </defs>
    </svg>
    <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
  </div>;
  }

  if (error) {
    return <>erro {error}</>;
  }

  return (
    <>
      <div className="ApplicationProduct row">
        {dataServies.map((item) => (
          <ProductServiesApp key={item.id} productApp={item} />
        ))}
      </div>

      <OwlCarousel className="bg-danger" {...option}>
        <div className="item main-item">
          <Link to="/product">
            <div className="card-main">
              <img src={offerIncredble} alt="" className="imageIncredible" />
              <img src={boxOfferIncredble} alt="" className="boxImage" />
              <p className="text-white small text-center mx-auto">دیدن همه</p>
            </div>
          </Link>
        </div>
        {dataProductDigikala.map((item) => (
          <ProductDigikala key={item.id} productDigikala={item} />
        ))}
      </OwlCarousel>
    </>
  );
};

export default Servies;
