'use client';
import { GameList } from '@/components/GameList';
import { Navbar } from '@/components/navbar/page';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className='flex justify-between m-2'>
      <Navbar />
    </div>
  );
};

export default Home;
