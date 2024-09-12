// 'use client'; // Este componente es del lado del cliente

// import { useState } from 'react';
// import styles from '../../styles/register.module.css';

// export default function RegisterForm() {
//   // Estado para manejar los campos del formulario
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [message, setMessage] = useState(''); // Estado para mostrar mensajes de éxito o error

//   // Manejador de cambios en los inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Manejador de envío del formulario 
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Evita la recarga de la página
  
//     try {
//       const res = await fetch('http://localhost:3002/api/auth/register', { 
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await res.json();
  
//       if (!res.ok) {
//         // Verifica si el error es un objeto y extrae el mensaje de error si existe
//         throw new Error(data.error || data.message || 'Error al registrar el usuario');
//       }
  
//       setMessage('Registro exitoso.'); // Mensaje de éxito
//     } catch (error) {
//       // Si el error es un objeto con más detalles, conviértelo a cadena de texto
//       setMessage(error.message || 'Error desconocido'); // Mensaje de error más claro
//     }
//   };
  

//   return (
//     <div className={styles.registerContainer}>
//       <div className={styles.backButton}>
//         <span>&larr;</span>
//       </div>
//       <form className={styles.registerForm} onSubmit={handleSubmit}>
//         <h2>Registrarse</h2>
//         <button type="button" className={styles.googleButton}>
//           G Registrarse con Google
//         </button>
//         <label>
//           Nombre Completo
//           <input
//             type="text"
//             name="name"
//             placeholder="Nombre Completo"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Nombre de usuario
//           <input
//             type="text"
//             name="username"
//             placeholder="Nombre de usuario"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Correo electrónico
//           <input
//             type="email"
//             name="email"
//             placeholder="Correo electrónico"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Contraseña
//           <div className={styles.passwordInput}>
//             <input
//               type="password"
//               name="password"
//               placeholder="Contraseña"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <button type="button" className={styles.showPasswordButton}>
//               👁️
//             </button>
//           </div>
//         </label>
//         <label>
//           Confirmar contraseña
//           <div className={styles.passwordInput}>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirmar contraseña"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             <button type="button" className={styles.showPasswordButton}>
//               👁️
//             </button>
//           </div>
//         </label>
//         <button type="submit" className={styles.registerButton}>
//           Registrarse
//         </button>
//         <p>
//           Ya tengo una cuenta{' '}
//           <a href="login" className={styles.loginLink}>
//             Iniciar sesión
//           </a>
//         </p>
//         {message && <p className={styles.message}>{message}</p>} {/* Mensaje de error o éxito */}
//       </form>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/register.module.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',  // Corregido de 'usermame' a 'username'
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

    if (formData.password !== formData.confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await fetch('http://localhost:3002/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error al registrar el usuario');
      }

      setMessage('Registro exitoso. Redirigiendo a la página de inicio de sesión...');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
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
