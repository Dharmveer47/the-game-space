import { H1, P } from '@/components/uis';
import Button from '@/components/uis/button/button';
import { Background } from '@/components/uis/img/Background';
import TF2Description from '@/components/uis/text/clientText';
import { API_URL, singleData, singleDetails } from '@/data/api/getList';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import React from 'react';
const Home = async () => {
  console.log(API_URL);

  return (
    <div className='px-4 lg:px-10'>
      <Background imgScr={singleData.background_image} alt='background' className='opacity-50' />
      <div className='mt-10 min-h-[60vh] lg:min-h-[80vh]   w-full flex items-center justify-start -z-10'>
        <div className=' text-skin-primary space-y-5'>
          <H1>{singleDetails.name_original}</H1>

          <TF2Description
            des={singleDetails.description}
            className='w-full  lg:w-3/4  h-40 overflow-y-auto shadow-neutral leading-6 tracking-wide'
          />
          <Button variant='primary' icon={<MdOutlineSlowMotionVideo />}>
            Watch The Game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
