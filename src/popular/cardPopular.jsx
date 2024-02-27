import '../style.css'
const CardPopular = ({product})=>{

    return (
        <>
          <div className="col-lg-6 col-sm-12">
            <img src={product.image} alt=""className="w-100 image-cardPopular" />
          </div>
        </>
    )
}
export default CardPopular;