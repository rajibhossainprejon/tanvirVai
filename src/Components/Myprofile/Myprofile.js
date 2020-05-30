import React from 'react';
import './Myprofile.css'
import image from '../../Images/myphoto.jpg'
const Myprofile = () => {
    return (
        <div className='myProfile'>
           
    <div class="cards">
  
  <div class="container">
  <img src={image} alt="No Image"/>
    <h4><b>Rajib Hossain Prejon</b></h4>
    <p>Software Developer & Engineer</p>
   <p>+880 151 8647 550</p>
   <p>rajibhossainpijeon@gmail.com</p>
<button>Total Friends: 0</button>    
  </div>

       
    
    </div>
    </div>
    );
};

export default Myprofile;