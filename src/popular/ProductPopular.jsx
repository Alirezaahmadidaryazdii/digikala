import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../style.css';
const ProductPopular = ({product})=>{
    return(
        <>
          <div className="item">
            <img src={product.image} alt=""id="image-popular" />
          </div>
        </>
    )
}
export default ProductPopular;