'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/register.module.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);

    if (formData.password !== formData.confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('Respuesta del servidor:', data); // Verifica la respuesta

      if (!res.ok) {
        throw new Error(data.message || 'Error al registrar el usuario');
      }

      setMessage('Registro exitoso. Redirigiendo a la página de inicio de sesión...');
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    } catch (error) {
      console.error('Error en el registro:', error);
      setMessage(error.message);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <h2>Registrarse</h2>
        {message && <p className={styles.errorMessage}>{message}</p>}
        <label>
          Nombre completo
          <input type="text" name="name" onChange={handleChange} value={formData.name} required />
        </label>
        <label>
          Nombre de usuario
          <input type="text" name="username" onChange={handleChange} value={formData.username} required />
        </label>
        <label>
          Correo electrónico
          <input type="email" name="email" onChange={handleChange} value={formData.email} required />
        </label>
        <label>
          Contraseña
          <input type="password" name="password" onChange={handleChange} value={formData.password} required />
        </label>
        <label>
          Confirmar contraseña
          <input type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} required />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
