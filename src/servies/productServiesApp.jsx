import '../style.css';
const ProductServiesApp = ({productApp})=>{
  return (
    <>
    <div className="col-lg-2 col-md-4 col-sm-4 col-4">
      <div className="AppProdcut">
        <img src={productApp.image} alt="" id='imageAppProduct' className='mx-auto'/>
        <p id='AppTitle'>{productApp.title}</p>
      </div>
    </div>
      
    </>
  );
  
}
export default ProductServiesApp;