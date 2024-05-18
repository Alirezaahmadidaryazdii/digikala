import digi from "../image/digi.svg";
import image1 from "../image/express-delivery.svg";
import image2 from "../image/cash-on-delivery.svg";
import image3 from "../image/support.svg";
import image4 from "../image/days-return.svg";
import image5 from "../image/original-products.svg";
import logo2 from "../image/footerlogo2.webp";
import bazar from '../image/coffe-bazzar.svg';
import bazarLogo from '../image/coffe-bazzar (1).svg';
import myket from '../image/myket.svg';
import myketLogo from '../image/myket (1).svg';
import sibApp from "../image/sib-app.svg";
import sibAppLogo from "../image/sib-app (1).svg";
import more from '../image/More.svg'
import '../style.css'
import img from '../image/rezi.webp'
import img2 from '../image/kasbokar.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
const ProductFooter = () => {
  function goToTop() {
    window.scrollTo(0, 0); // اسکرول به بالای صفحه
}
  return (
    
    <div id="Footer">
      <div className="header-footer d-flex justify-content-between m-2 border-top mt-4" dir="rtl">
        <div className="right mt-5">
          <img src={digi} alt="" />
          <p className="mt-3">تلفن پشتیبانی ٠٢١-۶۱۹۳۰۰۰۰ | هفت روز هفته ٢٤ ساعته</p>
        </div>
        <div className="left mt-5">
          <a onClick={goToTop} className="text-top text-muted">بازگشت به بالا</a>
        </div>
      </div>
      <div className="body-footer"dir="rtl">
        <div className="images-footer d-flex justify-content-around">
          <div className="img-footer">
            <img src={image1} alt="" />
            <p className="text-img-footer">امکان تحویل اکسپرس</p>
          </div>
          <div className="img-footer">
            <img src={image2} alt="" />
            <p className="text-img-footer">امکان پرداخت در محل</p>
          </div>
          <div className="img-footer">
            <img src={image3} alt="" />
            <p className="text-img-footer"> ٧ هفته ٢٤ ساعته</p>
          </div>
          <div className="img-footer">
            <img src={image4} alt="" />
            <p className="text-img-footer"> هفت روز ضمانت بازگشت کالا</p>
          </div>
          <div className="img-footer">
            <img src={image5} alt="" />
            <p className="text-img-footer">ضمانت اصل بودن کالا</p>
          </div>
        </div>
        <div className="texts-footer mt-5">
            <div className="row m-2">
                <div className="col-sm-3 col-lg-3">
                    <div className="header-text-footer">
                        <p id="footer-text">با دیجیکالا</p>
                    </div>
                    <div className="body-footer">
                        <p className="text-muted">اتاق خبر دیجیکالا</p>
                        <p className="text-muted">فرورش در دیجیکالا</p>
                        <p className="text-muted">فرصت های شغلی</p>
                        <p className="text-muted">گزارش تخلف در دیجیکالا</p>
                        <p className="text-muted">تماس با دیجیکالا</p>
                        <p className="text-muted">درباره دیجیکالا</p>
                    </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                    <div className="header-text-footer">
                        <p id="footer-text">خدمات مشتریان</p>
                    </div>
                    <div className="body-footer">
                        <p className="text-muted">پاسخ به پرسش های متداول</p>
                        <p className="text-muted">رویه های بازگردانی کالا</p>
                        <p className="text-muted">شرایط استفاده</p>
                        <p className="text-muted">حریم خصوصی </p>
                        <p className="text-muted">گزارش باگ</p>
                    </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                    <div className="header-text-footer">
                        <p id="footer-text">راهنمای خرید از دیجیکالا</p>
                    </div>
                    <div className="body-footer">
                        <p className="text-muted">نحوه ثبت سفارش</p>
                        <p className="text-muted">رویه ارسال سفارش</p>
                        <p className="text-muted">شیوه های پرداخت</p>
                    </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                    <div className="header-text-footer">
                        <p id="footer-text">  همراه ما باشید </p>
                    </div>
                    <div className="body-footer">
                        <div className="icons-footer d-flex justify-content-around">
                        <FontAwesomeIcon icon={faInstagram}className="icon-alone-footer" />
                        <FontAwesomeIcon icon={faTwitter} className="icon-alone-footer"/>
                        <FontAwesomeIcon icon={faLinkedin}className="icon-alone-footer" />
                        </div>
                    </div>
                    <div className="footer-footer">
                        <p className="email">با ثبت ایمیل از جدید ترین تخفیف ها با خبر شوید</p>
                        <div className="input-footer d-flex">
                            <input type="email" placeholder="ایمیل شما"id="email-footer"/>
                            <button id="submit-footer">ثبت</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="footer-footerMain d-flex justify-content-between" dir="rtl">
        <div className="right d-flex">
        <img src={logo2} alt="" className="img-footer-footer m-3"/>
        <h5 className="m-auto text-white">دانلود اپلیکشن دیجیکالا</h5>
        </div>
        <div className="left d-flex m-3">
            <div className="card-footer d-flex m-2 rounded">
                <img src={bazar} alt="" />
            </div>
            <div className="card-footer d-flex d-flex m-2 rounded">
                <img src={myket} alt="" />
            </div>
            <div className="card-footer d-flex d-flex m-2 rounded">
                <img src={sibAppLogo} alt="" />
            </div>
            <div className="card-footer d-flex d-flex bg-white more border rounded p-2 mx-3">
                <img src={more} alt=""className=" " />
            </div>
        </div>
      </div>
      <div className="other-footer m-3 mt-5 border-top p-2">
        <div className="row"dir="rtl">
            <div className="col-lg-8">
                <h4 className="text-muted text-lg">فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h4>
                <p className="text-muted small">یه خرید اینترنتی مطمبئن نیاز به فروشگاهی است که بتواند کالا های متنوع با کیفیت و قیمت مناسب را در مدت زمان کوتاه به دسته مشتریان خود برسناد و ضمانت بازگشت کالا هم داشته باشد  ویژگی که فروشگاه دیجیکالا سال هاست که روی آن کار کرده واز این طریق توانسته مشتریان سابق خود را داشته باشد</p>
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
                <img src={img} alt="" className="img2-footer "/>
                <img src={img2} alt="" className="img2-footer2"/>
            </div>
        </div>
      </div>
    </div>
  );
};
export default ProductFooter;
