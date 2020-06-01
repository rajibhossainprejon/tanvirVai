import React from 'react';
import './Myprofile.css'
import image from '../../Images/myphoto.jpg'

const Myprofile = (props) => {
  const newUser=props.user;
 console.log(newUser);
    return (
        <div className='myProfile'>
           
    <div class="cards">
  
  <div class="container">
      <h2>My Profile</h2>
  <img src={image} alt="No Image"/>

    <h4><b>Rajib Hossain Prejon</b></h4>
    <p>Software Developer & Engineer</p>
    <p>+880 151 8647 550</p>
    <p>rajibhossainpijeon@gmail.com</p>
    <button>Total Friends: {props.user.length}</button>
    <br/>
    <br/>
    
    
  </div>

       
    
    </div>
    </div>
    );
};

export default Myprofile;