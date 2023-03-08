import ProductContext from "./product-context";
import { ProductsData } from "../PRODUCTS-DATA";
import { useEffect, useState } from "react";



const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState(ProductsData)


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


    }

    const data = {
        products: products,
        addItem: addItemToCartHandler,
        cartItems: products.filter(p => p.isAddedToCart).length
    }

    // console.log(data)

    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider