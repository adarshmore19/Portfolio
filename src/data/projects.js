import expenzerImage from '../assets/project-images/expenzer.jpg'
import heartMonitoringImage from '../assets/project-images/heart-monitoring.jpg'
import resumeAnalyzerImage from '../assets/project-images/resume-analyzer.svg'
import mapGeneratorImage from '../assets/project-images/map-generator.jpg'
import devopsWebsiteImage from '../assets/project-images/devops-website.svg'

export const projects = [
  {
    title: 'Expenzer',
    tagline: 'AI Expense Tracker',
    description: 'An intelligent finance assistant that classifies spending and surfaces trends with a beautiful dashboard.',
    tech: ['Python', 'Flask', 'MySQL', 'AI'],
    image: expenzerImage,
    links: { github: 'https://github.com' },
    accent: 'from-cyan-400/30 to-indigo-500/30',
  },
  {
    title: 'Heart Monitoring',
    tagline: 'Remote Heart Monitoring using rPPG',
    description: 'A computer vision system that estimates pulse from facial video using MediaPipe and OpenCV.',
    tech: ['YOLO', 'MediaPipe', 'OpenCV', 'Python'],
    image: heartMonitoringImage,
    links: { github: 'https://github.com' },
    accent: 'from-rose-500/30 to-orange-400/30',
  },
  {
    title: 'AI Resume Analyzer',
    tagline: 'Resume intelligence platform',
    description: 'Upload a resume and receive ATS insights, feedback, and keyword-driven suggestions instantly.',
    tech: ['NLP', 'OpenAI', 'Flask', 'Python'],
    image: resumeAnalyzerImage,
    links: { github: 'https://github.com' },
    accent: 'from-violet-500/30 to-fuchsia-400/30',
  },
  {
    title: 'Map Generator',
    tagline: 'Interactive mapping experience',
    description: 'An animated map builder that draws routes, pins locations, and visualizes journeys.',
    tech: ['React', 'Framer Motion', 'JavaScript', 'Vite'],
    image: mapGeneratorImage,
    links: { github: 'https://github.com' },
    accent: 'from-emerald-400/30 to-cyan-400/30',
  },
  {
    title: 'DevOps Website',
    tagline: 'Deployment pipeline experience',
    description: 'A responsive platform concept that showcases automated CI/CD and container-based delivery flows.',
    tech: ['Docker', 'CI/CD', 'GitLab', 'Linux'],
    image: devopsWebsiteImage,
    links: { github: 'https://github.com' },
    accent: 'from-sky-400/30 to-indigo-500/30',
  },
]

export const skills = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Flask', 'FastAPI', 'Express'],
  },
  {
    title: 'AI',
    items: ['OpenAI', 'OCR', 'YOLO', 'MediaPipe', 'NLP'],
  },
  {
    title: 'DevOps',
    items: ['Git', 'GitHub', 'GitLab', 'Docker', 'CI/CD', 'Linux'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL'],
  },
]

export const experience = [
  {
    title: 'Cloud Associate Intern',
    time: '2024',
    details: 'Built cloud-native workflows and supported automation initiatives.',
  },
  {
    title: 'AI Project Builder',
    time: '2024',
    details: 'Created practical AI products spanning analytics, computer vision, and automation.',
  },
  {
    title: 'Hackathons & Open Source',
    time: '2024–2025',
    details: 'Shipped prototypes, learned in public, and contributed to collaborative engineering work.',
  },
  {
    title: 'Learning Automation',
    time: '2025',
    details: 'Focused on making systems faster, reliable, and easier to operate at scale.',
  },
]
