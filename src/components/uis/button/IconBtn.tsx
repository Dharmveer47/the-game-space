import React from 'react';
type Props = {
  className?: string;
  children?: React.ReactNode | string;
  label?: string;
  onClick?: () => void;
  props?: any;
};

export const IconBtn = ({ className, children = '', label, onClick, ...props }: Props) => {
  return (
    <button
      className={`${className} cursor-pointer p-1   rounded-full  
      hover:bg-skin-primary
      hover:text-skin-primary
      active:bg-skin-secondary select-none hover:scale-110 transition-all border-skin-primary`}
      aria-label={label}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
