import React from 'react';
import { H1, P } from '../uis';
import { ApiResponse } from '@/data/api';
import Image from 'next/image';

type Props = {
  data: ApiResponse;
};

const GameList = (props: Props) => {
  const { results } = props.data;
  return (
    <div>
      <H1 className='text-center my-4 shadow-inner backdrop-blur text-skin-secondary'>
        Popular Games
      </H1>
      <div className='relative'>
        {/* Image for background */}
        <Image
          alt='background'
          src={results[Math.floor(Math.random() * results.length)].background_image}
          fill
          className='object-cover -z-10 opacity-50 absolute'
        />
        <ul className=' flex flex-wrap justify-around lg:justify-center w-full'>
          {results.map((result) => (
            <li
              key={result.id}
              className='min-w-80  p-2 m-3 
            flexCC flex-col
             -skew-x-6 -skew-y-3
            border-skin-danger
           bg-gradient-to-r from-skin-primary via-skin-secondary to-skin-neutral
           shadow-skin-primary
           backdrop-hue-rotate-15
           backdrop-blur-sm
           backdrop-filter
           
           group
           hover:-translate-y-4 transition-all relative
           cursor-pointer
           
           
          '
            >
              <P className='text-center group-hover:tracking-wide w-36 text-ellipsis'>
                {result.name}
              </P>
              {/* <div
                className='absolute -top-3 -right-5 backdrop-blur-sm shadow-skin-success
                backdrop-brightness-50 
                backdrop-contrast-100
              rounded-full flexCC 
              scale-0 group-hover:scale-100 transition-all
              w-10 h-10 text-sm font-light'
              >
                {result.rating}
              </div> */}
              <div
                className=' group-hover:scale-125
              group-hover:translate-y-5
              group-hover:z-10
              group-hover:translate-x-1
                transition-all'
              >
                <Image
                  alt={result.name}
                  src={result.background_image}
                  width={200}
                  height={200}
                  className='object-cover 
                relative 
                shadow-secondary
                '
                />
              </div>
            </li>
          ))}
          I
        </ul>
      </div>
    </div>
  );
};

export default GameList;
