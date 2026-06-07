import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const { index, title, featured, badge, description, tags, deploy, repo, image } = project

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.preview}>
        <img src={image} alt={title} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.body}>
        <p className={styles.index}>{index}</p>
        {badge && <span className={styles.badge}>{badge}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={deploy} target="_blank" rel="noopener noreferrer" className={styles.primary}>
            Ver deploy →
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
