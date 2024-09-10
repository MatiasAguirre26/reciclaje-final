'use client'; // Este componente es del lado del cliente

import { useState } from 'react';
import styles from '../../styles/register.module.css';

export default function RegisterForm() {
  // Estado para manejar los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState(''); // Estado para mostrar mensajes de éxito o error

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejador de envío del formulario 
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página
  
    try {
      const res = await fetch('http://localhost:3002/api/auth/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        // Verifica si el error es un objeto y extrae el mensaje de error si existe
        throw new Error(data.error || data.message || 'Error al registrar el usuario');
      }
  
      setMessage('Registro exitoso.'); // Mensaje de éxito
    } catch (error) {
      // Si el error es un objeto con más detalles, conviértelo a cadena de texto
      setMessage(error.message || 'Error desconocido'); // Mensaje de error más claro
    }
  };
  

  return (
    <div className={styles.registerContainer}>
      <div className={styles.backButton}>
        <span>&larr;</span>
      </div>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2>Registrarse</h2>
        <button type="button" className={styles.googleButton}>
          G Registrarse con Google
        </button>
        <label>
          Nombre Completo
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nombre de usuario
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo electrónico
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contraseña
          <div className={styles.passwordInput}>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="button" className={styles.showPasswordButton}>
              👁️
            </button>
          </div>
        </label>
        <label>
          Confirmar contraseña
          <div className={styles.passwordInput}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="button" className={styles.showPasswordButton}>
              👁️
            </button>
          </div>
        </label>
        <button type="submit" className={styles.registerButton}>
          Registrarse
        </button>
        <p>
          Ya tengo una cuenta{' '}
          <a href="login" className={styles.loginLink}>
            Iniciar sesión
          </a>
        </p>
        {message && <p className={styles.message}>{message}</p>} {/* Mensaje de error o éxito */}
      </form>
    </div>
  );
}
