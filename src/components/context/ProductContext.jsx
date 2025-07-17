import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext('')


export const ProductContextProvider = ({children}) => {

    const [showSearch , setShowSearch] = useState(false)
    const [search , setSearch] = useState('')
    const currency = '$'

    const [cartData , setCartData] = useState([])
    const [cartItem , setCartItem] = useState([])
    const [flag , setFlag] = useState(false)

    const AddToCart = ({id}) => {
        setCartData((prev) => [...prev , {id}])
    }

    const product = {
        showSearch,
        setShowSearch,
        search,
        setSearch,
        currency,
        AddToCart,
        cartData,
        cartItem,
        setCartItem,
        flag,
        setFlag
    }

    return(
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}


const useProduct = () => {
    return useContext(ProductContext)
}

export default useProduct