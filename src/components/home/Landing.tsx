import React from 'react';

//Components
import { Background } from '../uis/img/Background';
import { singleData, singleDetails } from '@/data/api/getList';
import { H1, IconBtn, P } from '../uis';
import TF2Description from '../uis/text/clientText';
import Button from '../uis/button/button';

// Icons
import { FcRating, FcReddit } from 'react-icons/fc';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { ImNewTab } from 'react-icons/im';

// Next
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className='px-4 lg:px-10'>
      <Background
        imgScr={singleData.background_image}
        alt='background'
        className='opacity-50 
        object-cover
        translate-z
      '
      />
      <div className='mt-10 min-h-[90vh] lg:min-h-[90vh]   w-full flex items-center justify-start -z-10'>
        <div className=' text-skin-primary space-y-5'>
          <H1>{singleDetails.name_original}</H1>

          <TF2Description
            des={singleDetails.description}
            className='text-sm font-thins w-full  
           lg:w-3/4 max-h-[40vh]  lg:h-40 p-2
           overflow-y-auto 
           shadow-neutral leading-6 tracking-wide backdrop-blur-sm '
          />
          <div id='rating' className='flex items-center gap-3'>
            <P className='flex items-center gap-1'>
              <FcRating size={20} /> {singleDetails.rating}
            </P>

            <Link href={singleDetails.website} target='_blank'>
              <IconBtn>
                <ImNewTab className=' ' />
              </IconBtn>
            </Link>
            <Link href={singleDetails.reddit_url} target='_blank'>
              <IconBtn>
                <FcReddit className='w-6 h-6' />
              </IconBtn>
            </Link>
          </div>
          <div>
            <Button variant='primary' icon={<MdOutlineSlowMotionVideo />}>
              Watch The Game
            </Button>
            <Button variant='secondary' icon={<MdOutlineSlowMotionVideo />}>
              View More
            </Button>
          </div>
          <div className=' flex gap-4 overflow-x-auto overflow-y-hidden w-[92vw]'>
            {singleDetails.tags.map((tag) => (
              <div
                key={tag.id}
                className='p-1 max-h-28 w-full 
             min-w-max backdrop-blur-sm group
             relative
             shadow-inner shadow-skin-primary rounded-lg'
              >
                <P
                  className='absolute bottom-0
                 p-2 w-full text-center text-shadow-lg
                 lg:scale-0 group-hover:scale-100 
                 backdrop-blur-sm text-lg
                 transition-all
               text-skin-primary whitespace-nowrap '
                >
                  {tag.name}
                </P>
                <Image
                  src={tag.image_background}
                  loading='lazy'
                  alt={tag.name}
                  width={180}
                  height={90}
                  className='object-cover '
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
