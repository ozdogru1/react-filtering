import React from "react";

const ItemList = ({ cartProduct, setCartProduct }) => {
  const removeToCart = (id) => {
    const newCartList = cartProduct.filter((item) => item.id !== id);
    setCartProduct(newCartList);
  };



  return (
    <div>
      <div className="flex mt-10 mb-5">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
          Product Details
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Quantity
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Price
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Total
        </h3>
      </div>

      {cartProduct.map((item) => (
        <div key={item.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="">
              <img className="w-56 rounded" src={item.coverSrc} alt="" />
            </div>

            <div className="ml-5">
              <p className="mb-5">{item.title}</p>
              <p className="mb-5">{item.category}</p>
              <button
                onClick={() => removeToCart(item.id)}
                className="mb-5 text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex justify-center w-1/5">


            <input
              className="mx-2 border text-center w-8"
              type="text"
              value={item.qty}
            />


          </div>
          <span className="text-center w-1/5 font-semibold text-sm">
            {item.price}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            {item.qty * item.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
