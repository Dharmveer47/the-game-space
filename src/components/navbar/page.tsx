'use client';
import React, { useState } from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });
import { IoMenu, IoSearch, IoClose } from 'react-icons/io5';
import { H6, IconBtn, Input } from '../uis';
import { NavLinks } from './navLinks';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  const Icon = open ? IoMenu : IoClose;
  return (
    <nav
      className={`${orbitron.className} flexSbIc 
      h-min space-x-3  mx-2 mt-1
      text-skin-primary relative
      `}
    >
      <div className='flexIc'>
        <IconBtn className='hover:scale-100 mr-3  lg:hidden' label='Menu' onClick={handleOpen}>
          <Icon className='w-6  h-auto transition-all' />
        </IconBtn>
        <H6 className='whitespace-nowrap text-skin-primary'>The Game Space</H6>
      </div>

      <NavLinks
        className={`absolute top-10 
        rounded-md bg-skin-primary p-5 space-y-4 
        shadow-success
        transition-all duration-500
        
        lg:flexCC lg:relative lg:space-x-5 lg:space-y-0 lg:p-0 lg:top-0 lg:shadow-none lg:bg-transparent lg:border-none 
        lg:opacity-100 lg:scale-100
        ${open ? 'w-0 opacity-0 scale-0' : 'border w-3/4 opacity-100'}
        `}
      />

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
