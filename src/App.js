import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Resualt from "./resualt";

import Login from "./componentRout/login";
import ShowProduct from "./componentRout/showProductDigikala";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Resualt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ShowProduct />} />
        </Routes>
      </Router>

      {/* <Navbar />
      <Person />
      <Servies />
      <Incredible />
      <GroupShop />
      <Proposal />
      <Popular />
      <Cover />
      <Digiplus />
      <DigiClub />
      <Cover2 />
      <BestSell />
      <Selecte />
      <BestSell2 />
      <Footer />
       */}
    </>
  );
}

export default App;
