import React from 'react'

const Count = () => {
  let count = 0;

  const incrimentCount = ()=>{
    count++;
    console.log(count);
  }

  console.log(count,"outer");
  
  return (
    <div className='m-auto p-2 flex gap-2 items-center'>
      Count : {count}
      <button className='border-4 px-3 py-2' onClick={()=>{incrimentCount()}}>Incriment</button>
    </div>
  )
}

export default Count