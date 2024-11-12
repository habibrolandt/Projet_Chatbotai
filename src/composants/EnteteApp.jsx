import React from 'react';
import { ArrowLeft } from 'lucide-react';

const EnteteApp = ({ titre, onRetour }) => {
  return (
    <header className="bg-teal-600 text-white p-4 flex items-center">
      {onRetour && (
        <button onClick={onRetour} className="mr-4">
          <ArrowLeft size={24} />
        </button>
      )}
      <h1 className="text-xl font-semibold">{titre}</h1>
    </header>
  );
};

export default EnteteApp;