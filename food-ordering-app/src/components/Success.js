import React, { useEffect, useState } from 'react'
import bag from '../assets/bag.gif'
import verified from '../assets/verified.gif'
import { PropagateLoader } from 'react-spinners'

export default function Success() {

  const[loader, setLoading] = useState(true);

  useEffect(()=>
{
  setTimeout(() => {

    setLoading(false);
    
  }, 4000);
},[])
  return (
    <div className='success'>

      {loader===true? <PropagateLoader color='purple'></PropagateLoader>
      :
      <div>
          <img src={verified} className='veri'></img>
        <h4>Order successful!</h4>
        <h5>Your order has been successfully placed.</h5>    

          <img src={bag} className='bag'></img>

        </div>
      }

      

    

    </div>
  )
}
