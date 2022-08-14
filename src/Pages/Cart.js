import React from "react";
import CartItems from "../Component/CartItems";
import OrderSummary from "../Component/OrderSummary";
import TotalItems from "../Component/TotalItems";

const Cart = ({cartProduct, setCartProduct}) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between shadow-md ">
        <div className="bg-white px-10 py-10 w-5/6">
            <TotalItems  cartProduct={cartProduct}/>
            <CartItems setCartProduct = {setCartProduct} cartProduct={cartProduct}/>
        </div>
        {/* <div className="w-1/6">
        <OrderSummary/>
            
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
