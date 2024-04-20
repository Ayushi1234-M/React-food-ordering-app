import React, { useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import ItemCart from './ItemCart';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Cart() {

  const[activeItems, setActiveItems] = useState(true);

  const cartItems = useSelector((state)=>state.cart.cart);
    console.log(cartItems);

    let totalPrice = cartItems.reduce((total, cartFood) => total + cartFood.qty * cartFood.price, 0);
    let totalItems = cartItems.reduce((t, cartFood)=>t + cartFood.qty, 0);

    
  return (
    <div className='cart-com'>

     

<div className={`cart ${activeItems===true?"show-cart" : "hide-cart"} `}>


<div className='cart-area'>

    <div className='close-cart'>
        <AiOutlineCloseCircle size={30} className='closelogo' onClick={()=>setActiveItems(false)} />
    </div>
    <br></br>

    <div className='header-cart'>
       <h4>My order</h4>
    </div>
{cartItems.length>0?
<div>
    <div className='cart-added'>

    {cartItems.map((cartFood)=>{
      return(

        <ItemCart key={cartFood.id} cartFood={cartFood} />)
    })}

</div>



    <div className='cart-bottom'>
        <span className='qty'>Items: {totalItems} </span>
        <br></br>
        <span className='amt'>Total amount:<LiaRupeeSignSolid size={18} />{totalPrice}</span>
        <br></br>
        <hr></hr>

        <div className='checkout-btn'>


       <Link to={"/success"} className='checkout-link'>
       <button  className='checkout'>
       Checkout <FiCheck /> 
       </button> 
       
        </Link>

        </div>

    </div>
    </div>

    :
<div className='show-empty-mssg'>
  There are no items in your cart!
  </div>
  } 

</div>

</div>


      
    
    

    <div className={`cart-icon-comp ${activeItems===true? "hide-cart": "show-cart"} `}>
    <PiShoppingCartFill className='cart-icon' size={40} color='seagreen' onClick={()=>setActiveItems(true)} />
    </div>
    </div>
  )
}
