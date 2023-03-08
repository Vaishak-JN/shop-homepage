import ProductContext from "./product-context";
import { ProductsData } from "../PRODUCTS-DATA";
import { useEffect, useState } from "react";



const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState(ProductsData)
    // const [cartItems, setCartItems] = useState([])


    console.log("hi")



    const addItemToCartHandler = (id) => {
        const newProducts = products.map((product) => {
            if (id === product.id) {
                product.isAddedToCart = true
                return product
            } else {
                return product
            }
        });
        setProducts(newProducts)
        // setCartItems([...products.filter(p => p.isAddedToCart)])
        // products.filter(p => p.isAddedToCart)
    }


    const removeItemFromCartHandler = (id) => {
        const newProducts = products.map((product) => {
            if (id === product.id) {
                product.isAddedToCart = false
                return product
            } else {
                return product
            }
        });
        setProducts(newProducts)
    }

    const data = {
        products: products,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        cartItemsLength: products.filter(p => p.isAddedToCart).length,
        cartItems: products.filter(p => p.isAddedToCart)
    }

    // console.log(data)

    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider