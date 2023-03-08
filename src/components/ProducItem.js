import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from "react"
import ProductContext from "../store.js/product-context"


const ProductItem = ({ id, isAddedToCart, title, img, price, comparePrice, onSale, }) => {

    const { addItem } = useContext(ProductContext)

    const addToCartHandler = () => {

        addItem(id)

        window.scrollTo(0, 0);
        // console.log(id)
    }

    return (

        <Card sx={{ maxWidth: 345, pb: 1 }}>
            <CardMedia sx={{ height: 200 }} image={img} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    <span style={{ "textDecoration": "line-through", "color": "grey" }}>${(comparePrice).toFixed(2)}</span> ${price.toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button disabled={isAddedToCart} size="medium" variant="outlined" sx={{ mx: "auto", color: "black", borderColor: "black" }} onClick={addToCartHandler}>Add to Cart</Button>
            </CardActions>
        </Card>

    )
}

export default ProductItem