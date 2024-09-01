import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/shopContext";
import { getProductData } from "../data/dataServies";

// const replaceAmount = (input) => {
//   if (input.id === 1) return 699000;
//   else if (input.id == 2) return 9499000;
//   else if (input.id == 3) return 9499000;
//   else if (input.id == 4) return 9280000;
//   else if (input.id == 5) return 40889000;
//   else if (input.id == 6) return 21099000;
//   else if (input.id == 7) return 695000;
//   else if (input.id == 8) return 29900;
//   else if (input.id == 9) return 8250000;
//   else return null;
// };
const ProductShow = ({ element, count, id }) => {
  //   const { cart } = useContext(ShopContext);
  // const productData = getProductData(id);
  const [productData, setProductData] = useState([])

  useEffect(() => {
    // Function to fetch product data by ID
    const fetchProduct = async () => {
      try {
        const data = await getProductData(id);
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]);
  return (
    <div >
      {count > 0 && (
        <div className="p-3"id="carti">
          <p>آیدی: {productData.id}</p>
          <p>تعداد: {Number(count).toLocaleString("fa")}</p>
          <p>قیمت: {productData.price * count} $ </p>
        </div>
      )}
    </div>
  );
};

export {  ProductShow  };
