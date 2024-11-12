import React from 'react';

const BoutonAction = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </button>
  );
};

export default BoutonAction;