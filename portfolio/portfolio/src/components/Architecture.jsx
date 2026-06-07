import { useState } from 'react'
import styles from './Architecture.module.css'

const nodes = [
  {
    icon: '🖥',
    label: 'UI Layer',
    sub: 'DOM / HTML',
    title: 'UI Layer — interfaz del usuario',
    detail:
      'La capa de presentación está construida con HTML semántico y CSS nativo. Cada acción del usuario (agregar serie, editar, filtrar) dispara un evento custom que viaja por el sistema sin acoplamiento directo entre módulos.',
  },
  {
    icon: '⚡',
    label: 'Event Bus',
    sub: 'ES Modules',
    title: 'Event Bus — comunicación entre módulos',
    detail:
      'Usando ES Modules nativos como sistema de comunicación. No hay un framework que gestione el estado — los módulos se suscriben a eventos y reaccionan de forma desacoplada. Vanilla JS con disciplina de arquitectura.',
  },
  {
    icon: '🔧',
    label: 'Core Logic',
    sub: 'CRUD / State',
    title: 'Core Logic — lógica de negocio',
    detail:
      'Toda la lógica de CRUD vive aquí: crear, leer, actualizar y eliminar series. El estado se gestiona de forma centralizada. Los módulos de UI solo consumen datos, nunca los mutan directamente.',
  },
  {
    icon: '🌐',
    label: 'REST API',
    sub: 'fetch()',
    title: 'REST API — persistencia de datos',
    detail:
      'Las operaciones CRUD llegan a una API REST propia mediante fetch(). La capa de red está abstraída en un módulo separado — cambiar el endpoint no toca la lógica de presentación.',
  },
  {
    icon: '☁',
    label: 'Cloudinary',
    sub: 'img upload',
    title: 'Cloudinary — gestión de imágenes',
    detail:
      'Las imágenes de portada se suben directamente a Cloudinary. El módulo maneja la autenticación, la subida y devuelve la URL pública que queda almacenada junto al resto de datos de la serie.',
  },
  {
    icon: '📊',
    label: 'XLSX Export',
    sub: 'CRC32 propio',
    title: 'XLSX Export — exportador propio',
    detail:
      'El exportador construye el archivo .xlsx byte a byte, implementando el estándar OOXML manualmente con un CRC32 propio — cero librerías externas. Demuestra comprensión profunda de formatos binarios y estructuras de datos.',
  },
]

export default function Architecture() {
  const [active, setActive] = useState(0)

  return (
    <section id="arquitectura" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>02</span>
          <h2 className={styles.heading}>Arquitectura interactiva</h2>
        </div>
        <p className={styles.subtitle}>
          Cómo fluyen los datos en Vault Series Tracker — haz clic en cada nodo para explorar.
        </p>

        <div className={styles.flow}>
          <p className={styles.flowLabel}>Vault · flujo de datos</p>

          <div className={styles.nodes}>
            {nodes.map((node, i) => (
              <>
                <button
                  key={node.label}
                  className={`${styles.node} ${active === i ? styles.nodeActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <span className={styles.nodeIcon}>{node.icon}</span>
                  <span className={styles.nodeLabel}>{node.label}</span>
                  <span className={styles.nodeSub}>{node.sub}</span>
                </button>
                {i < nodes.length - 1 && (
                  <span
                    key={`arrow-${i}`}
                    className={`${styles.arrow} ${i < active ? styles.arrowLit : ''}`}
                  >
                    →
                  </span>
                )}
              </>
            ))}
          </div>

          <div className={styles.detail}>
            <p className={styles.detailTitle}>{nodes[active].title}</p>
            <p className={styles.detailText}>{nodes[active].detail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
