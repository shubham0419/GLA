import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Star , GitFork } from 'lucide-react';

const Repos = ({ repoUrl }) => {
  const [repos, setRepos] = useState([]);

  const getRepos = async ()=>{
    let res = await axios.get(repoUrl);
    setRepos(res.data);
  }

  useEffect(()=>{
    if(repoUrl) getRepos();
  },[repoUrl])

  return (
  <div>
    <h2 className="text-2xl font-semibold pb-3">Repositories</h2>
    <div className="flex flex-wrap gap-5">
      {repos.map((repo)=>{
        return (
          <div key={repo.id} className="border-2 rounded-md shadow-md w-[40%] p-5 capitalize">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-lg">{repo.name}</h4>
              <p className="border-2 rounded-2xl px-2 text-sm">{repo.visibility}</p>
            </div>
            <div className="flex gap-4 items-center text-sm text-gray-500 pt-5">
              <p>{repo.language}</p>
              <p className="flex gap-2"> <Star size={18}/> {repo.stargazers_count}  </p>
              <p className="flex gap-2"> <GitFork size={18}/> {repo.forks}  </p>
            </div>
          </div>
        )
      })}
    </div>
  </div>
  )
};

export default Repos;
