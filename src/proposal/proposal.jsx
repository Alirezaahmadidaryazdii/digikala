import { dataProposal, dataProposal2 } from "../data/dataProposal";
import ProductProposal from "./productProposal";
import '../style.css'
const Proposal = ()=>{
    return(
        <>
          <div className="title-proposal my-3">
            <h3>پیشنهاد دیجیکالا</h3>
          </div>
          <div className="proposal-main align-items-stretch"dir="rtl">
            <div className=" proposal1">
                {dataProposal.map((item)=>{
                    return <ProductProposal key={item.id} product={item} />
                })}
            </div>
            <div className="proposal2"dir="rtl">
                {dataProposal2.map((item)=>{
                    return <ProductProposal key={item.id} product={item} />
                })}
            </div>
          </div>
        </>
    )
}
export default Proposal;