'use client';
import React, { useEffect } from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });
import { IoMenu, IoSearch } from 'react-icons/io5';
import { H6, IconBtn, Input } from '../uis';
import { NavLinks } from './navLinks';

export const Navbar = () => {
  return (
    <nav
      className={`${orbitron.className} flexSbIc 
      h-min space-x-3  mx-2 mt-1
      text-skin-primary  
      `}
    >
      <div className='flexIc'>
        <IconBtn className='hover:scale-100 mr-3  lg:hidden' label='Menu'>
          <IoMenu className='w-6  h-auto' />
        </IconBtn>
        <H6 className='whitespace-nowrap text-skin-primary'>The Game Space</H6>
      </div>

      <NavLinks className='hidden lg:flexCC space-x-5' />

      <span className={`flexIc relative`}>
        <Input
          type='text'
          placeholder='Search_'
          name='search'
          className='w-36 border rounded-full border-skin-primary'
        />
        <IconBtn
          className='border  w-7 h-full flexCC p-0 px-0 absolute right-0 hover:scale-150'
          label='Search'
        >
          <IoSearch />
        </IconBtn>
      </span>
    </nav>
  );
};

// https://codepen.io/gayane-gasparyan/pen/wvxewXO
