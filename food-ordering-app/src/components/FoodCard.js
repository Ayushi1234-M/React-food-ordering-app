import React, { useEffect, useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/Slice/CartSlice";


const FoodCard = ({food, cartItems, handleToast}) => {

  const dispatch = useDispatch();

    const[cartclass, setCartclass] = useState('addtocart');
    const[carttext, setCarttext] = useState('Add to cart');

    useEffect(()=>
  {
    const isInCart = cartItems.some((item)=>item.id === food.id);

    if(isInCart)
    {
      setCarttext('Remove from cart');
      setCartclass('removefromcart');  

    }
    else
    {
      setCarttext('Add to cart');
      setCartclass('addtocart'); 

    }


  },[food, cartItems])

    function handlecartbtn(food){

        if(carttext === 'Add to cart')
        {
            setCarttext('Remove from cart');
            setCartclass('removefromcart');      

            dispatch(addToCart({...food, qty:1}));
            handleToast(food.name);
            
        }
        else
        {
            setCarttext('Add to cart');
            setCartclass('addtocart'); 

            dispatch(removeFromCart(food));
        }
    }


    const renderRatingStars = rating => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;
    
      for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} color="red" />);
      }
    
      if (hasHalfStar) {
        stars.push(<FaStar key="half" color="red" style={{ clipPath: "inset(0 50% 0 0)" }} />);
      }
    
        
      return stars;
    };


  return (
    <div>
      <div className="all-food">
        <div className="foodcard">
          <div class="card mb-3">
            <span className="rating">

              {food.rating}            
             {renderRatingStars(food.rating)}
            </span>

            <img
              alt="pizza"
              className="item-img"
              src={food.img} ></img>

            <div class="card-body">
              <h5 class="card-title">{food.name} </h5>
              <p class="card-text description">
                {food.desc}
              </p>

              <div className="item-price-rating">
                <span className="price">
                  <LiaRupeeSignSolid size={18} />
                  {food.price}
                </span>
                <span className="time">{food.category}</span>
              </div>
            </div>

            <div className={cartclass} onClick={()=>handlecartbtn(food)}>{carttext} {cartclass==='addtocart'? 
            <BsCart />
            :
            <BsCartX />

            } </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default FoodCard;
