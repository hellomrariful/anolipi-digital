import React from 'react';
import cn from './utils/cn'; // Assuming you have a utility function 'cn' to handle class names

const Button = ({ onClick, children, icon, className, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={cn(
        "text-center rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background h-[50px] px-6 py-4 flex items-center gap-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      type="button"
      onClick={onClick}
    >
      {icon && <span className="h-4 w-4">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
