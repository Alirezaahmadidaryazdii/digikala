import { dataBestSell } from "../data/dataBestSell";
import ProductBestSell from "./productBestSell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import banner from "../image/bannerBestSell.webp";
const BestSell = () => {
  return (
    <>
      <div className="main-best-sell">
        <div className="header-sell d-flex m-3" dir="rtl">
          <div className="m-auto d-flex">
            <FontAwesomeIcon
              icon={faFireFlameCurved}
              className="mt-2 m-3 icon-sell"
            />
            <h4>پر فروش ترین کالا ها</h4>
          </div>
          <p className="mr-auto sell-see">مشاهده همه</p>
        </div>

        <div className="row" dir="rtl">
          {dataBestSell.map((item) => (
            <ProductBestSell key={item.id} product={item} />
          ))}
        </div>
      </div>
      <img src={banner} alt="" className="w-100 m-auto p-3 banner-sell"/>
    </>
  );
};
export default BestSell;
