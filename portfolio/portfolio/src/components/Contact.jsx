import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>03</span>
        <h2 className={styles.heading}>Sobre mí &amp; contacto</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.about}>
          <h3 className={styles.aboutTitle}>
            Frontend que entiende<br />lo que hay detrás.
          </h3>
          <p>
            Desarrollo interfaces con React y TypeScript con un foco real en calidad:
            testing desde el primer commit, CI/CD que cuida cada deploy y arquitectura
            modular que escala sin caos.
          </p>
          <p>
            Me interesa el espacio donde el diseño y la ingeniería se encuentran — donde
            una buena decisión de componente hace que todo lo demás sea más fácil.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4</span>
              <span className={styles.statLabel}>proyectos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>~95%</span>
              <span className={styles.statLabel}>coverage</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>0</span>
              <span className={styles.statLabel}>libs p/ XLSX</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>¿Hablamos?</h3>
          <p className={styles.cardSub}>
            Abierta a oportunidades en equipos donde el código sea tomado en serio.
          </p>
          <a
            href="https://github.com/dallycita"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ghLink}
          >
            <span className={styles.ghIcon}>⌥</span>
            <span className={styles.ghText}>
              <span className={styles.ghLabel}>GitHub</span>
              <span className={styles.ghValue}>github.com/dallycita</span>
            </span>
            <span className={styles.ghArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
