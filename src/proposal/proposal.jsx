import { dataProposal, dataProposal2 } from "../data/dataProposal";
import ProductProposal from "./productProposal";
import { useState,useEffect } from "react";
import '../style.css'
const Proposal = ()=>{
  const [isWideScreen,setIsWideScreen] = useState(false);
  const [isWideScreenTablet, setIsWideTablet] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth < 500);
      setIsWideTablet(window.innerWidth <= 900 && window.innerWidth > 500)
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
    return(
        <>
          <div className="title-proposal my-3">
            <h3>پیشنهاد دیجیکالا</h3>
          </div>
          <div className="proposal-main align-items-stretch"dir="rtl">
            <div className=" proposal1">
            {isWideScreen
                ? dataProposal.filter((item)=>item.id <= 3).map((item)=>{
                  return <ProductProposal key={item.id} product={item} />  
                }):dataProposal.map((item)=>{
                  return <ProductProposal key={item.id} product={item} />
                })
              }
            </div>
            <div className="proposal2"dir="rtl">
            {isWideScreen
                ? dataProposal2.filter((item)=>item.id <= 10).map((item)=>{
                  return <ProductProposal key={item.id} product={item} />  
                }):dataProposal2.map((item)=>{
                  return <ProductProposal key={item.id} product={item} />
                })
              }
            </div>
          </div>
        </>
    )
}
export default Proposal;