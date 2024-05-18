import "../style.css"
const CardGroup = ({ product }) => {
  return (
    <>
          <div className="col-lg-6">
            <img src={product.image} alt="" className="w-100 image-card-group mt-5" style={{borderRadius: "20px", margin: "5px"}}/>
          </div>
              </>
  );
};
export default CardGroup;
