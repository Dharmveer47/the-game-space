'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  className?: string;
  imgScr: string;
  alt: string;
  props?: any;
};

export const Background = ({ className, imgScr, alt, ...props }: Props) => {
  const [hue, setHue] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHue((pre) => {
        return pre > 360 ? 0 : pre + 1;
      });
    }, 400);
    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Image
      alt={alt}
      src={imgScr}
      // sizes='100vw'
      quality={100}
      fill
      //  style={{
      //    filter: `hue-rotate(${hue}deg)`,
      //  }}
      className={`object-cover -z-10  ${className}`}
      {...props}
    />
  );
};
