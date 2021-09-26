import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product.component';
import Navbar from '../Naavbar/Navbar.component';
import useStyles from './styles';

function Products({products, onAddToCart, totalItem}) {

    const classes = useStyles();


    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Navbar totalItem={totalItem} />
            <Grid container justify="center" spacing={4}>
                {
                    products.map(product => (
                        <Grid type="item" key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
        
    )
}

export default Products
