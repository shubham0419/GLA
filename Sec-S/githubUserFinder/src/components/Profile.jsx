import React from 'react'
import { Building2 } from 'lucide-react';
import Repos from './Repos';

const Profile = ({user}) => {


  return (
    <div className='flex justify-center gap-5 px-10 py-5 w-full'>
      <div className='w-[30%]'>
        <img className='rounded-full shadow-lg' src={user.avatar_url} alt='profile.png'/>
        <h2 className='text-2xl font-semibold'>{user.name}</h2>
        <p className='text-xl text-gray-500'>{user.login}</p>
        <p className='text-lg text-gray-600'>{user.bio}</p>
        <p className='flex gap-2'> <Building2 /> {user.company?user.company:"____________"}</p>
      </div>
      <div className='w-full'>
        <Repos repoUrl={user.repos_url}/>
      </div>
    </div>
  )
}

export default Profile