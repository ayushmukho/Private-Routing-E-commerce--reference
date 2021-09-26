import React, { useEffect, useState } from 'react'
import Signup from "./Signup/Signup.component";

import { AuthProvider } from "./Context/AuthProvider";
import { commerce } from "../lib/commerce";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from "./Products/Products.component";
import Login from "./Login/Login.component";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword/ForgotPassword.component";
import Cart from './Cart/Cart.component';
import Navbar from './Naavbar/Navbar.component';
// import { useAuth } from './Context/AuthProvider';

// import Navbar from "./Naavbar/Navbar.component";


function App() {

  // const { currentUser } = useAuth();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const onAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handelUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const handelRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handelEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    
    <Router>
      <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Products} totalItem={cart.total_items} products={products} onAddToCart={onAddToCart} />
            <PrivateRoute path="/cart" 
              handelUpdateCartQuantity={handelUpdateCartQuantity}  
              handelRemoveFromCart={handelRemoveFromCart}
              handelEmptyCart={handelEmptyCart}
              cart={cart} 
              totalItem={cart.total_items}
              component={Cart}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
    </Router>
  );
}

export default App;
