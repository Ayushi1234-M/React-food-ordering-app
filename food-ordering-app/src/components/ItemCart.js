import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { editCartQty, removeFromCart } from '../redux/Slice/CartSlice';
import toast from "react-hot-toast";
import { MdOutlineEmojiPeople } from "react-icons/md";

export default function ItemCart({cartFood}) {

    const toasting =() =>{
        toast(`Sorry! The maximum available quanity for ${cartFood.name} is ${cartFood.avail}`,
  {
    icon:  <MdOutlineEmojiPeople size={40} />,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
    }

    const[addedQty, setAddedQty] = useState(1);

    const dis = useDispatch();

    function addQuant()
    {
        if(addedQty+1 <= cartFood.avail)
        {
            const newQty = addedQty + 1;
            setAddedQty(newQty);
            dis(editCartQty({ ...cartFood, qty: newQty }));
        }
        else{
            toasting();
        }
    }

    function lessQuant()
    {
        const newQty = Math.max(1, addedQty-1);
        setAddedQty(newQty);
        dis(editCartQty({ ...cartFood, qty: newQty }));

    }

   

  return (

    <div className='all-cart-items'>
        <div className='single-item'>

            <img alt='item' className='in-cart-item' src={cartFood.img}></img>
            
            {/* <div className='in-cart-name'>                
                <div className='cart-item-name'>{cartFood.name}</div>
                <div className='cart-item-del'><MdDelete size={20} className='del-icon' /></div>
            </div>     */}
            <div className='cart-item-name'>{cartFood.name}</div>
            <div className='cart-item-del1' onClick={()=>dis(removeFromCart(cartFood))}><MdDelete size={20} className='del-icon' /></div>
            <div className='cart-item-price'><LiaRupeeSignSolid size={18}/>{cartFood.price}</div>
            <div className='cart-item-inc-dec'>
                   
                   
                    <span className='minus' onClick={()=>lessQuant()}>-</span>
                    <span className='add-qty'> {addedQty} </span> 
                    <span className='plus' onClick={()=>addQuant()}>+</span> 


                   
            </div>

            
                
            

            {/* <div className='in-cart-qty'>
                
                <div className='cart-item-price'><LiaRupeeSignSolid size={18}/>140</div>
                <br></br>
                
                
            </div>         */}


        </div>

    </div>


  )
}
