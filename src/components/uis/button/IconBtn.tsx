import React from 'react';
type Props = {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  props?: any;
};

export const IconBtn = ({ className, children = '', label, onClick, ...props }: Props) => {
  return (
    <button
      className={`${className} cursor-pointer p-1 px-2  rounded-full 
      hover:bg-gray-100 
      hover:text-black 
      active:bg-gray-400 select-none hover:scale-110 transition-all border-skin-primary`}
      aria-label={label}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
