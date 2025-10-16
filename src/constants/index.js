import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Service Desk Solutions',
    icon: frontend,
  },
  {
    title: 'IT Infrastructure',
    icon: backend,
  },
  {
    title: 'Business Process Automation',
    icon: ux,
  },
  {
    title: 'Technology Consulting',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Founder & CEO',
    company_name: 'NextPhase IT',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2023 - Present',
  },
  {
    title: 'IT Solutions Architect',
    company_name: 'NextPhase IT',
    icon: microverse,
    iconBg: '#333333',
    date: '2022 - 2023',
  },
  {
    title: 'Senior IT Consultant',
    company_name: 'Previous Company',
    icon: kelhel,
    iconBg: '#333333',
    date: '2020 - 2022',
  },
  {
    title: 'Technology Specialist',
    company_name: 'Previous Company',
    icon: dcc,
    iconBg: '#333333',
    date: '2018 - 2020',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Service Desk Portal',
    description: 'A comprehensive IT service management platform built for NextPhase IT to streamline support operations and enhance customer experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/nextphaseit/next-phase.portal.final',
    demo: 'https://nextphaseit.github.io/next-phase.portal.final',
  },
  {
    id: 'project-2',
    name: 'NextPhase Portfolio',
    description:
      'A professional portfolio website built with TypeScript, showcasing NextPhase IT services and projects with modern design and animations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/nextphaseit/nextphase-portfolio-final',
    demo: 'https://nextphaseit.github.io/nextphase-portfolio-final',
  },
  {
    id: 'project-3',
    name: 'InnerClarity Client Portal',
    description: 'A comprehensive client portal built with TypeScript for InnerClarity INC, providing secure access to services and resources.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/nextphaseit/InnerClarityINCClientPortal',
    demo: 'https://nextphaseit.github.io/InnerClarityINCClientPortal',
  },
  {
    id: 'project-4',
    name: 'Strokes of Faith',
    description: `A creative CSS-based project showcasing artistic design and frontend development skills with modern styling techniques.`,
    tags: [
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/nextphaseit/StrokesofFaith',
    demo: 'https://nextphaseit.github.io/StrokesofFaith',
  },
  {
    id: 'project-5',
    name: 'NextPhase Portal',
    description:
      'The final version of the NextPhase portal, a comprehensive TypeScript-based solution for IT service management and client interactions.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/nextphaseit/nextphase-portfolio-final',
    demo: 'https://nextphaseit.github.io/nextphase-portfolio-final',
  },
];

export { services, technologies, experiences, projects };
