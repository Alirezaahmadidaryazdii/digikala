import { useContext, useEffect, useRef, useState } from "react";
import shop from "../image/shop2.gif";
import { UserContex } from "../Context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faMapMarker,
  faPencilAlt,
  faPenToSquare,
  faStore,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./userComponent.css";
// yup packege
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { fetchProductData } from "../data/dataServies";

function ShopUser() {
  // mui state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // use context value in fetch api result
  const { user, setUser, compressImage } = useContext(UserContex);
  //   value is use ref in input for handle click in get file in api data storage
  const fileInputRef = useRef(null);
  //   use state for handle another projects
  const [selectedImage, setSelectedImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [createdProduct, setCreatedProduct] = useState([]);
  const [checkCategory, setCheckCategory] = useState("add");
  const [checkProduct, setCheckProduct] = useState("add");
  const [dataIdProduct, setDataIdProduct] = useState();
  const [dataProductDigikala, setDataProductDigikala] = useState([]);
  // const [showStateProduct, setShowStateProduct] = useState('add');
  //   use state input value storage
  const [inputCategories, setInputCategories] = useState("");

  // ////////////////

  // data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        setDataProductDigikala(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  // /////////////////
  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    let dataUser = JSON.parse(localStorage.getItem("user"));
    if (dataUser !== null) setUser(dataUser);
    if (user.role !== "admin") navigate("/user?part=profile");
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  //   const uniqueCategories = [...new Set(products.map(item => item.category.name))];

  const handleSubmitData = async (event) => {
    event.preventDefault();
  };

  //   yup
  let schema = yup.object().shape({
    value1: yup.string().required("لطفا فرم را پر کنید "),
    value2: yup.string().required("لطفا فرم را پر کنید "),
    value3: yup.number().required("لطفا فرم را پر کنید "),
    value4: yup.string().required("لطفا فرم را پر کنید "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = async (data) => {
    // نمایش داده‌های فرم
    console.log("Form submitted successfully with data:", data);

    // پیدا کردن آیدی دسته‌بندی بر اساس نام
    let resultCategoryId = products.find((item) => item.name === data.value4);

    if (checkProduct === "add") {
      const product = {
        title: data.value1,
        price: Number(data.value3),
        description: data.value2,
        categoryId: resultCategoryId.id,
        images: [
          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
        ],
      };

      setCreatedProduct((prevProducts) => [...prevProducts, product]);

      // استفاده از toast.promise برای نمایش وضعیت‌های مختلف
      toast
        .promise(
          fetch("https://api.escuelajs.co/api/v1/products/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }).then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          }),
          {
            loading: "در حال اضافه کردن محصول...",
            success: "محصول با موفقیت اضافه شد 👌",
            error: "اضافه کردن محصول با خطا مواجه شد 🤯",
          }
        )
        .then((result) => {
          console.log("Product added successfully:", result);

          // در صورت نیاز به بروزرسانی وضعیت کاربر یا UI
          // setUser((prevUser) => ({
          //   ...prevUser,
          //   products: [...(prevUser.products || []), result]
          // }));
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    } else {
      try {
        // شروع درخواست با نمایش لودینگ
        await toast.promise(
          fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => {
              if (!response.ok) {
                throw new Error(
                  "Network response was not ok " + response.statusText
                );
              }
              return response.json();
            })
            .then((dataRes) => {
              const foundItem = dataRes.find(
                (item) =>
                  item.title === data.value1 &&
                  item.price === data.value3 &&
                  item.category.name === data.value4
              );
              if (foundItem) {
                return fetch(
                  `https://api.escuelajs.co/api/v1/products/${foundItem.id}`,
                  {
                    method: "DELETE",
                  }
                );
              } else {
                throw new Error("آیتمی با مشخصات مورد نظر پیدا نشد");
              }
            })
            .then((response) => {
              if (!response.ok) {
                throw new Error(
                  "Network response was not ok " + response.statusText
                );
              }
              return response.json();
            }),
          {
            loading: "در حال انجام عملیات...",
            success: "محصول با موفقیت حذف شد!",
            error: (err) => `خطایی رخ داد: ${err.message}`,
          }
        );
      } catch (error) {
        console.error("There was a problem with the operation:", error);
        // همچنین می‌توانید از toast.error برای نمایش خطا استفاده کنید
        toast.error("مشکلی در عملیات وجود دارد: " + error.message);
      }
    }
  };

  const handleFetchSubmitCategories = async (event) => {
    event.preventDefault();

    if (checkCategory === "add") {
      let category = {
        name: inputCategories,
        image:
          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      };

      // استفاده از toast.promise برای نمایش وضعیت نوتیفیکیشن‌ها
      toast
        .promise(
          fetch("https://api.escuelajs.co/api/v1/categories/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
          }).then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          }),
          {
            loading: "در حال اضافه کردن دسته‌بندی...",
            success: "دسته‌بندی با موفقیت اضافه شد 👌",
            error: "اضافه کردن دسته‌بندی با خطا مواجه شد 🤯",
          }
        )
        .then((result) => {
          console.log("Product added successfully:", result);
        })
        .catch((error) => {
          console.error("Error adding category:", error);
        });
    } else {
      let resultCategoryId = products.find(
        (item) => item.name === inputCategories
      );
      if (resultCategoryId == null) {
        toast.error("همچین دسته‌ای وجود ندارد");
        return;
      }

      // استفاده از toast.promise برای نمایش وضعیت نوتیفیکیشن‌ها
      toast
        .promise(
          fetch(
            `https://api.escuelajs.co/api/v1/categories/${resultCategoryId.id}`,
            {
              method: "DELETE",
            }
          ).then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          }),
          {
            loading: "در حال حذف دسته‌بندی...",
            success: "دسته‌بندی با موفقیت حذف شد 👌",
            error: "حذف دسته‌بندی با خطا مواجه شد 🤯",
          }
        )
        .then((result) => {
          console.log("Category deleted successfully", result);
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    }
  };


  const handleDelete = async (item) => {
    try {
      await fetch(`https://api.escuelajs.co/api/v1/products/${item.id}`, {
        method: 'DELETE',
      });
      // به‌روزرسانی state پس از حذف محصول
      const updatedData = dataProductDigikala.filter(
        (product) => product.id !== item.id
      );
      setDataProductDigikala(updatedData);
  
      toast.success('با موفقیت محصول مورد نظر حذف شد');
    } catch (err) {
      console.log(err);
      toast.error('خطا در ارتباط با سرور');
    }
  };
  
  const handleEdit = (item)=>{
    navigate(`/user?part=edit&id=${item.id}`)
  }
  return (
    <>
      <p className="txt-show">محصولات</p>
      <img src={shop} className="img-show" alt="" />
      {createdProduct.length > 0 ? (
        createdProduct.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p className="text-muted">{item.price}</p>
            </div>
          );
        })
      ) : (
        <div className="d-flex justify-content-center my-4 gap-3">
          <FontAwesomeIcon
            icon={faStore}
            size="lg"
            style={{ fontSize: "30px", color: "red" }}
          />
          <h3>هیچ محصولی جدیدی اضافه نکردید</h3>
        </div>
      )}
      <div className="card rounded p-3 w-100 mt-5 px-5 mx-2">
        <div className="card-body">
          <h5 className="text-muted text-center mb-4">محصول جدید</h5>
          <ul className="list-inline text-center py-3 d-flex">
            <li className="list-inline-item">
              <div>
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="text-success mx-2"
                />
                <span className="h6 text-muted">وضعیت</span>
              </div>
            </li>
            <li className="list-inline-item px-2">
              <div onClick={handleClick}>
                <FontAwesomeIcon icon={faCamera} className="text-info mx-2" />
                <span className="h6 text-muted">تصویر</span>
              </div>
            </li>
            <input
              type="file"
              id="fileInput"
              className="d-none"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <li className="list-inline-item">
              <div>
                <FontAwesomeIcon
                  icon={faMapMarker}
                  className="text-danger mx-2"
                />
                <span className="h6 text-muted">مکان</span>
              </div>
            </li>
          </ul>
          <h5 className="d-flex">
            <button
              onClick={() => setCheckProduct("add")}
              className="text-decoration-none btn px-2 py-0"
            >
              افزودن
            </button>
          </h5>
          {selectedImage && (
            <div className="text-center my-3">
              <img
                src={selectedImage}
                alt="Selected"
                className="img-thumbnail mt-3"
              />
            </div>
          )}
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control py-2 mb-3"
                placeholder="نام محصول"
                {...register("value1")}
              />
              {errors.value1 && (
                <p className="text-danger small">{errors.value1.message}</p>
              )}

              <input
                type="text"
                className="form-control py-2 mb-3"
                placeholder="توضیحات محصول"
                {...register("value2")}
              />
              {errors.value2 && (
                <p className="text-danger small">{errors.value2.message}</p>
              )}

              <input
                type="number"
                className="form-control py-2 mb-3"
                placeholder="قیمت محصول"
                {...register("value3")}
              />
              {errors.value3 && (
                <p className="text-danger small">{errors.value3.message}</p>
              )}

              <select className="form-select mb-3 py-2" {...register("value4")}>
                <option value="">دسته</option>
                {products.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              {errors.value4 && (
                <p className="text-danger small">{errors.value4.message}</p>
              )}

              <button
                type="submit"
                className="btn btn-block text-light bg-info py-2 mb-5 w-100"
              >
                {checkProduct === "add" ? "افزودن" : "حذف"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="card rounded p-3 w-100 mt-5 px-5 mx-2">
        <div className="card-body">
          <h5 className="text-muted text-center mb-4">دسته ها</h5>
          <h5 className="d-flex">
            <button
              onClick={() => setCheckCategory("add")}
              className="text-decoration-none btn px-2 py-0"
            >
              افزودن
            </button>
            |
            <button
              onClick={() => setCheckCategory("remove")}
              className="text-decoration-none btn px-2 py-0"
            >
              حذف
            </button>
          </h5>
          <form onSubmit={(e) => handleFetchSubmitCategories(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control py-2 mb-3"
                placeholder="نام دسته"
                onChange={(e) => setInputCategories(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-block text-light bg-info py-2 mb-5 w-100"
              >
                {checkCategory === "add" ? "افزودن دسته" : "حذف دسته"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="txt-show mt-5">حذف محصولات</p>
      <div style={{maxHeight: '300px', overflowY: 'auto', overflowX:'hidden'}} className="my-2 p-3">
      <table class="table table-dark table-striped mx-2 my-2">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {dataProductDigikala.map((item, index)=>{
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <th scope="row">{item.title}</th>
                <th scope="row">{item.category.name}</th>
                <th scope="row">{item.price}</th>
                <th scope="row">
                <FontAwesomeIcon icon={faTrash} className="text-danger mx-3" onClick={()=>handleDelete(item)} />
                <FontAwesomeIcon icon={faPenToSquare} className="text-danger" onClick={()=>handleEdit(item)} />
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default ShopUser;
