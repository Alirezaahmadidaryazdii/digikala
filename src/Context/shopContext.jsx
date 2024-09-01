import React, { createContext, useState } from "react";
import { dataProductDigikala, getProductData } from "../data/dataServies";
import { replaceAmount } from "../showProductShop/productShow";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState([])
    
    const plusToCard = (id) => {
        if(!cart.find((item)=>item.id === id))
        setCart([...cart, {id: id, count: 1}])
        else setCart(cart.map((item)=>{
            if(item.id === id){
                return {...item, count: item.count + 1}
            }else return item;
        }))
    }

    const removeCart = (id) => {
        setCart(cart.map((item)=>{
            if(item.id === id){
                return {...item, count: item.count===0?0:item.count -1}
            }else return item
        }))
    }
    const totalAmount = async () => {
        let total = 0;
    
        for (const item of cart) {
            try {
                const productData = await getProductData(item.id); // منتظر بمانید تا داده‌ها برگردند
                total += productData.price * item.count; // از قیمت محصول بازیابی شده استفاده کنید
            } catch (error) {
                console.error(`Error fetching product data for ID ${item.id}:`, error);
            }
        }
        // let data = JSON.parse(localStorage.getItem('recentProduct'))
        // let dataRate = JSON.parse(localStorage.getItem('rateCart'))
        // data?.foreach(item=>{
        //     dataRate.foreach(element=>{
        //         if(item.id === element.id){
        //             total += item.price * element.count
        //         }
        //     })
        // })
        return total;
    };
    
    const showCount = ()=>{
        let total = 0;
        cart?.map((item)=>{
            const count = getProductData(item.id);
            total += item.count;
        })
        // let dataRate = JSON.parse(localStorage.getItem('rateCart'))
        // dataRate?.map(item=>{
        //     const count = getProductData(item.id)
        //     total += item.count
        // })
        return total;
    }
    const resetItem = ()=>{
        setCart([]);
    }
    const contextValue = { cart, setCart, plusToCard, removeCart, totalAmount, resetItem, showCount, product, setProduct };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

