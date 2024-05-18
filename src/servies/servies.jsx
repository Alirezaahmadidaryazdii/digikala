import { dataServies } from "../data/dataServies";
import ProductServiesApp from "./productServiesApp";
import { dataProductDigikala } from "../data/dataServies";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../style.css'
import ProductDigikala from "./productDigkala";
import offerIncredble from '../image/offerIncredible.svg';
import boxOfferIncredble from '../image/boxOfferIncrodeble.webp';
const Servies = ()=>{
   const option = {
    items: 6,
    margin: 1,
    loop: false,
    autoplay: false,
    nav:false,
    rtl:false,
    dots:false,
    responsive: {
      767:{
        items: 4
      },
      500:{
        items: 3
      },
      360:{
        items: 2
      },
      1024:{
        items: 5
      }
    }
   }
    return(
        <>
          <div className="ApplicationProduct row">
          {dataServies.map((item)=>{
            return <ProductServiesApp key={item.id} productApp={item} />
          })}
          </div>
          
          <OwlCarousel className="bg-danger"{...option} >
             <div className="item main-item">
              <div className="card-main">
                  <img src={offerIncredble} alt="" className="imageIncredible" />
                  <img src={boxOfferIncredble} alt="" className="boxImage"/>
              </div>
            </div>
            {dataProductDigikala.map((item)=>{
                return <ProductDigikala key={item.id} productDigikala={item} />
            })}
          </OwlCarousel>
        </>
    )
}
export default Servies;