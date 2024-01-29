import {useContext, createContext, useState, useEffect} from 'react'

const CartContext = createContext();


export const CartProvider = ({children})=>{


    const localCart = localStorage.getItem("chichiscart") ? JSON.parse(localStorage.getItem("chichiscart")): []
    const localUser = localStorage.getItem("ecommuser") ? JSON.parse(localStorage.getItem("ecommuser")): []

    const [cart, setCart] = useState(localCart);
    const [user, setUser] = useState(localUser);


    console.log("user", user);

    useEffect(()=>{

        localStorage.setItem("chichiscart", JSON.stringify(cart))
        localStorage.setItem("ecommuser", JSON.stringify(user))

    },[cart])
    return (
        <CartContext.Provider value={{cart, setCart, user, setUser}}>

            {children}

        </CartContext.Provider>
    )
}

export const useCartContext = ()=> useContext(CartContext)

