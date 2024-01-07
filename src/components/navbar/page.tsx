'use client';
import React, { useEffect } from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });
import { IoMenu, IoSearch } from 'react-icons/io5';
import { H5, H6 } from '../uis';
import { IconBtn } from '../uis/button/IconBtn';
export const Navbar = () => {
  return (
    <nav className={`${orbitron.className} flexSpCWf  h-min `}>
      <div className='flexIc'>
        <IconBtn className='hover:scale-100' label='Menu'>
          <IoMenu className='w-5 sm:w-auto h-auto' />
        </IconBtn>
        <H6 className='whitespace-nowrap text-skin-base'>The Game Space</H6>
      </div>

      <span className={`flexIc border rounded-full h-full transition-all`}>
        <input
          name='search'
          type='text'
          placeholder='Search_'
          className='bg-transparent outline-none p-1 px-3 text-sm w-20 sm:w-auto animate-pulse focus:animate-none'
        />
        <IconBtn className='border  w-7 h-full flexCC p-0 px-0' label='Search'>
          <IoSearch />
        </IconBtn>
      </span>
    </nav>
  );
};

/* GAME-SPACE */

// position: absolute;
// width: 267px;
// height: 37px;
// left: 80px;
// top: 18px;

// font-family: 'Orbitron';
// font-style: normal;
// font-weight: 400;
// font-size: 30px;
// line-height: 38px;

// color: #FFFFFF;

// text-shadow: 1px -1px 9px #FFFFFF;
