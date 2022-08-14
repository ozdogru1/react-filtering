import React, { useState } from "react";
import Toast from "./Toast";

const ListItem = ({ cartProduct, setCartProduct, list }) => {
  const [showToast, setShowToast] = useState(false);

  const addToCart = (prd) => {
    const checkBasket = cartProduct.find((item) => item.id === prd.id);
    if (checkBasket) {
      checkBasket.qty += 1;
      setCartProduct([...cartProduct.filter((item) => item !== prd)]);
    } else {
      setCartProduct([...cartProduct, { ...prd, qty: 1 }]);
    }
    setShowToast(true);
  };

  console.log(list);

  return (
    <div>
      <div id="list" className="flex flex-wrap ">
        {list.length === 0 ? <p>not result found</p> : list.map((item) => (
          <div
            key={item.id}
            className="max-w-sm mr-3 mb-5 overflow-hidden w-[383px]   bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className=" object-cover w-max  h-64 "
              src={item.coverSrc}
              alt="prd-img"
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <div className="flex items-center">
                <p> {item.rating}</p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xl font-semiboldold text-gray-900 dark:text-white">
                  {item.price} $
                </span>
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )) }
        {showToast && (
          <Toast showToast={showToast} setShowToast={setShowToast} />
        )}
      </div>
    </div>
  );
};

export default ListItem;
