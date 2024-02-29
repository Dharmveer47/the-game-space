import React from 'react';
import Landing, { GameList } from '@/components/home';
import { getGameList } from '@/data/api/getList';

const Home = async () => {
  const data = await getGameList();
  if (!data) return null;
  const singleData = data.results[Math.floor(Math.random() * data.results.length)].id;
  return (
    <div className='w-full flexIc flex-col text-skin-primary'>
      <Landing dataId={singleData} />
      <GameList data={data} />
    </div>
  );
};

export default Home;
