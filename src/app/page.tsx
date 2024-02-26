import React from 'react';
import { API_URL } from '@/data/api/getList';
import Landing, { GameList } from '@/components/home';

const Home = async () => {
  console.log(API_URL);

  return (
    <>
      <Landing />
      <GameList />
    </>
  );
};

export default Home;
