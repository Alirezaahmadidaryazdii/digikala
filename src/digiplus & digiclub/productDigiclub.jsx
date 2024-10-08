import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDharmachakra, faPenToSquare, faGift} from "@fortawesome/free-solid-svg-icons";
import digiclub from '../image/digiclub-logo-white.svg';
import digiclub1 from '../image/digiclub1.webp';
import digiclub2 from '../image/digiclub2.webp';
import digiclub3 from '../image/digiclub3.webp';
import '../style.css';
const ProductDigiClub = ()=>{
    return(
        <>
          <div className="main-digiclub m-3 mt-4">
            <div className="riht m-3 p-3">
                <img src={digiclub} alt="" />
            </div>
            <div className="row left d-flex digiclub-main p-5">
                <div className="col-1 col-md-6  col-lg-4 m-auto digiclub-card bg-white m-3 p-3 d-flex photo-digi ">
                    <FontAwesomeIcon icon={faDharmachakra} className="m-1 mt-1 icon-digiclub" />
                    <p>چرخ و بخت </p>
                    <img src={digiclub1} alt=""className="image-digiclub"/>
                </div>
                <div className="col-1  col-md-6 col-lg-4 m-auto digiclub-card bg-white m-3 p-3 d-flex photo-digi">
                    <FontAwesomeIcon icon={faPenToSquare} className="m-1 mt-1 icon-digiclub" />
                    <p>ماموریت ها</p>
                    <img src={digiclub2} alt=""className="image-digiclub" />
                </div>
                <div className="col-6  col-md-6 col-lg-4  m-auto digiclub-card bg-white m-3 p-3 d-flex photo-digi">
                    <FontAwesomeIcon icon={faGift}className="m-1 mt-1 icon-digiclub" />
                    <p>جایزه ها</p>
                    <img src={digiclub3} alt="" className="image-digiclub"/>
                </div>
            </div>
          </div>
        </>
    )

}
export default ProductDigiClub;