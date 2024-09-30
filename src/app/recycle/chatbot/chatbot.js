'use client';

import { useState } from 'react';
import styles from '@/styles/chatbot.module.css'; 

const ChatComponent = ({ onClose }) => {
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;

    setLoading(true);
    setResponses(prev => [...prev, { text: question, type: 'user' }]);
    
    try {
      const res = await fetch('http://localhost:3002/api/chatbot/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
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
    }
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
        <textarea
          className={styles.chatInput}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Escribe tu pregunta..."
        />
<div className={styles.buttonContainer}>
  <button onClick={onClose} className={styles.closeButton}>Cerrar</button>
  <button className={styles.sendButton} onClick={handleAsk}>Enviar</button>
</div>

      </div>
    </>
  );
};
export default ChatComponent
