import vaultImg from '../assets/vault.png'
import calcImg from '../assets/calculadora.png'
import passwordImg from '../assets/password.png'
import snakeImg from '../assets/snake.png'

export const projects = [
  {
    id: 'vault',
    index: 'Proyecto estrella',
    title: 'Vault Series Tracker',
    featured: true,
    badge: '✦ Destacado',
    description:
      'Tracker de series con JS Vanilla puro. Arquitectura modular con ES Modules nativos, CRUD contra API REST propia, subida de imágenes a Cloudinary y exportador XLSX construido byte a byte con CRC32 propio — sin ninguna librería externa.',
    tags: ['Vanilla JS', 'ES Modules', 'REST API', 'Cloudinary', 'XLSX nativo', 'CRC32 propio'],
    deploy: 'https://series-client.netlify.app',
    repo: 'https://github.com/dallycita/series-client',
    image: vaultImg,
  },
  {
    id: 'calculadora',
    index: '01 / Calculadora',
    title: 'Calculadora',
    description:
      'Custom hook useCalculadora, Storybook, Vitest + Testing Library y pipeline CI/CD con GitHub Actions. Accesibilidad enforced con ESLint jsx-a11y.',
    tags: ['React', 'TypeScript', 'Vite', 'Storybook', 'Vitest', 'CI/CD'],
    deploy: 'https://dallycita.github.io/calculadora-proyecto-2/',
    repo: 'https://github.com/dallycita/calculadora-proyecto-2',
    image: calcImg,
  },
  {
    id: 'password',
    index: '02 / Password Meter',
    title: 'Medidor de Contraseña',
    description:
      'TDD estricto: los tests van primero. Separación core/UI, cobertura ~95% y pipeline de CI/CD que valida cada commit antes del deploy.',
    tags: ['React', 'Vite', 'TDD', '~95% coverage', 'CI/CD'],
    deploy: 'https://dallycita.github.io/lab-password-meter/',
    repo: 'https://github.com/dallycita/lab-password-meter',
    image: passwordImg,
  },
  {
    id: 'snake',
    index: '03 / Snake Game',
    title: 'Snake Game',
    description:
      'React sin build tools — cargado via CDN. Hooks useState/useEffect/useRef, game loop con setInterval y 6 niveles de dificultad. Constraints como herramienta de diseño.',
    tags: ['React CDN', 'Hooks', 'Game loop', '6 niveles'],
    deploy: 'https://dallycita.github.io/Lab7/',
    repo: 'https://github.com/dallycita/Lab7',
    image: snakeImg,
  },
]
