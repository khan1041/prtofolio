
import React from 'react';

// Main component to showcase technical skills and experience levels
const Skill = () => {
    // Define the skill data structure with updated names
    const skills = [
        { name: 'HTML', percentage: 99, icon: '</>' },
        { name: 'React (Vite)', percentage: 95, icon: '⚛️' },
        { name: 'Node', percentage: 85, icon: '🟢' },
        { name: 'Tailwind CSS', percentage: 80, icon: 'T' },
        { name: 'MongoDB', percentage: 80, icon: '🍃' },
        { name: 'Next.js', percentage: 75, icon: '⏭️' },
        { name: 'TypeScript', percentage: 75, icon: '🇹🇸' },
        { name: 'PostgreSQL', percentage: 70, icon: '🐘' },
        { name: 'Redis', percentage: 65, icon: '⚡' },
    ];

    // Function to determine the color of the progress bar based on the percentage
    const getBarColor = (percentage) => {
        if (percentage > 90) return 'bg-gradient-to-r from-green-400 to-green-600';
        if (percentage > 80) return 'bg-gradient-to-r from-indigo-400 to-indigo-600';
        if (percentage > 70) return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
        return 'bg-gradient-to-r from-red-400 to-red-600';
    };

    // --- SkillBar Component with Enhanced Design ---
    const SkillBar = ({ name, percentage, icon }) => {
        const barWidth = { width: `${percentage}%` };
        const barColor = getBarColor(percentage);

        return (
            // Added group class for hover effects on children
            <div className="group mb-6 p-5 bg-gray-800 rounded-3xl transition duration-500 transform hover:scale-[1.02] hover:bg-gray-700/60 
          shadow-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.5),0_0_40px_rgba(99,102,241,0.2)]">

                {/* Skill Name and Percentage */}
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-3 text-white relative">
                        {/* Animated Icon Container */}
                        <span className="text-3xl transition-transform duration-300 group-hover:rotate-12">{icon}</span>
                        <span className="text-xl font-semibold tracking-wide relative">
                            {name}
                            {/* Subtle underline on hover */}
                            <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-500 w-0 transition-all duration-500 group-hover:w-full"></span>
                        </span>
                    </div>

                    <span className={`text-2xl font-extrabold transition-colors duration-500 
            ${percentage > 90 ? 'text-green-400 group-hover:text-green-300' : 'text-indigo-400 group-hover:text-indigo-300'}`}>
                        {percentage}%
                    </span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full bg-gray-700/70 rounded-full h-3">
                    <div
                        className={`h-3 rounded-full ${barColor} shadow-lg shadow-indigo-500/50 transition-all duration-1000 ease-out`}
                        style={barWidth}
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        role="progressbar"
                    ></div>
                </div>
            </div>
        );
    };

    // --- Custom Style Block for Background Pattern ---
    // A subtle pattern is added to the background of the section for depth.
    const customBackgroundStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h3v1H0V0zm0 3h2v1H0V3zm0 2h1v1H0V5zm3-3h3v1H3V2zM4 4h2v1H4V4zm-1 2h1v-1H3v1z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: '#111827', // The original bg-gray-900 color
    };

    return (
        // Applied custom style to the section
        <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative" style={customBackgroundStyle}>
            {/* Optional: A dark overlay for contrast */}
            <div className="absolute inset-0 bg-gray-900 opacity-90 z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header and Logo (Stylized Initial for "Experience") */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-4">
                        {/* Simple logo: The letter 'E' styled with a vibrant gradient */}
                        <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-indigo-500 p-3 rounded-3xl shadow-2xl shadow-indigo-500/70 transition-transform duration-500 hover:scale-105">
                            E
                        </span>
                    </div>
                    <h2 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight">
                        My Technical Expertise
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        A comprehensive look at my proficiency across the **full-stack development** landscape.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {skills.map((skill) => (
                        <SkillBar
                            key={skill.name}
                            name={skill.name}
                            percentage={skill.percentage}
                            icon={skill.icon}
                        />
                    ))}
                </div>

                {/* Callout Footer */}
                <div className="mt-20 text-center">
                    <p className="text-xl text-indigo-400 font-medium border-t border-gray-700 pt-8">
                        I continuously explore and integrate new technologies to deliver **cutting-edge solutions**. 🚀
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skill;