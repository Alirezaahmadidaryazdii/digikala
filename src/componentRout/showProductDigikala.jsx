import React, { useContext, useEffect, useState } from "react";
import { dataProductDigikala } from "../data/dataServies";
import OwlCarousel from "react-owl-carousel";
import ShowProductComponent from "./showProductComponentDigickala";
import Navbar from "../navbar";
// mui import
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// bootstrap
import { Dropdown } from "react-bootstrap";
// style
import "../style.css";
import { ShopContext } from "../Context/shopContext";
import CircularProgress from "@mui/material/CircularProgress"; // لودینگ دایره‌ای MUI
import { LinearProgress } from "@mui/material";

const ShowProduct = () => {
  const [categorysProduct, setCategorysProduct] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataResult, setDataResult] = useState([]);
  const [loading, setLoading] = useState(true); // حالت لودینگ

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setDataProduct(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategorysProduct(data))
      .catch((error) => console.error("Error fetching products:", error));

    // شبیه‌سازی زمان بارگذاری و غیرفعال کردن لودینگ بعد از ۲ ثانیه
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [ratePrice, setRatePrice] = useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeRatePrice = (event) => {
    setRatePrice(event.target.value);
  };

  useEffect(() => {
    let filteredData = dataProduct;

    if (category) {
      filteredData = filteredData.filter(
        (item) => item.category.name === category
      );
    }

    if (price) {
      filteredData = filteredData.filter((item) => item.price === price);
    }

    if (ratePrice) {
      const matchBefore = ratePrice.match(/(\d+)-/);
      const matchAfter = ratePrice.match(/-(\d+)/);
      if (matchBefore && matchAfter) {
        const minPrice = Number(matchBefore[1]);
        const maxPrice = Number(matchAfter[1]);
        filteredData = filteredData.filter(
          (item) => item.price > minPrice && item.price < maxPrice
        );
      }
    }

    let uniqueData = filteredData.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) => t.id === item.id && t.category.name === item.category.name
        )
    );

    setDataResult(uniqueData);
  }, [category, price, ratePrice, dataProduct]);

  if (loading) {
    return (
      <LinearProgress sx={{ width: "100%" }} color="error" />
    );
  }

  return (
    <>
      <Navbar class="navbar-show-context" />
      <div className="d-flex gap-5 mx-1">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChangeCategory}
          >
            {categorysProduct.map((item, index) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            label="Price"
            onChange={handleChangePrice}
          >
            <MenuItem value={10}>10$</MenuItem>
            <MenuItem value={20}>20$</MenuItem>
            <MenuItem value={40}>40$</MenuItem>
            <MenuItem value={60}>60$</MenuItem>
            <MenuItem value={80}>80$</MenuItem>
            <MenuItem value={100}>100$</MenuItem>
            <MenuItem value={120}>120$</MenuItem>
            <MenuItem value={140}>140$</MenuItem>
            <MenuItem value={160}>160$</MenuItem>
            <MenuItem value={180}>180$</MenuItem>
            <MenuItem value={200}>200$</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Rate Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ratePrice}
            label="Rate Price"
            onChange={handleChangeRatePrice}
          >
            <MenuItem value={"10-50"}>10$ in 50$</MenuItem>
            <MenuItem value={"50-70"}>50$ in 70$</MenuItem>
            <MenuItem value={"70-100"}>70$ in 100$</MenuItem>
            <MenuItem value={"100-150"}>100$ in 150$</MenuItem>
            <MenuItem value={"150-200"}>150$ in 200$</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="row show-row">
        {dataResult.length > 0
          ? dataResult.map((item, index) => {
              if (index < 20) {
                return (
                  <ShowProductComponent key={item.id} itemProduct={item} />
                );
              }
              return null;
            })
          : dataProduct
              .slice(0, 20)
              .map((item, index) => (
                <ShowProductComponent key={item.id} itemProduct={item} />
              ))}
      </div>
    </>
  );
};

export default ShowProduct;
