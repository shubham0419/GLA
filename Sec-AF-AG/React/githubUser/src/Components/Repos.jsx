import React, { useEffect, useState } from 'react'
import axios from "axios"

const Repos = ({repoUrl}) => {

  let [repos,setRepos] = useState([]);

  const getUserRepos = async ()=>{
    let res = await axios.get(repoUrl);
    setRepos(res.data);
  }

  useEffect(()=>{
    if(repoUrl) getUserRepos();
  },[repoUrl]);

  return (
    <div className='flex flex-col gap-2 mt-2'>
      {repos.map((repo,ind)=>{
        return (
          <div key={ind} className='flex border p-5 rounded-md shadow-sm '>
            {repo.name}
          </div>
        )
      })}
    </div>
  )
}

export default Repos