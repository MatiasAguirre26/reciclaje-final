import styles from '../../styles/register.module.css';

export default function RegisterForm() {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.backButton}>
        <span>&larr;</span>
      </div>
      <form className={styles.registerForm}>
        <h2>Registrarse</h2>
        <button type="button" className={styles.googleButton}>
          G Registrarse con Google
        </button>
        <label>
          Nombre de usuario
          <input type="text" placeholder="Nombre de usuario" required />
        </label>
        <label>
          Correo electrónico
          <input type="email" placeholder="Correo electrónico" required />
        </label>
        <label>
          Contraseña
          <div className={styles.passwordInput}>
            <input type="password" placeholder="Contraseña" required />
            <button type="button" className={styles.showPasswordButton}>
              👁️
            </button>
          </div>
        </label>
        <label>
          Confirmar contraseña
          <div className={styles.passwordInput}>
            <input type="password" placeholder="Confirmar contraseña" required />
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
      </form>
    </div>
  );
};
