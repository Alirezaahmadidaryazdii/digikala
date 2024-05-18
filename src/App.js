import { BrowserRouter as Router, Route, Routes, Navigate  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Resualt from "./resualt";

import Login from "./componentRout/login";
import ShowProduct from "./componentRout/showProductDigikala";

// context import
import {ShopContextProvider} from "./Context/shopContext";
import Show from "./showProductShop/show";
import error404 from "./error/404";

function App() {
  return (
    <>
    <ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Resualt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ShowProduct />} />
          <Route path="/show-shop" element={<Show />} />
          <Route path="*" element={<error404 />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
