import React, { createContext, useState } from "react";
import { dataProductDigikala, getProductData } from "../data/dataServies";
import { replaceAmount } from "../showProductShop/productShow";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    
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
    const totalAmount = ()=>{
        let total = 0;
        cart.map((item)=>{
            const count = getProductData(item.id);
            total += replaceAmount(item) * item.count;
        })
        return total;
    }
    const showCount = ()=>{
        let total = 0;
        cart.map((item)=>{
            const count = getProductData(item.id);
            total += item.count;
        })
        return total;
    }
    const resetItem = ()=>{
        setCart([]);
    }
    const contextValue = { cart, plusToCard, removeCart, totalAmount, resetItem, showCount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

