import ShopingGroup from "./shopingGroup";
import CardGroup from "./cardGroup";
import { dataGroupShop ,dataGroupShop2, dataCardGoup} from "../data/dataGroupShop";
import "../style.css";
const GroupShop = () => {
  return (
    <>
      <section className="groupShop">
        <div className="titleGroup">
          <h4 className="d-flex justify-content-center ">
            خرید بر اساس دسته بندی
          </h4>
        </div>
        <div className="group"dir="rtl">
          {dataGroupShop.map((item) => {
            return (
              <div className="group-main"dir="rtl">
                <ShopingGroup key={item.id} product={item} />
              </div>
            );
          })}
        </div>
        <div className="group2">
          {dataGroupShop2.map((item)=>{
             return (
              <div className="group-main"dir="rtl">
                <ShopingGroup key={item.id} product={item} />
              </div>
            );
          })}
        </div>
      </section>
      <section className="cardGroup">
        <div className="row">
           {dataCardGoup.map((item)=>{
          return <CardGroup key={item.id} product={item} />
        })}
        </div>
       
      </section>
    </>
  );
};
export default GroupShop;
