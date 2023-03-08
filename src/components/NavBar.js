import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from "react"
import ProductContext from '../store.js/product-context';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
};


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { cartItems, cartItemsLength, removeItem } = useContext(ProductContext)

    const removeItemHandler = (id) => {
        removeItem(id)
    }

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ m: 1 }} >
                        Start Bootstrap
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ m: 1 }} >
                        Home
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ m: 1 }} >
                        About
                    </Typography>
                    <Button variant="outlined" color="inherit" sx={{ ml: "auto" }} onClick={handleOpen}>
                        <ShoppingCartIcon /> Cart <span className="cart-total">{cartItemsLength}</span>
                    </Button>
                </Toolbar>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                className='cart-modal'
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Cart
                    </Typography>

                    {cartItemsLength === 0 &&
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            You have nothing in the cart
                        </Typography>
                    }
                    {cartItemsLength > 0 &&




                        cartItems.map(item => <Toolbar>
                            <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }} >
                                {item.title} - ${item.price.toFixed(2)}
                            </Typography>
                            <Button variant="" color="error" sx={{ ml: "auto" }} onClick={() => removeItemHandler(item.id)}>
                                <DeleteIcon color="error" />
                            </Button></Toolbar>)



                    }
                </Box>
            </Modal>
        </Box>

    )
}

export default Navbar