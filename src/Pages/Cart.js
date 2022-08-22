import React from "react";
import CartItems from "../Component/CartItems";
 import TotalItems from "../Component/TotalItems";

const Cart = ({cartProduct, setCartProduct}) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between shadow-md ">
        <div className="bg-white px-10 py-10 w-5/6">
            <TotalItems/>
            <CartItems setCartProduct = {setCartProduct} cartProduct={cartProduct}/>
        </div>
       
      </div>
    </div>
  );
};

export default Cart;
