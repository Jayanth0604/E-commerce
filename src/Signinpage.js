import React from 'react'

function Signinpage() {
  return (
    <div>
          <div className='popup'>
           <div className='popup-content'>
      
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
        </div>
    </div>
  )
}

export default Signinpage