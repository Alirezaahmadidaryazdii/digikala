import { useEffect, useState } from "react";
import { fetchProductData } from "../data/dataServies";
import { useSearchParams } from "react-router-dom";
import Navbar from "../navbar";
import LinearProgress from "@mui/material/LinearProgress";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function PageProduct() {
  const [dataProductDigikala, setDataProductDigikala] = useState(null);
  const [loading, setLoading] = useState(true); // حالت لودینگ

  const [searchParams] = useSearchParams();
  const id = searchParams.get("p");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        const selectedProduct = data.find((item) => item.id === Number(id));
        setDataProductDigikala(selectedProduct);
      } catch (err) {
        console.log(err);
      } finally {
        // بعد از 2 ثانیه لودینگ را غیرفعال کن
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <LinearProgress sx={{ width: "100%" }} color="error" />
    );
  }

  const value = 3.5;

  if (!dataProductDigikala) {
    return <p>محصول یافت نشد</p>;
  }

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center m-auto" style={{ maxWidth: 500 }}>
        <img
          src={dataProductDigikala?.images[0]}
          alt=""
          style={{ width: "300px" }}
        />
        <h4 className="my-2">{dataProductDigikala?.title}</h4>
        <p className="text-muted small">{dataProductDigikala?.description}</p>
        <p>price: {dataProductDigikala?.price} $</p>
        <p>category: {dataProductDigikala?.category.name}</p>
        <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
      </div>
    </>
  );
}

export default PageProduct;
