// CategoryMenu.js
import React, { useState } from "react";
import Fooditem from "./Fooditem";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slice/SearchSlice";

export default function CategoryMenu() {
  const [selectbtn, setSelectbtn] = useState(null);

  const [selCat, setSelCat] = useState("All");

  function handleButtonClick(e, category) {
    setSelectbtn(e);
    setSelCat(category);
  }

  const dis = useDispatch();

  return (
    <div>
      <div className="search-area">
        <span className="searchhere">Search for your favorite foods here:</span>
        <span>
         
          <input
            type="search"
            name="seach"
            placeholder="search here..."
            onChange={(e)=>dis(setSearch(e.target.value))}        
          ></input>
        </span>
      </div>

      <div className="all-btns">
        <button
          className={selectbtn === 0 ? "btn-filter active" : "btn-filter"}
          onClick={() => handleButtonClick(0, "All")}
        >
          All
        </button>
        <button
          className={selectbtn === 1 ? "btn-filter active" : "btn-filter"}
          onClick={() => handleButtonClick(1, "Breakfast")}
        >
          Breakfast
        </button>
        <button
          className={selectbtn === 2 ? "btn-filter active" : "btn-filter"}
          onClick={() => handleButtonClick(2, "Lunch")}
        >
          Lunch
        </button>

        <button
          className={selectbtn === 3 ? "btn-filter active" : "btn-filter"}
          onClick={() => handleButtonClick(3, "Snacks")}
        >
          Snacks
        </button>

        <button
          className={selectbtn === 4 ? "btn-filter active" : "btn-filter"}
          onClick={() => handleButtonClick(4, "Dinner")}
        >
          Dinner
        </button>
      </div>
      <Fooditem selCat={selCat} />
    </div>
  );
}
