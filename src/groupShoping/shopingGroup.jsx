
const ShopingGroup = ({product})=>{

    return(
        <>
          <div className="group-image">
            <img src={product.image} alt="" id="image-group" />
          </div>
          <div className="group-title">
            <p id="title-gourp">{product.title}</p>
          </div>
        </>
    )
}

export default ShopingGroup;