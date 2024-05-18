import ShopingGroup from "./shopingGroup";
import CardGroup from "./cardGroup";
import React, { useEffect, useState } from "react";
import {
  dataGroupShop,
  dataGroupShop2,
  dataCardGoup,
} from "../data/dataGroupShop";
import "../style.css";
const GroupShop = () => {
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
      <section className="groupShop">
        <div className="titleGroup">
          <h4 className="d-flex justify-content-center ">
            خرید بر اساس دسته بندی
          </h4>
        </div>
        <div className="group" dir="rtl">
          <div className="group" dir="rtl">
            {isWideScreen
              && dataGroupShop.map((item) => (
                 item.id != 7 && (
                  <div className="group-main" dir="rtl" key={item.id}>
                  <ShopingGroup product={item} />
                </div>
                 )
                ))
              }
            {isWideScreenMobile
              && dataGroupShop
                  .filter((item) => item.id <= 3)
                  .map((item) => (
                    <div className="group-main" dir="rtl" key={item.id}>
                      <ShopingGroup product={item} />
                    </div>
                  ))
             }
             {isWideScreenLaptop
               && dataGroupShop.map((item)=>{
                return (
                  <div className="group-main">
                    <ShopingGroup product={item} />
                  </div>
                )
               })
             }
          </div>
        </div>
        <div className="group2">
          {/* {dataGroupShop2.map((item) => {
            return (
              <div className="group-main" dir="rtl">
                <ShopingGroup key={item.id} product={item} />
              </div>
            );
          })} */}
          {isWideScreenMobile
              ? dataGroupShop2
                  .filter((item) => item.id <= 10)
                  .map((item) => (
                    <div className="group-main" dir="rtl" key={item.id}>
                      <ShopingGroup product={item} />
                    </div>
                  ))
              : dataGroupShop2.map((item) => (
                <div className="group-main" dir="rtl" key={item.id}>
                  <ShopingGroup product={item} />
                </div>
              ))}
        </div>
      </section>
      <section className="cardGroup">
        <div className="row">
          {dataCardGoup.map((item) => {
            return <CardGroup key={item.id} product={item} />;
          })}
        </div>
      </section>
    </>
  );
};
export default GroupShop;
