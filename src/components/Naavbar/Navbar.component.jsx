import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assests/commerce.png';
import useStyles from './styles';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const Navbar = ({totalItem}) => {

    const classes = useStyles();
    const location = useLocation();

    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handelLogout() {
        setError('')

        try {
            await logout();
            history.pushState('/login');
        } catch (error) {
            setError('Failed to log out')
        }
    }


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce" height="25px" className={classes.image} />
                        Commerce
                    </Typography>
                    
                    <div className={classes.grow} />
                    
                    <Button onClick={handelLogout} size="small" variant="contained" color="primary">Log Out</Button>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart Item" color="inherit">
                            <Badge badgeContent={totalItem} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
