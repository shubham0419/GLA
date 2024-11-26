import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
import Profile from './Profile';

const Search = () => {
  const [search,setSearch] = useState("shubham0419");
  const [userData,setUserData] = useState({});

  const getUserData = async ()=>{
    let res = await axios.get(`https://api.github.com/users/${search}`);
    console.log(res);
    setUserData(res.data);
  }

  useEffect(()=>{
    getUserData();
  },[]);

  return (
    <>
      <div className='mt-24 float-right px-5 flex gap-4'>
        <input onChange={(e)=>{setSearch(e.target.value)}} className='border px-2 rounded-md' type='text' placeholder='search Username...'/>
        <button className='border' onClick={()=>{getUserData()}}>Search</button>
      </div>
      <Profile user={userData}/>
    </>
  )
}

export default Search