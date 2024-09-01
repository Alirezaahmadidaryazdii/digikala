import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Resualt from './resualt';

import Login from './componentRout/login';
import ShowProduct from './componentRout/showProductDigikala';

// context import
import { ShopContextProvider } from './Context/shopContext';
import { UserContexProvider } from './Context/userContext';

// 
import Show from './showProductShop/show';
import Error404 from './error/404'; // نام کامپوننت باید با حرف بزرگ شروع شود
import User from './componentRout/user';

import { Toaster } from 'react-hot-toast';
import Search from './componentRout/search';
import PageProduct from './componentRout/pageProduct';
import DeliveryProduct from './componentRout/deliveryProduct';
import EditProduct from './userComponentsRouts/editProduct';

function App() {
  return (
    <>
      <Toaster />
      <UserContexProvider>
        <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Resualt />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<ShowProduct />} />
            <Route path="/show-shop" element={<Show />} />
            <Route path="/user" element={<User />} />
            <Route path="/searchResult" element={<Search />} />
            <Route path="/pageProduct" element={<PageProduct />} />
            <Route path="/delivery" element={<DeliveryProduct />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </ShopContextProvider>
      </UserContexProvider>
    </>
  );
}

export default App;
