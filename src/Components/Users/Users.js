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
   
    

    return (
        <div className='whole'>
            <div className='users'>
           {
               userInfo.map(userInfo=><Card userInfo={userInfo}></Card>)
           }
            </div>
            <div className='profile'>
                <Myprofile></Myprofile>
            </div>
        </div>
    );
};

export default Users;