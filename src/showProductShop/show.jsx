import { useContext, useEffect } from "react";
import { ShopContext } from "../Context/shopContext";
import { fetchProductData } from "../data/dataServies";
import ShowProductComponent from "../componentRout/showProductComponentDigickala";
import Navbar from "../navbar";
import "../style.css";
import shop from "../image/shop2.gif";
import { ProductShow } from "./productShow";
import showAlertError from "../showAlertData/showAlertTrash";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
const Show = () => {
  const { cart, totalAmount, resetItem, showCount } = useContext(ShopContext);
  const [show, setShow] = useState(false);
  const [dataProductDigikala, setDataProductDigikala] = useState([]);
  const [dataStorage, setDataStorage] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        setDataProductDigikala(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // این useEffect تنها مسئول دریافت داده‌ها و به‌روزرسانی state است

  useEffect(() => {
    if (dataProductDigikala.length > 0) {
      // اطمینان از اینکه dataProductDigikala به‌روزرسانی شده است
      const data = dataProductDigikala.filter((item) =>
        cart.some((p) => p.id === item.id && p.count > 0)
      );

      console.log(data);

      // ذخیره کردن در localStorage فقط در صورتی که داده‌ای موجود باشد
      if (data.length > 0) {
        console.log("data:", data);
        localStorage.setItem("recentProduct", JSON.stringify(data));
        localStorage.setItem("rateCart", JSON.stringify(cart));
      }

      setDataStorage(JSON.parse(localStorage.getItem("recentProduct")));
    }
  }, [dataProductDigikala, cart]); // این useEffect تنها زمانی اجرا می‌شود که dataProductDigikala یا cart تغییر کند

  useEffect(() => {
    const calculateTotal = async () => {
      const total = await totalAmount();
      setTotal(total);
    };
    calculateTotal();
  }, [cart]);

  return (
    <>
      <Navbar class="navbar-show-context" />
      <div className="header-show show-row" dir="rtl">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header></Toast.Header>
          <Toast.Body className="toast-body">
            <FontAwesomeIcon icon={faTrash} className="text-danger mx-3" />
            همه ی موارد حذف شد
          </Toast.Body>
        </Toast>
        <p className=" txt-show">سبد خرید</p>
        <img src={shop} className="img-show" alt="" />
      </div>
      <div className="row " dir="rtl">
        <div className="col-12 col-md-6 col-lg-8">
          <div className="row" dir="rtl">
            {dataProductDigikala.map((item, index) => {
              if (cart.some((p) => p.id === item.id && p.count > 0)) {
                return <ShowProductComponent itemProduct={item} key={index} />;
              }
            })}
            {/* {dataStorage && dataStorage.map((item, index)=>{
              return <ShowProductComponent itemProduct={item} key={index} />
            })} */}
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4">
          <div className="card p-3 w-100">
            <div className="card-header mb-3">
              <h5>کالا های من</h5>
            </div>
            <div className="body">
              {cart.map((item) => {
                return (
                  <ProductShow
                    element={item}
                    count={item.count}
                    id={item.id}
                    key={item.id}
                  />
                );
              })}
            </div>
            <div className="mt-4">
              <p className="text-sm">
                {" "}
                تعداد محصولات : {Number(showCount()).toLocaleString("fa")}
              </p>
              <p className="text-sm">مجموع قیمت: {total} $</p>
              <div className="d-flex">
                <Link to="/delivery">
                  <button class="CartBtn">
                    <span class="IconContainer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="rgb(17, 17, 17)"
                        class="cart"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                      </svg>
                    </span>
                    <p class="text ">تایید و تکمیل فرایند خرید</p>
                  </button>
                </Link>
                <div className="btn m-auto mb-1" onClick={() => setShow(true)}>
                  <button
                    className="button btn m-auto"
                    type="button"
                    id="liveToastBtn"
                    onClick={() => resetItem()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 69 14"
                      class="svgIcon bin-top"
                    >
                      <g clip-path="url(#clip0_35_24)">
                        <path
                          fill="black"
                          d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_35_24">
                          <rect fill="white" height="14" width="69"></rect>
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 69 57"
                      class="svgIcon bin-bottom"
                    >
                      <g clip-path="url(#clip0_35_22)">
                        <path
                          fill="black"
                          d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_35_22">
                          <rect fill="white" height="57" width="69"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Show;
