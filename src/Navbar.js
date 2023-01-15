import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
}from 'react-router-dom'
function Navbar() {
  const cartobj = useSelector(store => store.cartReducer)
  return (
     
    <div className='nav_bar'>
       
        <div className='nav_bar1'>
        <img  className="logo123" src='assets/image/logo-A1.png'></img>
            <input type='search' className='input1' placeholder='Search'
            ></input><img className='search123' src='assets/image/search.png'></img>
              
        </div>
       
        <div className='nav_bar2'>
        <ul>
            <li><Link  to="/">Items</Link></li>
            <li><Link  to="/Additems">Additems</Link></li>
            <li ><Link  to="/Signinpage">Sign  in</Link> </li>
            <li><Link to ="/#">Returns & orders</Link></li>
            <li><Link to ="/Cart">Cart:{cartobj.cartitems.length}</Link></li>
            
            
        </ul>

        </div>

        {/* <div className='popup'>
           <div className='popup-content'>
            <img  className='cancel_popup' src ="assets/image/cancel.png"></img>
            <img src='assets/image/logo-A1.png'></img>
            <h3>Sign in</h3>
            <h5>Email or mobile phone number </h5>
            <input type="number"className='popup_input' ></input>
            <button className='popup_button'>Continue</button>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
          <hr></hr>
            <h4>New to Amazon?</h4>
            <button className='amzon_button'>Create Your Amazon account</button>

           </div>
        </div> */}
    </div>
  )
}

export default Navbar