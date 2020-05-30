import React from 'react';
import './Card.css';
import imageee from '../../Images/unnamed.jpg' 
const Card = (props) => {
  
  const userInfo=props.userInfo;
  const {name,phone,email,website}=props.userInfo;
  console.log(props.userInfo);
  

  console.log(name);
    return (
        <div className="new">
            <body>

  <div class="column">
    <div class="card">
      <img src={imageee} alt="No Image"/>
    <h3>{name}</h3>
    <p>{phone}</p>
    <p>{email}</p>
    <p>{website}</p>
      <br/>
      <button> + Add Me </button>
    </div>
  </div>


</body>
            
        </div>
    );
};

export default Card;