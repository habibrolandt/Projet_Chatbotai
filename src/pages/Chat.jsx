// src/pages/Chat.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import EnteteApp from '../composants/EnteteApp';


const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, texte: "Bonjour ! Comment puis-je vous aider aujourd'hui ?", expediteur: 'bot' }
  ]);
  const [saisie, setSaisie] = useState('');

  const envoyerMessage = (e) => {
    e.preventDefault();
    if (saisie.trim() === '') return;

    const nouveauMessage = { id: Date.now(), texte: saisie, expediteur: 'utilisateur' };
    setMessages([...messages, nouveauMessage]);
    setSaisie('');
    setIsLoading(true);

    

    // Simuler une réponse du bot
    setTimeout(() => {
      const reponseBot = { id: Date.now(), texte: "Je comprends. Pouvez-vous m'en dire plus ?", expediteur: 'bot' };
      setMessages(prevMessages => [...prevMessages, reponseBot]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <EnteteApp titre="Chatbot" onRetour={() => navigate('/')} />
      <main className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2 text-teal-600">Conversation avec Chatbot.AI</h2>
        <p className="text-center text-gray-600 mb-4">Posez vos questions, je suis là pour vous aider !</p>
        <div className="bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-2 ${message.expediteur === 'utilisateur' ? 'text-right' : 'text-left'}`}
            >
              <div
                className={`inline-block max-w-xs rounded-lg p-2 ${
                  message.expediteur === 'utilisateur'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.texte}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={envoyerMessage} className="flex">
          <input
            type="text"
            value={saisie}
            onChange={(e) => setSaisie(e.target.value)}
            placeholder="Tapez votre message..."
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white p-2 rounded-r-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <Send size={20} />
          </button>
        </form>
      </main>
    </div>
  );
};

export default Chat;