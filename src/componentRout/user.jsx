
import { useContext, useEffect, useState } from "react";
import { UserContex } from "../Context/userContext";
import Sidebar from "../userComponentsRouts/sidebar";
import ShopUser from "../userComponentsRouts/shopUser";
import { useLocation } from "react-router-dom";
import ProfileUser from "../userComponentsRouts/profileUser";
import Storage from "../userComponentsRouts/storage";
import LinearProgress from "@mui/material/LinearProgress"; // Import LinearProgress
import EditProduct from "../userComponentsRouts/editProduct";

function User() {
  const [content, setContent] = useState();
  const { user, setUser } = useContext(UserContex);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const part = queryParams.get("part");
  const productId = queryParams.get('id')
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    setLoading(true); // Start loading when part changes
    let newContent;
    if (part === "product") newContent = <ShopUser />;
    else if(part === "edit") newContent = <EditProduct />
    else if (part === "profile") newContent = <ProfileUser />;
    else if (part === "storage") newContent = <Storage />;

    setTimeout(() => {
      setContent(newContent);
      setLoading(false); // Stop loading after content is ready
    }, 500); // Adjust this delay as needed

  }, [part, productId]);

  useEffect(() => {
    let dataUser = JSON.parse(localStorage.getItem("user"));
    if (dataUser !== null) setUser(dataUser);
  }, []);


  return (
    <div dir="rtl">
      <Sidebar />
      <div className="row mt-5">
        <div className="col-lg-10" style={{ marginRight: "auto" }}>
          {loading ? <LinearProgress sx={{ width: "100%" }} color="error" /> : content}
        </div>
      </div>
    </div>
  );
}

export default User;


