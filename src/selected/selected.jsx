import { dataSelected } from "../data/dataSelected";
import ProductSelecte from "./productSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
const Selecte = ()=>{

    return(
        <div className="main-slecte">
        <div className="headerSelecte d-flex justify-content-center" dir="rtl">
        <FontAwesomeIcon icon={faChartLine} className="mt-2 m-3 icon-select" />
        <h4>منتخب محصولات  تخفیف و حراج</h4>
        </div>
          <div className="row row-select m-3"dir="rtl">
            {dataSelected.map((item)=>{
                return <ProductSelecte key={item.id} product={item} />
            })}
          </div>
        </div>
    )
}
export default Selecte;