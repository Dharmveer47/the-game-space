'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks } from './navList';
import { usePathname } from 'next/navigation';

import { CiLight, CiDark } from 'react-icons/ci';
import { IconBtn } from '../uis';

type Props = {
  className?: string;
};

export const NavLinks = ({ className }: Props) => {
  const pathname = usePathname();
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleToggleTheme = () => {
    setToggleTheme((prevTheme) => !prevTheme);

    // Toggle the class on the body element
    document.body.classList.toggle('theme-dark');
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDarkMode =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDarkMode
        ? document.body.classList.add('theme-dark')
        : document.body.classList.remove('theme-dark');
      setToggleTheme(isDarkMode);
    }
  }, []);
  const ToggleIcon = toggleTheme ? CiDark : CiLight;

  return (
    <ul className={`${className}`}>
      {navLinks.map((link) => (
        <li
          key={link.linkName}
          className='text-skin-primary text-sm  
        border-skin-primary group p-0 m-0 '
        >
          <Link key={link.linkName} href={link.path} className='whitespace-nowrap'>
            {link.name}
          </Link>
          <div
            className={`bg-skin-danger w-10 h-0.5 mt scale-0 ${
              pathname === link.path ? 'scale-100' : ''
            }
          group-hover:scale-100  ease-linear duration-150`}
          ></div>
        </li>
      ))}
      <li
        className='text-skin-primary text-sm  
        border-skin-primary group p-0 m-0'
      >
        <IconBtn className='border' label='theme' onClick={handleToggleTheme}>
          <ToggleIcon className='w-6  h-auto transition-all animate-scale ' />
        </IconBtn>
      </li>
    </ul>
  );
};
