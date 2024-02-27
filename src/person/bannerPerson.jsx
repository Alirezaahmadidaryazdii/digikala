// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../style.css";

const BannerPerson = ({productBanner})=>{

    return(
        <>
          <div className="item owl-rtl"id="imageBannerPerson">
            <img src={productBanner.image} alt=""id="imageBannerPerson" />
          </div>
        </>
    )
}
export default BannerPerson;