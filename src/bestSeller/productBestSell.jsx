
const ProductBestSell = ({product})=>{

    return (
        <>
          <div className="col-lg-3 d-flex"dir="rtl">
            <img src={product.image} alt=""id="sell-image" />
            <h2 id="heading-sell">{product.id}</h2>
            <p className="border-bottom border-1 mt-4 text-muted text-sell">{product.title}</p>
          </div>
        </>
    )
}
export default ProductBestSell;