import { dataSelected } from "../data/dataSelected";
import ProductSelecte from "./productSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const Selecte = ()=>{
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
    return(
        <div className="main-slecte">
        <div className="headerSelecte d-flex justify-content-center" dir="rtl">
        <FontAwesomeIcon icon={faChartLine} className="mt-2 m-3 icon-select" />
        <h4>منتخب محصولات  تخفیف و حراج</h4>
        </div>
          <div className="row row-select m-3"dir="rtl">
          {isWideScreenMobile
          &&  dataSelected.filter((item)=>item.id <= 5).map((item) => (
            <ProductSelecte key={item.id} product={item} />
          ))}
          
          {isWideScreen
          &&  dataSelected.filter((item)=>item.id <= 8).map((item) => (
            <ProductSelecte key={item.id} product={item} />
          ))}
          {isWideScreenLaptop
          && dataSelected.map((item) => (
            <ProductSelecte key={item.id} product={item} />
          ))
          }
          </div>
        </div>
    )
}
export default Selecte;