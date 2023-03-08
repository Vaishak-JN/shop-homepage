import { ProductsData } from "../PRODUCTS-DATA"
import ProductItem from "./ProducItem"

const Products = () => {
    return (
        <div className="product-grid">
            {ProductsData.map(product => <ProductItem {...product} key={product.id} />)}
        </div>
    )
}

export default Products