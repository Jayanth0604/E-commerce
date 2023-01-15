
import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'

function Cart() {
  const dispatch = useDispatch()
  const  cartobj = useSelector(store => store.cartReducer)
  const tablebody = cartobj.cartitems.map((item)=> {
    return <tr>
      <td>{item.itemName}</td>
      <td><img src={item.itemImage} className='cart_image' ></img></td>
      <td>{item.itemPrice}</td>
      <td><button className='remove_cart'onClick={() => { dispatch({ type: 'DELETE_ITEM_TO_CART', payload: item }) }}>Remove from cart</button></td>
      
      </tr>
      
  })
  return (
    <div className='cart_container '>
      <div className='cart123'>
        <h2>Proceed to buy : {cartobj.cartitems.length} items</h2>
        <table className='table_cart'>

          <thead>
            <tr>
              <th>Product Name</th>
              
              <th>Image</th>
              
              <th>Price</th>
             
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            {tablebody}
          </tbody>
        </table>
        
      </div>

    </div>
  )
}

export default Cart