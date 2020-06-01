import React, { useEffect, useState } from 'react';
import Myprofile from '../Myprofile/Myprofile';
import './Users.css'
import Card from '../Card/Card';
const Users = () => {
    const [userInfo,updateUserInfo]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>updateUserInfo(data));

    },[])
    const [user,updateUser]=useState([]);
    const addUser=(selectedUser)=>{
        
       
        const newArray=[...user,selectedUser];
        updateUser(newArray)
    };
    
   
    

    return (
        <div className='whole'>
            <div className='users'>
           {
               userInfo.map(userInfo=><Card addUser={addUser} userInfo={userInfo}></Card>)
           }
            </div>
            <div className='profile'>
                <Myprofile  user={user}></Myprofile>
            </div>
        </div>
    );
};

export default Users;