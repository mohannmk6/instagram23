import React from 'react'
import Image from "next/image";
import dhoni from "/public/assets/dhoni.jpg";

export default function Miniprofile() {

  
  return (
    <div className='flex justify-between mt-7 ml-2'>
    <Image src={dhoni} alt=""  className='rounded-full border w-16 h-16 p-[2px]' />
<div>
    <h2 className='font-bold'>Ms Dhoni</h2>
    <h3>Welocme to instagram</h3>
</div>
<button className='font-semibold text-blue-400' >Sign Out</button>
    </div>
  )
}
