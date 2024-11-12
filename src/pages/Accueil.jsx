// src/pages/Accueil.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EnteteApp from '../composants/EnteteApp';
import BoutonAction from '../composants/BoutonAction';

const Accueil = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <EnteteApp titre="Chatbot.AI" />
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Bienvenue sur Chatbot.AI</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          Je suis là pour répondre à vos questions et vous aider dans vos taches. Comment puis-je vous assister aujourd'hui ?
        </p>
        <BoutonAction onClick={() => navigate('/chat')}>
          Démarrer une conversation
        </BoutonAction>
      </main>
      <footer className="bg-gray-200 p-4 text-center text-gray-600">
        Club Machine Learning ESATIC  - Projet_Pratique
      </footer>
    </div>
  );
};

export default Accueil;