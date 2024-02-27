import cover1 from '../image/coverMobile1.jpg';
import cover2 from '../image/coverMobile2.jpg';
import cover3 from '../image/coverMobile3.jpg';
import cover4 from '../image/coverMobile4.jpg';
import bag1 from '../image/bagMobile1.jpg';
import bag2 from '../image/bagMobile2.jpg';
import bag3 from '../image/bagMobile3.jpg';
import bag4 from '../image/bagMobile4.jpg';
import headphon1 from '../image/headphone1.jpg';
import headphon2 from '../image/headphone2.jpg';
import headphon3 from '../image/headphone3.jpg';
import headphon4 from '../image/headphone4.jpg';
import watch1 from '../image/watch1.jpg';
import watch2 from '../image/watch2.jpg';
import watch3 from '../image/watch3.jpg';
import watch4 from '../image/watch4.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
const ProductCover = ()=>{

    return(
        <>
          <div className="container-fluid">
          <div className="row rowCard"dir='rtl'>
          <div className="col-lg-3 col-md-12">
            <div className="cards w-100">
                <div className="card-header">
                    <h6 className='text-sm'>گوشی موبایل</h6>
                    <p className='paragraf-cover'>بر اساس بازدید های شما</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 "><img src={cover1}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-sm-6"><img src={cover2}className='w-100 m-3' alt="" /></div>
                        <div className="col-sm-6"><img src={cover3}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-sm-6"><img src={cover4}className='w-100 m-3' alt="" /></div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center"dir='ltr' >
                    <FontAwesomeIcon icon={ faAngleUp} rotation={270}className='mt-1' />
                    <p>  مشاهده</p>
                </div>
                
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="cards w-100">
                <div className="card-header">
                    <h6 className='text-sm'>کیف و کاور گوشی</h6>
                    <p className='paragraf-cover'>بر اساس بازدید های شما</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 "><img src={bag1}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-sm-6"><img src={bag2}className='w-100 m-3' alt="" /></div>
                        <div className="col-sm-6"><img src={bag3}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-sm-6"><img src={bag4}className='w-100 m-3' alt="" /></div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center"dir="ltr">
                    <FontAwesomeIcon icon={ faAngleUp} rotation={270} className='mt-1'/>
                    <p> مشاهده</p>
                </div>
                
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="cards w-100">
                <div className="card-header">
                    <h6 className='text-sm'>هدفون هدست و هندزفری</h6>
                    <p className='paragraf-cover'>بر اساس بازدید های شما</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 "><img src={headphon1}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-sm-6"><img src={headphon2}className='w-100 m-3' alt="" /></div>
                        <div className="col-sm-6"><img src={headphon3}className='w-100 m-3 image1 ' alt="" /></div>
                        <div className="col-sm-6"><img src={headphon4}className='w-100 m-3 ' alt="" /></div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center"dir="ltr">
                    <FontAwesomeIcon icon={ faAngleUp} rotation={270} className='mt-1'/>
                    <p> مشاهده</p>
                </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="cardsr p-3 w-100">
                <div className="card-header">
                    <h6 className='text-sm'>ساعت هوشمند</h6>
                    <p className='paragraf-cover'>بر اساس بازدید های شما</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 "><img src={watch1}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-sm-6"><img src={watch2}className='w-100 m-3' alt="" /></div>
                        <div className="col-sm-6"><img src={watch3}className='w-100 m-3 image1' alt="" /></div>
                        <div className="col-sm-6"><img src={watch4}className='w-100 m-3' alt="" /></div>
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
export default ProductCover;