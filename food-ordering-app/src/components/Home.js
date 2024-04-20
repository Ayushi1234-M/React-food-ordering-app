import React from 'react'
import CategoryMenu from './CategoryMenu'
// import Fooditem from './Fooditem'
import Cart from './Cart'

export default function Home() {
  return (
    <div>
        {/* <Searchbar></Searchbar> */}

        <CategoryMenu></CategoryMenu>

        {/* <Fooditem></Fooditem> */}

        <Cart></Cart>
      
    </div>
  )
}
