import React from 'react';
import Link from 'next/link';
import { navLinks } from './navList';
type Props = {
  className?: string;
};

export const NavLinks = ({ className }: Props) => {
  return (
    <ul className={`${className}`}>
      {navLinks.map((link) => (
        <li
          key={link.linkName}
          className='text-skin-primary text-sm  
        border-skin-primary group'
        >
          <Link key={link.linkName} href={link.path} className=''>
            {link.name}
          </Link>
          <div
            className='bg-skin-danger w-10 h-0.5 mt scale-0 
          group-hover:scale-100  ease-linear duration-150'
          ></div>
        </li>
      ))}
    </ul>
  );
};