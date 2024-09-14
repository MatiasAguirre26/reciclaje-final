'use client'
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import styles from '@/styles/login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false, // Desactiva la redirección automática
      email,
      password,
    });

    if (res.error) {
      setError(res.error);
    } else {
      // Redirigir al usuario a la página de inicio u otra ruta deseada
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Iniciar sesión</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <label>
          Correo electrónico
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
console.log(process.env.NEXT_PUBLIC_API_URL);