import CurvedLoop from '../components/CurvedLoop.jsx';
import RotatingCards from '../components/Rotatingcards.jsx';

const PROJECT_ITEMS = [
  {
    image: './loggerFull.png',
    link: 'https://github.com/brendon9909/footprint-final',
    title: 'Footprint Logger',
    description: 'Lightweight activity logging tool with real-time timestamps and context.'
  },
  {
    image: './chatbot.png',
    link: 'https://github.com/brendo0npillay/new-chatbot',
    title: 'AI ChatBot',
    description: 'AI-powered browser chatbot with real-time responses and smooth rendering.'
  },
  {
    image: './planetsFull.png',
    link: 'https://planet-view.onrender.com/',
    title: '3D Planet Viewer',
    description: 'Interactive 3D solar system viewer with real-time camera controls.'
  },
    {
    image: './memoryFull.png',
    link: 'https://memory-game-xfw0.onrender.com/',
    title: 'Memory Game',
    description: 'An interactive memory game built with HTML, CSS, and JavaScript, bundled with Webpack for performance and modular code.'
  }
];

const Projects = () => (
  <section id="projects" className="relative py-28 bg-grape-deep/20">
    <CurvedLoop marqueeText="PROJECTS ✦ PROJECTS ✦" speed={1.4} curveAmount={-140} direction="right" />

    <p className="section-pad text-center font-mono text-xs text-lime/70 tracking-widest mt-6 mb-4">
      drag to rotate — click a dot to jump to a project
    </p>

    <div className="w-full h-[70vh] sm:h-[80vh]">
      <RotatingCards items={PROJECT_ITEMS} />
    </div>
  </section>
);

export default Projects;