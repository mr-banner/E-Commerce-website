"use client"
import Cookies from 'js-cookie'
import React from 'react'

const Footer = () => {
    const user = Cookies.get("userName");
    console.log(user);
    
  return (
    <div className='flex max-sm:flex-col max-sm:gap-5 items-center justify-between inline-padding py-10 bg-[#DBCDAC]'>
        <div>
            <h1 className='text-black text-lg sm:text-4xl'>{user}</h1>
        <p className='text-muted mt-3 max-sm:text-xs'>Copyright © 2022 FASCO . All Rights Reseved.</p>
        </div>
        <div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>Product</li>
                <li>Pages</li>
                <li>Shop</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer