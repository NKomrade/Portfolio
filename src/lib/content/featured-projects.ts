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
      name: 'Live Buy Blog Site',
      description:
        'A dynamic blog platform for students and PG owners, featuring real-time content management',
      tasks:
        'I created an engaging blog interface, added blog management features, and implemented a responsive design using React and TailwindCSS.',
      url: 'https://blogs.livebuy.in/', // replace with actual URL
      img: '/Website/livebuy.png', // replace with actual image URL
      tags: ['React', 'Node.js', 'TailwindCSS'],
    },
    {
      id: getId(),
      name: 'Kidzy Site',
      description:
        'A vibrant educational site tailored for kids, offering interactive learning games, videos, and resources.',
      tasks:
        'I developed an intuitive frontend with gamified elements and colorful design, enabling children to easily navigate and access learning content.',
      url: 'kidzy-cyan.vercel.app', // replace with actual URL
      img: '/Website/kidzy.jpeg', // replace with actual image URL
      tags: ['React', 'TailwindCSS', 'Animations', 'Gamification'],
    },
    {
      id: getId(),
      name: 'AthleteAware',
      description:
        'A mobile/web platform aimed at spreading anti-doping awareness among athletes using gamification and community forums.',
      tasks:
        'I worked on the UI/UX design, integrated Firebase for authentication and real-time database, built features like quizzes, notifications, mentor forums, and leaderboard systems.',
      url: 'https://anti-doping-one.vercel.app', // replace with actual URL
      img: '/Website/athlete.png', // replace with actual image URL
      tags: ['React', 'Firebase', 'Gamification', 'TailwindCSS'],
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
