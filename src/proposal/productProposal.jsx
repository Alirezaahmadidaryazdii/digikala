
const ProductProposal = ({product})=>{
  

    return(
        <div className="item">
          <div className="proposal ">
            <div id="imgProposal">
                <img src={product.image} alt="" id="imageProposal"/>
            </div>
            <p className="m-auto d-flex justify-content-center">{product.title}</p>
          </div>
        </div>
    )
}
export default ProductProposal;