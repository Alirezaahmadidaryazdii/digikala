import imageIncredible from "../image/incredbileMarket.svg";
import incredibleBoxMarket from "../image/fresh.webp";
import productIncredible1 from "../image/productIncredible1.webp";
import productIncredible2 from "../image/productIncredble2.webp";
import productIncredible3 from "../image/productIncredble3.webp";
import productIncredible4 from "../image/productIncredible4.webp";
import productIncredible5 from "../image/productIncredible5.webp";
import productIncredible6 from "../image/productIncredible6.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight}  from "@fortawesome/free-solid-svg-icons";
// card digikala
import card1 from '../image/cardDigikala1.webp';
import card2 from '../image/cardDigikala2.webp';
import card3 from '../image/cardDigikala3.webp';
import card4 from '../image/cardDigikala4.webp';
import '../style.css';
const OfferProduct = () => {
  const dataOffer = [
    {
      id: 1,
      image: productIncredible1,
      disCount: "٣٣%",
    },
    {
      id: 2,
      image: productIncredible2,
      disCount: "٣٣%",
    },
    {
      id: 3,
      image: productIncredible3,
      disCount: "١%",
    },
    {
      id: 4,
      image: productIncredible4,
      disCount:"٢٨%"
    },
    {
      id: 5,
      image: productIncredible5,
      disCount: "٢٨%",
    },
    {
      id: 6,
      image: productIncredible6,
      disCount: "١٥%",
    },
  ];
  const dataCard = [
    {
        id:1,
        image:card1,
    },
    {
        id:2,
        image:card2,
    },
    {
        id:3,
        image:card3,
    },
    {
        id:4,
        image:card4,
    },
  ]
  return (
    <>
 <div className="offer " dir="rtl">
        <div className="images">
          <img src={incredibleBoxMarket} alt="" />
          <img src={imageIncredible} alt="" />
        </div>
        <div className="title-discoun">
            <p className=" title-discount">تا ٣٣% تخفیف </p>
        </div>
          
        <div className="product-incredible d-flex">
          {dataOffer.map((item) => {
            return (
              <><div className="title-incredible" key={item.id}>
                <img src={item.image} key={item.id} id="img-incrdible" />
                  <p className="title-product-incredible">{item.disCount}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="offer-title">
            <p className="m-auto p-offer">پیش از صد کالا</p>
            <FontAwesomeIcon icon= {faArrowRight} rotation={180}className="m-3" />
        </div>
      </div>
      <div className="cardOffer">
        <div className="row">
               {dataCard.map((item)=>{
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <img key={item.id} src={item.image} className="card-img" />
                    </div>
                )
            })} 
        </div>
      </div>
    </>
  );
};
export default OfferProduct;
