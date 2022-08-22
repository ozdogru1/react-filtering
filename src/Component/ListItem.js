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
            className="max-w-sm mr-3 mb-5 overflow-hidden w-[383px]   bg-white rounded-lg shadow-md  "
          >
            <img
              className=" object-cover w-max  h-64 "
              src={item.coverSrc}
              alt="prd-img"
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900  ">
                {item.title}
              </h5>
              <div className="flex items-center">
                <p> {item.rating}</p>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

              </div>

              <div className="flex justify-between items-center">
                <span className="text-xl font-semiboldold text-gray-900 ">
                  {item.price} $
                </span>
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
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
