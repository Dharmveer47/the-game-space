import React from 'react';
type Props = {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
};

export const Input = ({ name, type, placeholder, className, ...props }: Props) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`${className} bg-transparent outline-none 
        p-1 px-3 pr-7 text-sm 
        sm:w-auto animate-pulse focus:animate-none
        focus:outline-none focus:shadow-md focus:drop-shadow-md focus:rounded-full
        focus:border-skin-primary focus:transition-all duration-1000   focus-within:w-full 
        `}
      {...props}
    />
  );
};
