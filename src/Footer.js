import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

function Footer() {
  return (
    <div className='footer'>
      <ScrollToTop smooth color='black'></ScrollToTop>
      
      <div className='content'>
      <div className='pagecenter'>
        <div className='gtku'>
          <h2>Get to Know Us</h2>
          <p>
            About Us<br></br>
          Careers<br></br>
         Press Release<br></br>
          Amazon Science<br></br>
          </p>
        </div>
        <div className='cwu'>
          <h2>Connect with us </h2>
          <p>
           Facebook<br></br>
          Twitter<br></br>
         Instagram<br></br>
     
          </p>
        </div>
        <div className='mmwu'>
          <h2>Make Money with us</h2>
          <p>
           sell on us<br></br>
          sell under Amazon accelerator<br></br>
          Amazon Global  Selling <br></br>
          Beacame  an Afflicate <br></br>
          Fullfilment by Amazon <br></br>
          Advertise  Your Product <br></br>
          </p>
        </div>
        <div className='luhy'>
          <h2>Let us Help you</h2>
          <p>
            Covid-19 and Amazon<br></br>
          Your Account <br></br>
          Return centre<br></br>
          100%  Purchase Protection <br></br>
          Amazon app download <br></br>
          Help<br></br>
          </p>
        </div>
      </div>
        
        
      </div>
      <hr className='footer_hr'></hr>
      <div className='footer1'>
        <div className='pagecenter1'>
        <img src='assets/image/footer.png'></img>
        <p> Austrailia Brazil Canada China germany italy japan mexico netherlands poland singapore spain turkey unitedArabEmirates unitedKingdom unitedStates  </p>
      </div>
      </div>
    </div>
    
    
    
  )
}

export default Footer