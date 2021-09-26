import React from 'react';
import { Typography, Container, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem.component';
import Navbar from '../Naavbar/Navbar.component';



const Cart = ({ cart, totalItem, handelUpdateCartQuantity, handelRemoveFromCart, handelEmptyCart }) => {

    const classes = useStyles();

    

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shoppinf cart, <Link to="/">start adding some!</Link> </Typography>
    );

    const FilledCart = () => (
        <>
           
            <Grid container spacing={3}>
                {
                    cart.line_items.map((item) => (
                        <Grid item xs={12} sm={3} key={item.id}>
                            <CartItem item={item} handelRemoveFromCart={handelRemoveFromCart} handelUpdateCartQuantity={handelUpdateCartQuantity} />
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handelEmptyCart}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading....';
    
    return (
        <>
        <Navbar totalItem={totalItem} />
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
        </>
    )
}

export default Cart
