import React from 'react'





export const Navbar = ({count,setcount}) => {
  return (
    <div className='bg-black text-white w-full'>
      Navbar {count}
      <button onClick={()=>{
        setcount(count=>{
          return count+1;
        })
      }}> incriment </button>
    </div>
  )
}

export const Navbar2 = ({user,user1,user2})=>{
  return (
    <div className='flex justify-between bg-red-500 text-white w-full'>
      Navbar Two
      <span>{user} {user1}</span>
    </div>
  )
}
// export default Navbar