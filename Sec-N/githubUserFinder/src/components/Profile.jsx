import React from 'react'
import { Building2 } from 'lucide-react';

const Profile = ({data}) => {
  return (
    <div className='flex justify-center gap-4 w-full p-5'>
      <div className='w-[30%]'>
        <img className='rounded-full shadow-md' src={data.avatar_url} alt='profile.png'/>
        <h2 className='text-3xl font-semibold'>{data.name}</h2>
        <p className='text-2xl text-gray-400'>{data.login}</p>
        <p>{data.bio}</p>
        <p> <Building2 /> {} </p>
      </div>
      <div className='w-full'>
      </div>
    </div>
  )
}

export default Profile