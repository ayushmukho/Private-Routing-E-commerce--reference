import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../components/Context/AuthProvider";

function PrivateRoute({
  component: Component,
  handelEmptyCart,
  handelRemoveFromCart,
  handelUpdateCartQuantity,
  cart,
  products,
  onAddToCart,
  totalItem,
  ...rest
}) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component
            handelEmptyCart={handelEmptyCart}
            handelRemoveFromCart={handelRemoveFromCart}
            handelUpdateCartQuantity={handelUpdateCartQuantity}
            cart={cart}
            totalItem={totalItem}
            onAddToCart={onAddToCart}
            products={products}
            {...props}
          />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
