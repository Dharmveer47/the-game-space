import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  onClick?: () => void;
  props?: any;
  [key: string]: any;
  icon?: React.ReactNode | string;
};

function Button({ className, children, variant, onClick, icon, ...props }: Readonly<Props>) {
  const getVariant = () => {
    switch (variant) {
      case 'primary':
        return 'text-skin-primary bg-skin-primary border-skin-primary shadow-primary';
      case 'secondary':
        return 'text-skin-secondary bg-skin-secondary border-skin-secondary shadow-secondary';
      case 'danger':
        return 'text-skin-danger bg-skin-danger border-skin-danger shadow-danger';
      case 'success':
        return 'text-skin-success bg-skin-success border-skin-success shadow-success';
      default:
        return ''; // default styles
    }
  };

  const variantStyles = getVariant();

  return (
    <button
      type='button'
      className={`
        font-medium rounded-lg
        text-sm m-2
        px-5 py-2.5 text-center me-2 mb-2 
        active:bg-skin-neutral
        hover:tracking-wider
        cursor-pointer p-1    
        
     select-none hover:scale-110 transition-all 
        ${variantStyles}
        ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className='flexIc gap-2'>
        {icon} {children}
      </span>
    </button>
  );
}

export default Button;
