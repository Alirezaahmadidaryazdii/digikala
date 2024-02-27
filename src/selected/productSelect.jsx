
const ProductSelecte = ({product})=>{

    return (
        <>
          <div className=" col-lg-2 col-md-6 col-sm-6 slecte-col">
            <img src={product.image} id="imageProductDigicala"className="m-4" alt="" />
            <div className="textTitleProductDigikala"dir="rtl">
                <div className="rightProductDigicala2 ml-3 small">{product.rebate}</div>
                <div className="leftProductDigikala small"dir="rtl">{product.price} <span className="text-sm">تومان</span> </div>
            </div>
            <div className="price d-flex justify-content-end">
                <p className="text-decoration-line-through text-muted price">{product.discount}</p>
            </div>
          </div>
        </>
    )
}
export default ProductSelecte;