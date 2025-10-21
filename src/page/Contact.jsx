
import React from 'react';
import { useOnScreen } from '../hook/useOnScreen'; // 👈 Import the custom hook

// --- Social Links Data ---
const socialLinks = [
    { 
        name: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/shimul-khan-4836b02b5/', 
        icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.366-4-3.297-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.77 7 2.457v6.778z',
        color: 'text-blue-400 hover:text-blue-500'
    },
    { 
        name: 'GitHub', 
        href: 'https://github.com/khan1041', 
        icon: 'M12 0c-6.626 0-12 5.373-12 12s5.373 12 12 12c5.302 0 9.729-3.911 11.218-9.027l.001-.001-.001-.002h-.001c.08-.288.118-.588.118-.952 0-6.627-5.373-12-12-12zm-3.844 19.333c-.628.115-.813.418-.813.774 0 .356.2.659.813.774 1.114.204 2.227.306 3.34.306 1.113 0 2.227-.102 3.34-.306.613-.115.813-.418.813-.774 0-.356-.2-.659-.813-.774-1.113-.204-2.227-.306-3.34-.306-1.113 0-2.227.102-3.34.306zM22.08 12c0 2.686-.967 5.12-2.585 6.994l-.001-.001-.002.001h-.001c-1.748 1.956-4.225 3.005-6.611 3.005-2.386 0-4.863-1.049-6.611-3.005l-.001-.001-.002-.001h-.001c-1.618-1.874-2.585-4.308-2.585-6.994 0-5.523 4.477-10 10-10s10 4.477 10 10zM12 4.167c-4.32 0-7.833 3.513-7.833 7.833s3.513 7.833 7.833 7.833 7.833-3.513 7.833-7.833-3.513-7.833-7.833-7.833zM12 18.167c-3.416 0-6.167-2.751-6.167-6.167s2.751-6.167 6.167-6.167 6.167 2.751 6.167 6.167-2.751 6.167-6.167 6.167zM12 7.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z',
        color: 'text-gray-400 hover:text-white'
    },
    { 
        name: 'Twitter', 
        href: 'https://x.com/SimulKhan380453', 
        icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.155-2.723-.951.564-2.005.974-3.127 1.195-.89-.955-2.153-1.554-3.593-1.554-2.71 0-4.91 2.2-4.91 4.908 0 .385.044.755.127 1.111-4.085-.205-7.72-2.164-10.155-5.137-.423.727-.666 1.57-.666 2.474 0 1.698.86 3.199 2.17 4.076-.803-.025-1.561-.246-2.222-.614-.001.021-.001.043-.001.065 0 2.375 1.688 4.354 3.921 4.807-.411.112-.843.17-1.289.17-.315 0-.623-.03-.923-.088.625 1.942 2.438 3.364 4.577 3.404-1.683 1.32-3.804 2.108-6.096 2.108-.398 0-.791-.023-1.18-.069 2.17 1.397 4.757 2.21 7.55 2.21 9.057 0 14.01-7.498 14.01-14.01 0-.214-.005-.426-.014-.637.962-.693 1.799-1.568 2.46-2.553z',
        color: 'text-sky-400 hover:text-sky-500'
    },
    { 
        name: 'Facebook', 
        href: 'https://www.facebook.com/md.shimul.khan.637950', 
        icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
        color: 'text-blue-600 hover:text-blue-400'
    },
    { 
        name: 'fiverr', 
        href: 'https://www.fiverr.com/shimul1209/be-your-node-js-developer-for-developing-apis-and-backend?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=caffc2fd69414a7889b0b44bed9417a0&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&seller_online=true&imp_id=53d0934a-0f7b-4c49-8d42-4a59de0bfa92', 
        icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.011 15.5h-1.989v-7h1.989c.901 0 1.638.381 2.052 1.149.414.768.414 2.072 0 2.84-.414.768-1.151 1.151-2.052 1.151zm-1.002-5.5h-1.008v3.5h1.008c.52 0 .848-.125 1.056-.407.208-.282.208-.763 0-1.045-.208-.282-.536-.409-1.056-.409v-1.639zm9.013 5.5h-1.989v-7h1.989c.901 0 1.638.381 2.052 1.149.414.768.414 2.072 0 2.84-.414.768-1.151 1.151-2.052 1.151zm-1.002-5.5h-1.008v3.5h1.008c.52 0 .848-.125 1.056-.407.208-.282.208-.763 0-1.045-.208-.282-.536-.409-1.056-.409v-1.639z', // This is a generic Fiverr-colored icon (Fiverr is green)
        color: 'text-green-500 hover:text-green-400'
    },
];

const Contact = () => {
    // Apply the hook to the section header
    const [headerRef, isHeaderVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <section id="contact" className="py-20 sm:py-32 bg-gray-900 relative overflow-hidden">
            
            {/* Background Glows (for visual consistency) */}
            <div 
                className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
                aria-hidden="true"
            ></div>
            <div 
                className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
                aria-hidden="true"
            ></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                
                {/* Section Header: Applies scroll animation */}
                <div 
                    ref={headerRef} 
                    className={`text-center mb-16 transition-all duration-700 ease-out ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <p className="text-fuchsia-400 font-semibold mb-3 tracking-widest uppercase">
                        Get In Touch
                    </p>
                    <h2 className="text-5xl font-extrabold text-white sm:text-6xl">
                        Connect with Me
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                        Find me on these platforms for work, social updates, and freelance projects.
                    </p>
                </div>

                {/* Main Contact Content - Centered Card */}
                <div className="max-w-xl mx-auto">
                    
                    {/* Contact Info & Social Links Card */}
                    <div className="bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-700">
                        
                        {/* Email Link */}
                        <div className="mb-10 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Send an Email 📧</h3>
                            <a 
                                href="mailto:your.email@example.com" 
                                className="inline-flex items-center text-xl font-medium text-indigo-400 hover:text-indigo-300 transition-colors bg-gray-900 px-6 py-3 rounded-xl border border-gray-700 hover:border-indigo-500 shadow-lg"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4v10a2 2 0 002 2h14a2 2 0 002-2V12"></path></svg>
                                skshimul79977007@gmail.com
                            </a>
                        </div>
                        
                        {/* Social Links Grid */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-5 text-center">Find Me Here 🔗</h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {socialLinks.map((link) => (
                                    <a 
                                        key={link.name}
                                        href={link.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-full transition duration-300 border-2 border-gray-700 hover:border-fuchsia-500 ${link.color}`}
                                        title={`Visit my ${link.name}`}
                                    >
                                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={link.icon} />
                                        </svg>
                                        <span className="sr-only">{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* Custom CSS for blob animation */}
            <style jsx>{`
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
            `}</style>
        </section>
    );
};

export default Contact;