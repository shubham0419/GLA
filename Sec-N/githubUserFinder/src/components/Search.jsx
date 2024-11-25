import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

const Search = () => {
  let [search,setSearch] = useState("shubham0419");
  let [userData,setUserData] = useState({});

  const getUserData = async ()=>{
    let res = await axios.get(`https://api.github.com/users/${search}`);
    let user = res.data;
    setUserData(user);
  }

  useEffect(()=>{
    getUserData();
  },[])
  
  return (
    <div className='mt-28 flex gap-2 justify-end px-5'>
      <input className='p-2 border rounded-lg' onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder="Search..."/>
      <button onClick={()=>{getUserData()}}>Search</button>
    </div>
  )
}

export default Search