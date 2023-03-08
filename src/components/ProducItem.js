import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductItem = ({ id, isAddedToCart, title, img, price, comparePrice, onSale, }) => {
    return (

        <Card sx={{ maxWidth: 345, pb: 1 }}>
            <CardMedia sx={{ height: 200 }} image={img} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    <span style={{ "text-decoration": "line-through", "color": "grey" }}>${(comparePrice).toFixed(2)}</span> ${price.toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" variant="outlined" sx={{ mx: "auto", color: "black", borderColor: "black" }} onClick={() => console.log("click")}>Add to Cart</Button>
            </CardActions>
        </Card>

    )
}

export default ProductItem