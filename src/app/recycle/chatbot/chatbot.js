'use client';

import { ChatbotRoute } from '@/app/api/chat/route';
import styles from '@/styles/chatbot.module.css'; 
import { useState } from 'react';

const ChatComponent = ({ onClose }) => {
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPredefinedQuestions, setShowPredefinedQuestions] = useState(true);

  const predefinedQuestions = [
    '¿Cómo clasificar plásticos?',
    '¿Qué tipo de vidrio puedo reciclar?',
    '¿Dónde puedo reciclar cartón?',
    '¿Cómo canjear mis puntos?',
    '¿Cómo clasifico el papel?'
  ];

  const handleAsk = async (userQuestion) => {
    if (!userQuestion) return;

    setLoading(true);
    setResponses(prev => [...prev, { text: userQuestion, type: 'user' }]);

    try {
      const res = await fetch('http://localhost:3002/api/chatbot/ask', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userQuestion }), 
      });

      if (!res.ok) {
        throw new Error('Error en la respuesta del servidor.');
      }

      const data = await res.json();
      setResponses(prev => [...prev, { text: data.answer, type: 'bot' }]);
    } catch (error) {
      setResponses(prev => [...prev, { text: 'Error: ' + error.message, type: 'bot' }]);
    } finally {
      setLoading(false);
      setQuestion('');
      setShowPredefinedQuestions(false); // Ocultar el menú después de enviar la pregunta
    }
  };

  const handlePredefinedQuestionClick = (predefinedQuestion) => {
    setQuestion(predefinedQuestion);
    handleAsk(predefinedQuestion);
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div> {/* Fondo semitransparente */}
      <div className={styles.recycleContainer}>
        <h2 className="text-2xl mb-4">Greene Helper</h2>
        
        <div className={styles.chatContainer}>
          <div className={styles.messages}>
            {responses.map((response, index) => (
              <div key={index} className={response.type === 'user' ? styles.userMessage : styles.botMessage}>
                {response.text}
              </div>
            ))}
            {loading && <div className={styles.botMessage}>Cargando...</div>}
          </div>
        </div>

        {/* Mostrar preguntas predefinidas solo si no se ha escrito una pregunta */}
        {showPredefinedQuestions && (
          <div className={styles.predefinedQuestions}>
            {predefinedQuestions.map((predefinedQuestion, index) => (
              <button 
                key={index} 
                className={styles.questionButton} 
                onClick={() => handlePredefinedQuestionClick(predefinedQuestion)}
              >
                {predefinedQuestion}
              </button>
            ))}
          </div>
        )}

        <textarea
          className={styles.chatInput}
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            if (e.target.value !== '') {
              setShowPredefinedQuestions(false); // Ocultar preguntas predefinidas al escribir
            }
          }}
          placeholder="Escribe tu pregunta..."
        />

        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={styles.closeButton}>Cerrar</button>
          <button className={styles.sendButton} onClick={() => handleAsk(question)}>Enviar</button>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
