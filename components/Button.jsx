import React from 'react';

const Button = ({ onClick, children, icon }) => {
  return (
    <button
      className="mt-4 text-center rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background h-14 px-6 py-4 flex items-center gap-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      onClick={onClick}
    >
      {icon && <span className="h-4 w-4">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
