import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const showAlertError = ()=>{

    return(
      <>
        <div className="alertError">
          <p className="alert-error-text">همه موارد به سطل زباله انتقال یافت</p>
          <FontAwesomeIcon icon={faTrash} className="w-100"/>
        </div>
      </>
    )
  }

  export default showAlertError;