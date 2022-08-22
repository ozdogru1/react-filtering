import React, { useEffect, useState } from "react";
import Navbar from "../src/Component/Navbar";
import Cart from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { dataList } from "./utils/data";
const App = () => {
  const [cartProduct, setCartProduct] = useState(
    JSON.parse(localStorage.getItem("cartProduct")) || []
  );
  const [checked, setChecked] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);
  const [category, setCategory] = useState(null);
  const [list, setList] = useState(dataList);
  const [rating, setRating] = useState(null);
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const handleChangePlaceChecked = (id) => {
    const cuisinesList = checked;

    const changeCheckedCity = cuisinesList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecked(changeCheckedCity);
  };
  const selectedCheckBoxId = checked.filter((item) => item.checked).map(checkbox => checkbox.id)


  const handleSelectedRating = (value) => {
    setRating(value);
  };
  const handleSelectedCategory = (value) => {
    setCategory(value);
  };
  const handleMin = (e) => {
    setMin(e.target.value);
  };
  const handleMax = (e) => {
    setMax(e.target.value);
  };




  const filterAll = () => {
    let updateList = dataList;
    if (rating) {
      updateList = updateList.filter(
        (item) => Number(item.rating) === Number(rating)
      );
    }
    if (category) {
      updateList = updateList.filter((item) => item.category === category);
    }

    if (min || max) {
      if (min && max) {
        updateList = updateList.filter(
          (item) => item.price >= min && item.price <= max
        );
      }
      if (min) {
        updateList = updateList.filter((item) => item.price >= min);
      }
      if (max) {
        updateList = updateList.filter((item) => item.price <= max);
      }
    }

    const cuisinesChecked = checked
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updateList = updateList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    setList(updateList);
  };
 

  useEffect(() => {
    filterAll();
  }, [category, rating, min, max, checked]);

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);

  const clearAllFilter = () => {
    setCategory("");
    setMin("");
    setMax("");
    setRating("");
    setChecked(checked.map(item => (
      {...item, checked : false }
      ))
    );
  };

const obj =  [ { id: 1, checked: false, label: "American" }]

console.log(...obj, "asds");
  return (
    <>
      <Navbar cartProduct={cartProduct} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              list={list}
              cartProduct={cartProduct}
              handleSelectedCategory={handleSelectedCategory}
              setCartProduct={setCartProduct}
              handleSelectedRating={handleSelectedRating}
              handleMin={handleMin}
              handleMax={handleMax}
              min={min}
              max={max}
              clearAllFilter={clearAllFilter}
              cuisines={checked}
              handleChangePlaceChecked={handleChangePlaceChecked}
              rating={rating}
              category={category}
              selectedCheckBoxId={selectedCheckBoxId}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart cartProduct={cartProduct} setCartProduct={setCartProduct} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
