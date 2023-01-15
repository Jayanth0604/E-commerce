import React from 'react'
import {useDispatch} from 'react-redux'

function Item({item}) {
  const dispatch = useDispatch()
  return (
    <div className='shoes'>
      <h1>{item.itemName}</h1>
      <div className='image123'>
      <img src={item.itemImage} className='shoe_img'></img>
      </div>
      <h3>{item.itemPrice}</h3>
      <button className="shoe_cart " onClick={()=>{dispatch({type:'ADD_ITEM_TO_CART',payload:item})}}>Add to card</button>
    </div>
    
  )
}

export default Item