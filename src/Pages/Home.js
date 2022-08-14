import React from "react";
import Filter from "../Component/Filter";
import ListItem from "../Component/ListItem";

const Home = ({
  min,
  max,
  handleMax,
  handleMin,
  cartProduct,
  setCartProduct,
  handleSelectedCategory,
  list,
  handleSelectedRating,
  handleSelectPrice,
  price,
  clearAllFilter,
  cuisines,
  handleChangePlaceChecked,
  category,
  rating,
  selectedCheckBoxId
}) => {
  return (
    <div className="flex p-6 justify-center">
      <div className="w-1/6 rounded  mr-12  ">
        <Filter
          price={price}
          handleSelectPrice={handleSelectPrice}
          handleSelectedRating={handleSelectedRating}
          handleSelectedCategory={handleSelectedCategory}
          handleMin={handleMin}
          handleMax={handleMax}
          min={min}
          max={max}
          cuisines={cuisines}
          clearAllFilter={clearAllFilter}
          handleChangePlaceChecked={handleChangePlaceChecked}
          rating={rating}
          category={category}
          selectedCheckBoxId={selectedCheckBoxId}

        />
      </div>
      <div className="w-5/6">

        <ListItem
          list={list}
          cartProduct={cartProduct}
          setCartProduct={setCartProduct}
        />
      </div>
    </div>
  );
};

export default Home;
