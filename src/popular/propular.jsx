import { dataPopular } from "../data/dataPopular";
import OwlCarousel from "react-owl-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ProductPopular from "./ProductPopular";
import { datacardPopular } from "../data/dataPopular";
import CardPopular from "./cardPopular";
import '../style.css'
const Popular = ()=>{
  const options = {
    items: 8,
    margin: 4,
    loop: false,
    autoplay: false,
    nav:false,
    rtl:true,
    dots:false,
    responsive:{
      767:{
        items: 5
      },
      360:{
        items: 3
      }
    }
  }
    return(
      <>
        <div id="popular">
          <div className="title-popular d-flex">
          <FontAwesomeIcon icon={faStar} id="icon-popular"/>
          <p id="brand-popular">محبوب ترین برند ها</p>
          </div>
          <OwlCarousel className="owl-theme"{...options} >
            {dataPopular.map((item)=>(
                  <ProductPopular key={item.id} product={item} />
            ))}
          </OwlCarousel>
        </div>
        <div className="card-popular">
          <div className="row"dir="rtl">
            {datacardPopular.map((item)=>{
              return <CardPopular key={item.id} product={item} />
            })}
          </div>
        </div>
        </>
    )
}
export default Popular;