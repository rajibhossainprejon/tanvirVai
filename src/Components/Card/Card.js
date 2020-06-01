import React from 'react';
import './Card.css';
import imageee from '../../Images/unnamed.jpg' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
  
  const userInfo=props.userInfo;
  const {name,phone,email,website}=props.userInfo;
  
  const element = <FontAwesomeIcon icon={faUserPlus} />

  
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
      <button onClick={()=>props.addUser(props.userInfo)}> {element} Add Me </button>
     
    </div>
  </div>


</body>
            
        </div>
    );
};

export default Card;