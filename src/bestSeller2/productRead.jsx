const ProductRead = ({ product }) => {
  return (
    <>
      <div className="col-6 m-auto col-lg-3 col-md-5 col-sm-6 col-read">
        <div className="card-read w-100 m-2"dir="rtl">
                    <img src={product.image} alt=""className="w-100 card-title img-read" />
                <div className="read-footer bg-white mx-2">
                    <p id="text-read">{product.title}</p>
                </div>
            </div>
      </div>
    </>
  );
};
export default ProductRead;
