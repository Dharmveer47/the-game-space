'use client';
import React, { useState } from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });
import { IoMenu, IoSearch, IoClose } from 'react-icons/io5';
import { CiLight, CiDark } from 'react-icons/ci';
import { H6, IconBtn, Input } from '../uis';
import { NavLinks } from './navLinks';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  const Icon = open ? IoClose : IoMenu;
  const ToggleIcon = toggleTheme ? CiDark : CiLight;

  const handleToggleTheme = () => {
    setToggleTheme((prevTheme) => !prevTheme);

    // Toggle the class on the body element
    document.body.classList.toggle('theme-dark');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <nav
      className={`${orbitron.className} 
      fixed w-full top-0 backdrop-blur-md
      `}
    >
      <main className='flexSbIc text-skin-primary m-1 lg:m-2 '>
        <div className='flexIc'>
          <IconBtn className=' mr-3  lg:hidden' label='Menu' onClick={handleOpen}>
            <Icon className='w-6  h-auto animate-scale ' />
          </IconBtn>
          <H6 className='whitespace-nowrap text-skin-primary'>The Game Space</H6>
        </div>

        <NavLinks
          className={`absolute top-10 
        rounded-md bg-skin-primary  p-5 space-y-4 
        shadow-success
        transition-all duration-500
        
        lg:flexCC lg:relative lg:space-x-5 lg:space-y-0 lg:p-0 lg:top-0 lg:shadow-none lg:bg-transparent lg:border-none 
        lg:opacity-100 lg:scale-100
        ${!open ? 'w-0 opacity-0 scale-0' : 'border w-3/4 opacity-100'}
        `}
        />

        <span className={`flexIc`}>
          <span>
            <IconBtn className=' mr-3 border' label='theme' onClick={handleToggleTheme}>
              <ToggleIcon className='w-6  h-auto transition-all animate-scale ' />
            </IconBtn>
          </span>
          <form onSubmit={handleSubmit} className={`flexIc relative`}>
            <Input
              type='text'
              placeholder='Search_'
              name='search'
              className='w-36 border rounded-full border-skin-primary'
            />
            <IconBtn className=' w-7 h-full flexCC absolute right-0 ' label='Search'>
              <IoSearch />
            </IconBtn>
          </form>
        </span>
      </main>
    </nav>
  );
};

// https://codepen.io/gayane-gasparyan/pen/wvxewXO
