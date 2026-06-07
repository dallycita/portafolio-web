import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>01</span>
        <h2 className={styles.heading}>Proyectos</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
