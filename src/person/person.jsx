import {dataBannerPerson, dataPerson} from '../data/dataPerson';
import PeroductPerson from './productPerson';
import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BannerPerson from './bannerPerson';
import '../style.css';

const Person = () => {
  const options = {
    items: 10,
    margin: 4,
    loop: false,
    autoplay: false,
    nav:false,
    rtl:true,
    dots:false,
    responsive:{
      1204:{
        items: 8
      },
      767:{
        items: 8
      },
      300:{
        items:4
      }
    }
  }
  const optionsBanner = {
    items: 1,
    loop:true,
    autoplay:true,
    dots:false,
    rtl:true,
  }
  
  return (
    <div id='person'>
       <OwlCarousel className="owl-theme " {...options}>
        {dataPerson.map((item)=>(
          <PeroductPerson product={item} key={item.id}  />
        ))}
          </OwlCarousel>
          <OwlCarousel className='owl-theme' {...optionsBanner}>
            {dataBannerPerson.map((item)=>{
              return <BannerPerson key={item.id} productBanner={item}  />
            })}
          </OwlCarousel>
    </div>
  );
};

export default Person;