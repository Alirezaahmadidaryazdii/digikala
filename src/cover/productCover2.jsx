import card1 from '../image/cardOther1.jpg';
import card2 from '../image/cardOther2.jpg';
import card3 from '../image/cardOther3.jpg';
import card4 from '../image/cardOther4.jpg';
import card5 from '../image/cardOther5.jpg';
import card6 from '../image/cardOther6.jpg';
import card7 from '../image/cardOther7.jpg';
import card8 from '../image/cardOther8.jpg';
import card9 from '../image/cardOther9.jpg';
import card10 from '../image/cardOther10.jpg';
import card11 from '../image/cardOther11.jpg';
import card12 from '../image/cardOther12.jpg';
import card13 from '../image/cardOther13.jpg';
import card14 from '../image/cardOther14.jpg';
import card15 from '../image/cardOther15.jpg';
import card16 from '../image/cardOther16.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
const ProductCover2 = ()=>{

    return(
        <>
          <div className="container-fluid">
          <div className="row rowCard"dir='rtl'>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="cards w-100">
                <div className="card-header">
                    <h6 className='text-sm'> سایر لوازم خودرو</h6>
                    <p className='paragraf-cover'>بر اساس بازدید های شما</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6"><img src={card1}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-6"><img src={card2}className='w-100 m-3' alt="" /></div>
                        <div className="col-6"><img src={card3}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-6"><img src={card4}className='w-100 m-3' alt="" /></div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center"dir='ltr' >
                    <FontAwesomeIcon icon={ faAngleUp} rotation={270}className='mt-1' />
                    <p>  مشاهده</p>
                </div>
                
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="cards w-100">
                <div className="card-header">
                    <h6 className='text-sm'> لپتاپ و الترابوک</h6>
                    <p className='paragraf-cover'>بر اساس بازدید های شما</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6"><img src={card5}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-6"><img src={card6}className='w-100 m-3' alt="" /></div>
                        <div className="col-6"><img src={card7}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-6"><img src={card8}className='w-100 m-3' alt="" /></div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center"dir="ltr">
                    <FontAwesomeIcon icon={ faAngleUp} rotation={270} className='mt-1'/>
                    <p> مشاهده</p>
                </div>
                
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="cards w-100">
                <div className="card-header">
                    <h6 className='text-sm'>  آشنایی با فنون </h6>
                    <p className='paragraf-cover'>بر اساس بازدید های شما</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6"><img src={card9}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-6"><img src={card10}className='w-100 m-3' alt="" /></div>
                        <div className="col-6"><img src={card11}className='w-100 m-3 image1 ' alt="" /></div>
                        <div className="col-6"><img src={card12}className='w-100 m-3 ' alt="" /></div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center"dir="ltr">
                    <FontAwesomeIcon icon={ faAngleUp} rotation={270} className='mt-1'/>
                    <p> مشاهده</p>
                </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="cardsr p-3 w-100">
                <div className="card-header">
                    <h6 className='text-sm'> مکمل دارویی</h6>
                    <p className='paragraf-cover'>بر اساس بازدید های شما</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6"><img src={card13}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-6"><img src={card14}className='w-100 m-3' alt="" /></div>
                        <div className="col-6"><img src={card15}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-6"><img src={card16}className='w-100 m-3' alt="" /></div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center"dir="ltr">
                    <FontAwesomeIcon icon={ faAngleUp} rotation={270} className='mt-1'/>
                    <p> مشاهده</p>
                </div>
            </div>
          </div>
          </div>
          </div>
        </>
    )
}
export default ProductCover2;