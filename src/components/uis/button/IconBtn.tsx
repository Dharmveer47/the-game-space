import React from 'react';
type Props = {
  className?: string;
  children?: React.ReactNode;
  label?: string;
};

export const IconBtn = ({ className, children = '', label, ...props }: Props) => {
  return (
    <button
      className={`${className} cursor-pointer p-1 px-2  rounded-full 
      hover:bg-gray-100 
      hover:text-black 
      active:bg-gray-400 select-none hover:scale-110 transition-all`}
      aria-label={label}
    >
      {children}
    </button>
  );
};
