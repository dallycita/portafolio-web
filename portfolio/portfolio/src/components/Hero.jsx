import avatarImg from '../assets/avatar.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          Ingeniería de Frontend
        </div>

        <h1 className={`${styles.heading} fade-up fade-up-1`}>
          Código que<br />se <em>piensa</em><br />antes de escribirse.
        </h1>

        <p className={`${styles.bio} fade-up fade-up-2`}>
          Frontend developer con enfoque en calidad, arquitectura limpia y testing riguroso.
          Construyo interfaces que funcionan por dentro tan bien como se ven por fuera.
        </p>

        <a href="#proyectos" className={`${styles.cta} fade-up fade-up-3`}>
          Ver proyectos <span className={styles.arrow}>→</span>
        </a>
      </div>

      <div className={styles.visual}>
        <img src={avatarImg} alt="Dally Ramírez" className={styles.avatar} />
        <div className={styles.codeBlock}>
          <div className={styles.codeLine}>
            <span className={styles.kw}>const</span>{' '}
            <span className={styles.fn}>useCalculadora</span> = () {'=>'} {'{'}
          </div>
          <div className={styles.codeLine}>
            &nbsp;&nbsp;<span className={styles.kw}>const</span> [state, dispatch] = useReducer(…)
          </div>
          <div className={styles.codeLine}>
            &nbsp;&nbsp;<span className={styles.kw}>return</span> {'{ operate, clear, toggle }'}
          </div>
          <div className={styles.codeLine}>{'}'}</div>
          <div className={styles.codeLine} style={{ marginTop: '0.5rem' }}>
            <span className={styles.kw}>export const</span>{' '}
            <span className={styles.fn}>crc32</span> = (data) {'=>'} {'{'}
          </div>
          <div className={styles.codeLine}>
            &nbsp;&nbsp;<span className={styles.str}>{'// byte-by-byte, sin librerías'}</span>
          </div>
          <div className={styles.codeLine}>{'}'}</div>
        </div>
      </div>
    </section>
  )
}
