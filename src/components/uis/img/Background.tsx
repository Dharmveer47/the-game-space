import Image from 'next/image';
import React from 'react';

type Props = {
  className?: string;
  imgScr: string;
  alt: string;
  props?: any;
};

export const Background = ({ className, imgScr, alt, ...props }: Props) => {
  return (
    <Image
      alt={alt}
      src={imgScr}
      sizes='100vw'
      quality={100}
      fill
      className={`object-cover -z-10 ${className}`}
      {...props}
    />
  );
};
