// ShowProduct.jsx
import React, { useContext } from 'react';
import { dataProductDigikala } from '../data/dataServies';
// owl curosel
import OwlCarousel from "react-owl-carousel";
import ShowProductComponent from './showProductComponentDigickala';
import Navbar from '../navbar';

// style
import '../style.css'
import { ShopContext } from '../Context/shopContext';

import { useState } from 'react';
const ShowProduct = () => { 

  return (
    <>
        <Navbar class="navbar-show-context" />
 
    <div className='row show-row'>
      {dataProductDigikala.map((item)=>{
        return <ShowProductComponent  itemProduct={item} />
      })}
    </div>


    </>
  );
};

export default ShowProduct;
