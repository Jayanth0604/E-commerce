import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Additem() {
  const [itemname, setitemname] = useState('')
  const [itemprice, setitemprice] = useState('')
  const [itemimage, setitemimage] = useState('')
  const dispatch = useDispatch()
  function additem() {
    var item = {
      itemName: itemname,
      itemPrice: itemprice, 
      itemImage: itemimage
    }
    dispatch({ type: 'ADD_ITEM', payload: item })
  }
  return (
    <div className='additems'>
      <h2>Add products here to display</h2>

        <input type="" className='input_additems' placeholder='Item Name'
          value={itemname} onChange={(e) => { setitemname(e.target.value) }}></input>

        <input type="" className='input_additems' placeholder='Item Price'
          value={itemprice} onChange={(e) => { setitemprice(e.target.value) }}></input>

        <input type="" className='input_additems' placeholder='Item Image'
          value={itemimage} onChange={(e) => { setitemimage(e.target.value) }}></input>



      <button onClick={additem} className='additems_button'>Add item</button>

    </div>
  )
}

export default Additem