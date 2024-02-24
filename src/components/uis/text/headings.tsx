import React from 'react';
type Props = {
  children: React.ReactNode;
  className?: string;
};

export const H1 = ({ children, className, ...props }: Props) => {
  return (
    <h1 className={` text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${className}`}>{children}</h1>
  );
};

export const H2 = ({ children, className, ...props }: Props) => {
  return (
    <h2 className={`shadow-md text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${className}`}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, ...props }: Props) => {
  return (
    <h3 className={`  text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${className}`}>{children}</h3>
  );
};

export const H4 = ({ children, className, ...props }: Props) => {
  return (
    <h4 className={` text-xl md:text-2xl lg:text-3xl xl:text-4xl ${className}`}>{children}</h4>
  );
};

export const H5 = ({ children, className, ...props }: Props) => {
  return <h5 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl ${className}`}>{children}</h5>;
};

export const H6 = ({ children, className, ...props }: Props) => {
  return (
    <h6 className={` text-base md:text-lg lg:text-xl xl:text-2xl ${className}`}>{children}</h6>
  );
};

export const P = ({ children, className, ...props }: Props) => {
  return (
    <p className={` text-sm shadow-inner  ${className}`} {...props}>
      {children}
    </p>
  );
};
