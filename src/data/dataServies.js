import App1 from '../image/digikalaApp1.png';
import App2 from '../image/digikalaApp2.png';
import App3 from '../image/digikalaApp3.png';
import App4 from '../image/digikalaApp4.png';
import App5 from '../image/digikalaApp5.png';
import App6 from '../image/digikalaApp6.png';

//productDigicala imported
import productDigikala1 from '../image/productDigikala1.webp'
import productDigikala2 from '../image/productDigikala2.webp'
import productDigikala3 from '../image/productDigikala3.webp'
import productDigikala4 from '../image/productDigikala4.webp'
import productDigikala5 from '../image/productDigikala5.webp'
import productDigikala6 from '../image/productDigikala6.webp'
import productDigikala7 from '../image/productDigikala7.webp'
import productDigikala8 from '../image/productDigikala8.webp'
import productDigikala9 from '../image/productDigikala9.webp'
const dataServies = [
    {
        id:1,
        image: App1,
        title:"دیجیکالا جت"
    },
    {
        id:2,
        image: App2,
        title:"دریافت وام"
    },
    {
        id:3,
        image: App3,
        title:"حراج استایل"
    },
    {
        id:4,
        image: App4,
        title:"کالا برگ الکترونیکی"
    },
    {
        id:5,
        image: App5,
        title:"هر خرید یک شانس"
    },
    {
        id:6,
        image: App6,
        title:"پیش بینی بزرگ"
    },
]
const dataProductDigikala = [
    {
        id: 1,
        image: productDigikala1,
        price:"۶۹۹۰۰۰",
        rebate: "۹%",
        discount: "۷۶۵۰۰۰"
    },
    {
        id: 2,
        image: productDigikala2,
        price:"۹۴۹۹۰۰۰",
        rebate: "۵%",
        discount: "۹۹۹۹۰۰۰"
    },
    {
        id: 3,
        image: productDigikala3,
        price:"۱۵,۵۹۵,۰۰۰",
        rebate: "3%",
        discount: "۱۶,۱۴۹,۰۰۰"
    },
    {
        id: 4,
        image: productDigikala4,
        price:"۹,۲۸۰,۰۰۰",
        rebate: "3%",
        discount: "۹,۵۶۹,۰۰۰"
    },
    {
        id: 5,
        image: productDigikala5,
        price:"۴۰,۸۸۹,۰۰۰",
        rebate: "۶%",
        discount: "۴۳,۲۸۹,۰۰۰"
    },
    {
        id: 6,
        image: productDigikala6,
        price:"۲۱,۰۹۹,۰۰۰",
        rebate: "۴%",
        discount: "۲۱,۸۹۹,۰۰۰"
    },
    {
        id: 7,
        image: productDigikala7,
        price:"۶۹۵,۰۰۰",
        rebate: "۴۹%",
        discount: "۱,۳۶۰,۰۰۰"
    },
    {
        id: 8,
        image: productDigikala8,
        price:"۲۹,۹۰۰",
        rebate: "۴۰%",
        discount: "۵۰,۰۰۰"
    },
    {
        id: 9,
        image: productDigikala9,
        price:"۸,۲۵۰,۰۰۰",
        rebate: "۵%",
        discount: "۸,۷۰۰,۰۰۰"
    },
]
function getProductData(id){
    let productData = dataProductDigikala.find((product)=> product.id === id)
    return productData
}

export {dataServies, dataProductDigikala,getProductData}