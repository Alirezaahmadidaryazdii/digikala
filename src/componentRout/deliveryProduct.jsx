import Navbar from "../navbar";
// MUI imports
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LinearProgress from "@mui/material/LinearProgress";

import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

// mui import
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { UserContex } from "../Context/userContext";
import { ShopContext } from "../Context/shopContext";
import { useNavigate } from "react-router-dom";

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};




function DeliveryProduct() {
  const options = ["پرداخت درب منزل", "پرداخت با کارت بانکی اینترنی"];
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true); // برای کنترل لودینگ
  
  const {setCart} = useContext(ShopContext)

  const navigate = useNavigate()
  const toastSucces = () => {
    toast.success("با موفقیت خریداری شد");
    setCart([])
    navigate('/')
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // تنظیم زمان لودینگ

    return () => clearTimeout(timer); // پاکسازی تایمر هنگام خروج از کامپوننت
  }, []);

  if (loading) {
    return <LinearProgress sx={{ width: "100%" }} color="secondary" />;
  }

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column container mx-auto" dir="rtl">
        <p className="txt-show">پرداخت محصول</p>
        <div className="pardakht d-flex mt-5 justify-content-center align-items-center">
          <h4 className="mx-3">روش پرداخت:</h4>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Controllable" />
            )}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <h4 className="mx-3">زمان تحویل محصول:</h4>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <h4 className="mx-3">از خریدتان راضی بودید؟</h4>
          <StyledRating
          dir="ltr"
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
          />
        </div>
      </div>
      <button
        className="btn btn-danger d-flex justify-content-center align-items-center mx-auto mt-3 p-2"
        onClick={toastSucces}
      >
        تایید و تکمیل خرید
      </button>
    </>
  );
}

export default DeliveryProduct;
