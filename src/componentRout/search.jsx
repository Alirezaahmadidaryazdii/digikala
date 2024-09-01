import React, { useEffect, useState } from 'react';
import ShowProductComponent from './showProductComponentDigickala';
import { fetchProductData } from '../data/dataServies';
import Navbar from '../navbar';
import CircularProgress from '@mui/material/CircularProgress'; // لودینگ دایره‌ای از MUI
import { LinearProgress } from '@mui/material';

function MyComponent() {
  const [dataProductDigikala, setDataProductDigikala] = useState([]);
  const [query, setQuery] = useState('');
  const [matchingItems, setMatchingItems] = useState([]);
  const [loading, setLoading] = useState(true); // اضافه کردن حالت لودینگ

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryParam = queryParams.get('q');
    setQuery(queryParam);

    const fetchData = async () => {
      try {
        const data = await fetchProductData(); // فرض کنید fetchProductData داده‌ها را برمی‌گرداند
        setDataProductDigikala(data);
        setLoading(false); // غیر فعال کردن لودینگ بعد از دریافت داده‌ها
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // در صورت وقوع خطا هم لودینگ را غیرفعال کنید
      }
    };

    // شبیه‌سازی زمان بارگذاری و غیرفعال کردن لودینگ بعد از ۲ ثانیه
    setTimeout(() => {
      fetchData();
    }, 500);
  }, []);

  useEffect(() => {
    const results = dataProductDigikala.filter(item => {
      console.log(item.title, query)
      const itemTitle = item.title.toLowerCase();
      const searchQuery = query?.toLowerCase() || ''; // جستجو بدون حساسیت به حروف
      return itemTitle.includes(searchQuery);
    });
    setMatchingItems(results);
  }, [dataProductDigikala, query]);

  if (loading) {
    return (
      <LinearProgress sx={{ width: "100%" }} color="error" />
    );
  }

  return (
    <>
      <Navbar />
      <h3 className='m-2 p-3'>Search Results:</h3>
      <div className='row d-flex justify-content-center align-items-center m-auto'>
        {matchingItems?.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <ShowProductComponent itemProduct={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MyComponent;
