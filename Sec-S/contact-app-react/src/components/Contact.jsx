import React from 'react'
import "./Contact.css"
import Male from "../assets/MaleSvg.svg"
import Female from "../assets/FemaleSvg.svg"

const Contact = ({singleContact}) => {
  return (
    <div className='w-fit p-5 border'>
      <img src={singleContact.gender=="Male"?Male:Female} alt='.png' 
      className='w-10 h-10 object-cover rounded-full mb-4'/>
      <h3 className='font-semibold'>{singleContact.name}</h3>
      <p>{singleContact.phone}</p>
    </div>
  )
}

export default Contact