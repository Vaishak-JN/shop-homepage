
import { useContext } from "react"
import ProductContext from "../store.js/product-context"
import ProductItem from "./ProducItem"

const Products = () => {

    const { products } = useContext(ProductContext)

    return (
        <div className="product-grid">
            {products.map(product => <ProductItem key={product.id} {...product} />)}
        </div>
    )
}

export default Products