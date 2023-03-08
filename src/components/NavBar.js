import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Navbar = () => {

    const [cartTotal, setCartTotal] = React.useState(0)

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
                    <Button color="inherit" sx={{ flexGrow: 1, justifyContent: 'flex-end' }} ><ShoppingCartIcon /> Cart <span className="cart-total">{cartTotal}</span></Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar