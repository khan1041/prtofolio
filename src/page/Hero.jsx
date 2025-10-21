


import React from 'react';

// The Hero component is self-contained in a single file, including all styles (Tailwind and custom CSS).
const Hero = () => {
    
  // Placeholder image path for the avatar. Replace the `src` with your actual image URL.
  const avatarSrc = "https://placehold.co/300x300/1f2937/a5b4fc?text=JD"; 
  const avatarAlt = "Professional Avatar - J.D.";

  return (
    <>
      {/* This style block is mandatory to define the CSS keyframe animations 
        used by Tailwind utility classes, as Tailwind itself doesn't define them.
      */}
      <style>
        {`
          /* Keyframes for the Text Shimmer Effect */
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          /* Class for applying the shimmer effect */
          .text-shimmer {
            background: linear-gradient(90deg, #1f2937 0%, #a5b4fc 20%, #ffffff 50%, #a5b4fc 80%, #1f2937 100%);
            background-size: 200% auto;
            color: #000;
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 5s linear infinite;
          }

          /* Keyframes for the Subtle Cloud/Noise Background Animation */
          @keyframes cloud-scroll {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: -200% 0;
            }
          }

          /* Class for the animated background */
          .cloud-animation {
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noise)" opacity="0.1"/></svg>') repeat;
            background-size: 50% 50%;
            animation: cloud-scroll 60s linear infinite;
          }
        `}
      </style>
      
      <section id='hero' className="relative min-h-screen flex items-center bg-gray-900 pt-24 pb-12 overflow-hidden group">
        
        {/* ☁️ Cloud/Noise Animation Layer ☁️ */}
        <div 
          className="absolute inset-0 z-0 opacity-40 cloud-animation"
          aria-hidden="true" 
        ></div> 
        
        {/* Content Container (Split Layout) */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between">
          
          {/* LEFT SIDE: Headline and CTA */}
          <div className="lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0">
            
            <p className="text-xl text-indigo-400 font-semibold mb-3 tracking-widest uppercase">
              Full-Stack Web Developer
            </p>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight">
              {/* Text Shimmer Effect applied here */}
              <span className="block text-shimmer">I Build Seamless</span>
              <span className="block mt-2">Digital Experiences.</span>
            </h1>

            <p className="mt-8 text-xl text-gray-400 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              From the database to the browser, I engineer high-performance solutions using **React, Node, and modern cloud architecture.**
            </p>

            {/* Call to Action (CTA) Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 text-lg font-bold rounded-lg bg-indigo-600 text-white shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                aria-label="See latest projects in the portfolio section"
              >
                See Latest Projects 🚀
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-lg font-bold rounded-lg border-2 border-gray-600 text-white hover:bg-gray-700 transition duration-300 focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                aria-label="Navigate to the contact section to talk about code"
              >
                Let's Talk Code
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* RIGHT SIDE: The Animated Moon/Avatar with Hover Effect */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0">
              
              {/* Avatar Container: Acts as the moon and the hover group */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center p-4 bg-gray-700 shadow-2xl shadow-indigo-500/50 transition-all duration-500 hover:bg-gray-800 group overflow-hidden">
                  
                  {/* The Avatar Image (Default Grayscale, Color on Hover) */}
                  <img 
                      src='/public/images/me2.JPG'
                      alt={avatarAlt}
                      // Key to the "white" effect: Starts grayscale, becomes color on hover
                      className="w-full h-full object-cover rounded-full transition-all duration-700 ease-in-out 
                                 filter grayscale group-hover:grayscale-0 
                                 transform group-hover:scale-105"
                  />
                  
                  {/* The Blackening Overlay (Default transparent, increases opacity on hover) */}
                  <div 
                      // Key to the "blackened" effect
                      className="absolute inset-0 rounded-full transition-opacity duration-700 bg-black opacity-0 group-hover:opacity-40"
                  ></div>
                  
                  {/* Call to Action Text Overlay (Appears on Hover) */}
                  <div 
                      className="absolute inset-0 flex items-center justify-center rounded-full text-white text-lg font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                      <span className="p-3 bg-indigo-600 rounded-lg shadow-xl hover:scale-110 transition">HIRE ME</span>
                  </div>

              </div>
          </div>
          
        </div>

      </section>
    </>
  );
};

export default Hero;
