
import { useContext } from "react"
import ProductContext from "../store.js/product-context"
import ProductItem from "./ProducItem"

const Products = () => {

    const { products, addItem } = useContext(ProductContext)
    console.log("products")

    return (
        <div className="product-grid">
            {products.map(product => <ProductItem key={product.id} {...product} onAddItem={addItem} />)}
        </div>
    )
}

export default Products