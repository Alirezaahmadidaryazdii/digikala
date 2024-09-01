import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProductData } from "../data/dataServies";
import toast from "react-hot-toast";

function EditProduct() {
  // Form state
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  // Data state
  const [dataProductDigikala, setDataProductDigikala] = useState([]);
  const [selectItemProduct, setSelectItemProduct] = useState(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productId = query.get("id");
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        setDataProductDigikala(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [navigate, productId]);

  useEffect(() => {
    if (dataProductDigikala.length > 0 && productId) {
      const selected = dataProductDigikala.find(
        (item) => item.id === Number(productId)
      );
      if (selected) {
        setSelectItemProduct(selected);
        setNameProduct(selected.title);
        setPriceProduct(selected.price);
        setDescriptionProduct(selected.description);
      }
    }
  }, [dataProductDigikala, productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updatedProduct = {
      title: nameProduct,
      description: descriptionProduct,
      price: priceProduct,
    };
  
    // Start the toast promise with a loading message
    toast.promise(
      fetch(`https://api.escuelajs.co/api/v1/products/${selectItemProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to update product');
        }
        const result = await response.json();
        return result; // Resolve with the result
      }),
      {
        loading: 'Updating product...',
        success: 'Product updated successfully!',
        error: (error) => `Error updating product: ${error.message}`,
      }
    ).then(() => {
      navigate('/user?part=product'); // Redirect after successful update
    });
  };
  

  return (
    <form onSubmit={handleSubmit} className="mx-2" dir="ltr">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Title product:</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter title"
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPrice">Price</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPrice"
          placeholder="Enter price"
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Description</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={descriptionProduct}
          onChange={(e) => setDescriptionProduct(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
}

export default EditProduct;
