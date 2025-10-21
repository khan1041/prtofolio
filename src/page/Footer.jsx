
import React from 'react';

// --- Data for Navigation and Social Links ---
const footerNav = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    // Add other main sections here
];

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/YourName', icon: 'M12 0c-6.626 0-12 5.373-12 12s5.373 12 12 12c5.302 0 9.729-3.911 11.218-9.027l.001-.001-.001-.002h-.001c.08-.288.118-.588.118-.952 0-6.627-5.373-12-12-12zm-3.844 19.333c-.628.115-.813.418-.813.774 0 .356.2.659.813.774 1.114.204 2.227.306 3.34.306 1.113 0 2.227-.102 3.34-.306.613-.115.813-.418.813-.774 0-.356-.2-.659-.813-.774-1.113-.204-2.227-.306-3.34-.306-1.113 0-2.227.102-3.34.306zM22.08 12c0 2.686-.967 5.12-2.585 6.994l-.001-.001-.002.001h-.001c-1.748 1.956-4.225 3.005-6.611 3.005-2.386 0-4.863-1.049-6.611-3.005l-.001-.001-.002-.001h-.001c-1.618-1.874-2.585-4.308-2.585-6.994 0-5.523 4.477-10 10-10s10 4.477 10 10zM12 4.167c-4.32 0-7.833 3.513-7.833 7.833s3.513 7.833 7.833 7.833 7.833-3.513 7.833-7.833-3.513-7.833-7.833-7.833zM12 18.167c-3.416 0-6.167-2.751-6.167-6.167s2.751-6.167 6.167-6.167 6.167 2.751 6.167 6.167-2.751 6.167-6.167 6.167zM12 7.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z',
        color: 'text-gray-400 hover:text-white'
    },
    { 
        name: 'LinkedIn', 
        href: 'https://linkedin.com/in/YourName', 
        icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.366-4-3.297-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.77 7 2.457v6.778z',
        color: 'text-blue-400 hover:text-blue-300'
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
          <div>

                {/* --- Separator and Copyright --- */}
                <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} <span className="text-indigo-400 font-semibold">Shimul Khan.</span> All rights reserved.
                    </p>
                    <p className="text-xs mt-1 text-gray-600">
                        Crafted with <span className="text-red-500">❤️</span> and React/Tailwind.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;