import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// import css
import "./userComponent.css";
import { fetchProductData } from "../data/dataServies";
import { ShopContext } from "../Context/shopContext";
import ShowProductComponent from "../componentRout/showProductComponentDigickala";
import ProductDigikala from "../servies/productDigkala";
import { UserContex } from "../Context/userContext";

function Storage() {
  const { cart } = useContext(ShopContext);
  const {user, setUser} = useContext(UserContex)
  const [dataProductDigikalaState, setDataProductDigikalaState] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("recentProduct");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData) && parsedData.length > 0) {
        setDataProductDigikalaState(parsedData);
      } else {
        console.log("No valid data found in localStorage.");
      }
    }
    let dataUser = JSON.parse(localStorage.getItem("user"));
    if (dataUser !== null) setUser(dataUser);
  }, []);
  
  

  useEffect(() => {
    console.log("Updated dataProductDigikalaState:", dataProductDigikalaState); // لاگ مقدار به‌روز شده state
  }, [dataProductDigikalaState]);

  return (
    <>
      <p className="txt-show">تاریخچه</p>
      <FontAwesomeIcon
        icon={faDatabase}
        className="text-danger mx-1 icon-header-storage"
      />
      <h4 className="mt-5 mx-2">محصولاتی که اخیرا خریداری شده است</h4>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {dataProductDigikalaState.length > 0 ? (
          dataProductDigikalaState.map((e, index) => {
            return (
              <SwiperSlide
                id="swiper-slide-sotrage"
                className="d-flex justify-content-center"
                key={index} // اطمینان از داشتن یک کلید یکتا برای هر اسلاید
              >
                {/* <ProductDigikala itemProduct={e} /> */}
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img src={e?.images[0]} alt="" style={{width: 100}} />
                  <h4>{e.title}</h4>
                  <p>price: {e.price}</p>
                  <p>category: {e.category.name}</p>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <h3 className="text-center">هیچ محصولی وجود نداره</h3>
        )}
      </Swiper>
    </>
  );
}  

export default Storage;
