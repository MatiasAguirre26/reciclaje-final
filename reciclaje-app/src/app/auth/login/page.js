import styles from '../../styles/login.module.css';

export default function Login() {
    return (
        <div className={styles.loginContainer}>
        <div className={styles.backButton}>
          <span>&larr;</span>
        </div>
        <form className={styles.loginForm}>
          <h2>Iniciar sesión</h2>
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
          <div className={styles.options}>
            <label>
              <input type="checkbox" />
              Mantener la sesión abierta
            </label>
            <a href="#" className={styles.forgotPassword}>
              No recuerdo la contraseña
            </a>
          </div>
          <button type="submit" className={styles.loginButton}>
            Iniciar sesión
          </button>
          <button type="button" className={styles.googleButton}>
            G Continuar con Google
          </button>
          <p>
            Aún no tengo cuenta{' '}
            <a href="register" className={styles.registerLink}>
              Registrarse
            </a>
          </p>
        </form>
      </div>
    );
  }