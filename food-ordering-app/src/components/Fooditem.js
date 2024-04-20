import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "./FoodData";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { GiFullPizza } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

export default function Fooditem({ selCat }) {

// function test()
// {
//   function handleSearchMenu(selCat) {
    
//     const  val = selCat.trim().toLowerCase();
//     const s = searchItems.trim().toLowerCase();
    
//     if(s!=="" )
//     {
//       const searchedItems = FoodData.filter(({name})=>name.toLowerCase().includes(s));
//       setAllItems(searchedItems);
//     }
  
//     else if (val === "" || val === "all") 
//     {
//       // const searchedItems = FoodData.filter(({name})=>name.toLowerCase().includes(searchItems));
//       // setAllItems(searchedItems);
      
//       setAllItems(FoodData);
//     }     
     
//     else if (val === "breakfast" ||val === "lunch" ||val === "snacks" ||val === "dinner")
//     {
//       const filteredItems = FoodData.filter(({ category }) =>
//         category.toLowerCase().includes(val)
//       );
//       setAllItems(filteredItems);
//     }
//   }
// }


  const handleToast = (e) => {
    toast.success(`Successfully added ${e}!`, {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "seagreen",
      },
      iconTheme: {
        primary: "seagreen",
        secondary: "#FFFAEE",
      },
    });
  };

  const cartItems = useSelector((state) => state.cart.cart);
  const searchItems = useSelector((state) => state.search.search);
  console.log(searchItems);

  const [allItems, setAllItems] = useState([]);

  function handleSearchMenu(selCat) {
    
    const  val = selCat.trim().toLowerCase();
    const s = searchItems.trim().toLowerCase();
    
    if(s!=="" && (val === "" || val === "all")  )
    {
      const searchedItems = FoodData.filter(({name})=>name.toLowerCase().includes(s));
      setAllItems(searchedItems);
    }
    else if(s!=="" && (val === "breakfast" ||val === "lunch" ||val === "snacks" ||val === "dinner")  )
    {

      const filteredItems = FoodData.filter(({ category }) =>
        category.toLowerCase().includes(val)
      );

      const searchedItems = filteredItems.filter(({name})=>name.toLowerCase().includes(s));

      setAllItems(searchedItems);
    }
    else if(s==="" && (val === "" || val === "all")  )
    {
      setAllItems(FoodData);
    }
    else if(s==="" && (val === "breakfast" ||val === "lunch" ||val === "snacks" ||val === "dinner")  )
    {
      const filteredItems = FoodData.filter(({ category }) =>
      category.toLowerCase().includes(val));
    setAllItems(filteredItems);
    }


  }


  useEffect(() => {
    handleSearchMenu(selCat);
  }, [selCat, searchItems]); // Dependency array to include selCat

  // function handleInputSearch(search) {
  //   const a = search.trim().toLowerCase();

  //   if (a === "") {
  //     setInItems(allItems);
  //   } else {
  //     const filteredItems = allItems.filter(({ name }) => name.toLowerCase().includes(a));
  //     setInItems(filteredItems);
  //   }
  // }

  console.log(allItems);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="fooditem">

        {allItems.length>0?
        allItems.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            handleToast={handleToast}
            cartItems={cartItems}
          />
        ))
      
      :

      <div className="blank_mssg">
        <IoFastFoodOutline size={50} />
        <span className="noitems">No items found as per your search</span>
        <GiFullPizza size={50} />
        </div>
      
      
      }


        



      </div>
    </>
  );
}
