



import React from 'react';
import { useOnScreen } from '../hook/useOnScreen'; // 👈 Import the custom hook

// --- Placeholder Project Data (Unchanged) ---
const projectsData = [
  // ... (Your existing 4 projects data with links and image URLs remains here)
  {
    id: 1,
    title: 'Story app',
    description: 'This is a story app.Here payment gateway system is developed Whoever likes the book can buy that book',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'express','tailwind CSS'],
    liveLink: 'https://monumental-basbousa-dc5cd9.netlify.app/', 
    frontendLink: 'https://github.com/khan1041/stoyapp.git', 
    backendLink: 'https://github.com/khan1041/stoyapp-backend-.git', 
    imageUrl: '/public/images/story2.JPG', 
    imageAlt: 'Screenshot of the Story app dashboard'
  },
  {
    id: 2,
    title: 'Ecommerce shopping app',
    description: 'This is a great e-commerce website.Here user authentication is done with email OTP And the preferred thing but here the system of payment gate has been developed',
    tech: ['React js', 'Tailwind CSS', 'MongoDB', 'Stripe', 'Node.js', 'Express'],
    liveLink: 'https://melodic-genie-b6382d.netlify.app/',
    frontendLink: 'https://github.com/khan1041/newapp',
    backendLink: 'https://github.com/khan1041/ecomerceapp-Backend-',
    imageUrl: '/public/images/filter.JPG', 
    imageAlt: 'Screenshot of the Nebula Chat Engine interface'
  },
  {
    id: 3,
    title: 'Song app',
    description: 'Through the app, the user can listen to his favorite songs And know about this song and And this app is very comfortable to run',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    liveLink: 'https://resplendent-alpaca-9eb7e7.netlify.app/', 
    frontendLink: 'https://github.com/khan1041/song-frontend-.git', 
    backendLink: 'https://github.com/khan1041/song.git',
    imageUrl: '/public/images/song1.JPG', 
    imageAlt: 'Diagram showing the Astral Data Pipeline flow'
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'It is real life social media app.Here he can see his favorite posts and can post and chat with friends if he wants',
    tech: ['Node.js', 'React', 'Tailwind CSS', 'express', 'multer', 'MongoDB'],
    liveLink: 'https://voluble-khapse-be5453.netlify.app/',
    frontendLink: 'https://github.com/khan1041/socialmdeia-ui-.git',
    backendLink:'https://github.com/khan1041/socialmdeia-backend-.git', 
    imageUrl: '/public/images/new.JPG', 
    imageAlt: 'Mockup of the Quantum Portfolio website'
  },
   {
    id:5,
    title: 'Chat Application',
    description: 'It is real life chat application.Here user can chat as desired And the security is very well done',
    tech: ['Gatsby', 'React', 'Tailwind CSS', 'Framer Motion', 'CDN'],
    liveLink: 'https://strong-brioche-a43886.netlify.app/',
    frontendLink: 'https://github.com/khan1041/chatapp',
    backendLink: 'https://github.com/khan1041/chatapp-Backend1-', 
    imageUrl: '/public/images/Capture.JPG', 
    imageAlt: 'Mockup of the Quantum Portfolio website'
  },
];


const Project = () => {
    // Apply the hook to the section header
    const [headerRef, isHeaderVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <section id="projects" className="py-20 sm:py-32 bg-gray-900 relative overflow-hidden">
            
            {/* Background Glow/Flare and Custom CSS remain the same */}
            <div 
              className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
              aria-hidden="true"
            ></div>
            <div 
              className="absolute bottom-0 right-1/4 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"
              aria-hidden="true"
            ></div>
            
            {/* Content Container */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                
                {/* Section Header: Applies animation classes */}
                <div 
                    ref={headerRef} 
                    className={`text-center mb-16 transition-all duration-700 ease-out ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <p className="text-indigo-400 font-semibold mb-3 tracking-widest uppercase">
                        My Work
                    </p>
                    <h2 className="text-5xl font-extrabold text-white sm:text-6xl">
                        Latest Digital Creations
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                        Where robust architecture meets elegant frontend design.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
            
            {/* Custom CSS for animations (Ideally in a separate CSS file) */}
            <style jsx>{`
                /* ... Your existing CSS styles ... */
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(129, 140, 248, 0.4); 
                }
                /* New CSS for Staggered Reveal */
                .card-animation {
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                .card-animation.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                /* Staggered delays using Tailwind's arbitrary values or separate classes */
                .delay-0 { transition-delay: 0s; }
                .delay-150 { transition-delay: 0.15s; }
                .delay-300 { transition-delay: 0.3s; }
                .delay-450 { transition-delay: 0.45s; }
            `}</style>
        </section>
    );
};

// --- Sub-Component for a single Project Card (Updated with animation) ---
const ProjectCard = ({ project, index }) => {
    
    const [cardRef, isCardVisible] = useOnScreen({ threshold: 0.3 }); // Trigger when 30% of card is visible

    const links = [
        // ... (Your links array filter remains the same)
        {
            label: 'Live Demo',
            href: project.liveLink,
            style: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
            icon: '🌍' 
        },
        {
            label: 'Frontend',
            href: project.frontendLink,
            style: "border border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-500",
            icon: '💻'
        },
        {
            label: 'Backend',
            href: project.backendLink,
            style: "border border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-500",
            icon: '⚙️'
        }
    ].filter(link => link.href);

    // Dynamic class for staggering the animation (using the index)
    const staggerDelayClass = [
        'delay-0', 
        'delay-150', 
        'delay-300', 
        'delay-450'
    ][index % 4]; // Cycles through the 4 delay classes

    return (
        <article 
            ref={cardRef} // Attach the ref to the element
            // Apply base animation class, stagger class, and visibility class
            className={`group project-card bg-gray-800 rounded-xl shadow-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 flex flex-col h-full overflow-hidden 
                        card-animation ${staggerDelayClass} ${isCardVisible ? 'is-visible' : ''}`}
        >
            {/* ... Rest of ProjectCard content (Image, Text, Tech, Links) remains the same ... */}
            <div className="relative overflow-hidden h-40">
                <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-5 text-sm flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span 
                            key={tech}
                            className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-900 bg-opacity-50 text-indigo-300 border border-indigo-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className={`mt-auto flex space-x-2.5 ${links.length === 3 ? 'justify-around' : 'justify-start'}`}>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 text-center px-2 py-2 text-xs font-semibold rounded-lg transition duration-300 focus:ring-4 focus:ring-opacity-50 whitespace-nowrap ${link.style}`}
                            style={{ flexBasis: links.length === 1 ? '100%' : links.length === 2 ? '50%' : '33.33%' }}
                        >
                            {link.icon} {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default Project;