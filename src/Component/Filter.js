import React from "react";
import { categoryList, ratingList } from "../utils/data";

const Filter = ({
  handleSelectedCategory,
  handleSelectedRating,
  min,
  max,
  handleMax,
  handleMin,
  clearAllFilter,
  cuisines,
  handleChangePlaceChecked,
  category,
  rating,
  selectedCheckBoxId
}) => {
 
   return (
    <div className=" ">
      <div id="filter" className="">
        <p className="text-center font-semibold">Category</p>
        <div className="flex justify-between p-3">
          {categoryList.map((ctg) => (
            <button
              key={ctg.id}
              onClick={() => {
                handleSelectedCategory(ctg.value)
                
              }}
              className={category === ctg.value ? "bg-sky-500 rounded p-1 text-white" : ""}
            >
              {ctg.value}
            </button>
          ))}
        </div>
        <hr />
        <div id="rating">
          <p className="text-center font-semibold mt-2">Rating</p>

          <div className="flex justify-between p-3 ">
            {ratingList.map((rtg) => (
              <div className="mt-3 flex items-center" key={rtg.id}>
                <button onClick={() => {
                  handleSelectedRating(rtg.value)
                   
                }}
                  className={rating === rtg.value ? "bg-sky-500 rounded flex items-center text-white p-1" : "flex items-center"}
                >
                  {rtg.label}
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                </button>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div id="cuisines" className="p-3">
          <p></p>
          <div>
            <p className="text-center font-semibold mt-2">Dishes</p>

            {cuisines.map((item) => (
              <div
                className="mt-3 flex items-center justify-between"
                key={item.id}
              >
                <label>{item.label}</label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  checked={selectedCheckBoxId.includes(item.id)}
                  onChange={() => handleChangePlaceChecked(item.id)}
                  className="w-4 h-4 text-blue-600 bg-black rounded border-gray-600 focus:ring-blue-500 "
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div id="search" className="p-3">
          <p className="text-center font-semibold mt-2">Price</p>
          <div className="flex items-center justify-between mt-3">
            <div>
              <label
                htmlFor="min"
                className="block mb-2 text-sm font-medium text-gray-900  "
              >
                Min
              </label>
              <input
                type="number"
                value={min}
                onChange={handleMin}
                className="bg-gray-50 border w-24 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
              />
            </div>
            <div>
              <label
                htmlFor="max"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Max
              </label>
              <input
                type="number"
                onChange={handleMax}
                value={max}
                className="bg-gray-50 border w-24 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
              />
            </div>
          </div>
        </div>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mt-3 a" onClick={clearAllFilter}> clear all filter</button>
      </div>

    </div>
  );
};

export default Filter;
