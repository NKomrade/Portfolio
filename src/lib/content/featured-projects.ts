import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Convoke Site',
      description:
        'A centralized platform built for educational institutions to manage and showcase academic collaborations and events.',
      tasks:
        'I designed and developed the full-stack application using React and Firebase, implementing authentication, user dashboards, dynamic event posting, and document sharing features.',
      url: 'https://convoke.in', 
      img: '/Website/convoke.jpeg', // replace with actual image URL
      tags: ['React', 'TailwindCSS', 'Next.js',],
    },
    {
      id: getId(),
      name: 'Jewelry E-commerce Site',
      description:
        'An elegant jewelry showcase website featuring modern design and interactive product galleries',
      tasks:
        'I developed a sophisticated jewelry e-commerce interface with responsive design, smooth animations, and interactive product showcases using React and TailwindCSS.',
      url: 'https://resin-one.vercel.app',
      img: '/Website/resin.png',
      tags: ['React', 'TailwindCSS', 'E-commerce', 'Responsive Design'],
    },
    {
      id: getId(),
      name: 'Tiles Gallery Portfolio',
      description:
        'A professional tiles showcase website featuring dynamic image galleries and portfolio sections',
      tasks:
        'I built a visually appealing tiles portfolio with optimized image loading, grid layouts, and modern CSS techniques to create an engaging showcase experience.',
      url: 'https://tiles-work.vercel.app',
      img: '/Website/tiles.png',
      tags: ['React', 'CSS Grid', 'Image Optimization', 'Portfolio'],
    },
    {
      id: getId(),
      name: 'Piclance',
      description:
        'A service-based platform offering professional photo/video editing and media enhancement solutions.',
      tasks:
        'I led the design and development of the website including services listing, pricing models, contact form, testimonials section, and responsive UI with animations.',
      url: 'https://www.piclance.in/', // replace with actual URL
      img: '/Website/piclance.png', // replace with actual image URL
      tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'UI/UX'],
    },
  ],
};

export default featuredProjectsSection;
