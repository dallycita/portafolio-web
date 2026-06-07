import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoFirst}>Dally</span> Ramírez
      </div>
      <ul className={styles.links}>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#arquitectura">Arquitectura</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  )
}
