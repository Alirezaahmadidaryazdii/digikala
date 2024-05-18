import { dataBestSell2 } from "../data/dataBestSell2";
import { dataRead } from "../data/dataBestSell";
import ProductRead from "./productRead";
import ProductBestSell2 from "./productBestSell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const BestSell2 = () => {
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
      <div className="main-best-sell">
        <div className="header-sell d-flex m-3" dir="rtl">
          <div className="m-auto d-flex">
            <FontAwesomeIcon
              icon={faFireFlameCurved}
              className="mt-2 m-3 icon-sell"
            />
            <h4> داغ ترین چند ساعت گذشته </h4>
          </div>
          <p className="mr-auto sell-see">مشاهده همه</p>
        </div>

        <div className="row" dir="rtl">
        {isWideScreenMobile
          &&  dataBestSell2.filter((item)=>item.id <= 5).map((item) => (
            <ProductBestSell2 key={item.id} product={item} />
          ))}
          
          {isWideScreen
          &&  dataBestSell2.filter((item)=>item.id <= 5).map((item) => (
            <ProductBestSell2 key={item.id} product={item} />
          ))}
          {isWideScreenLaptop
          && dataBestSell2.map((item) => (
            <ProductBestSell2 key={item.id} product={item} />
          ))
          }
        </div>
      </div>
      <div className="readingMain">
        <div className="header-reading d-flex justify-content-between m-2"dir="rtl">
          <p className="text-read">خواندنی ها</p>
          <div className="more-read d-flex" dir="rtl">
            <p >مطالب بیشتر در دیجیکالا مگ</p>
            <FontAwesomeIcon icon={faChevronUp} rotation={270} className="mt-1 m-1"/>
          </div>
        </div>
        <div className="body-read">
          <div className="row row-read " dir="rtl">
            {dataRead.map((item)=>{
              return <ProductRead product={item} key={item.id} />
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default BestSell2;
