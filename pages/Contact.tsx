import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, InstagramIcon } from '../components/icons/MiscIcons';

const ContactCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    handle: string;
    href: string;
    gradient: string;
}> = ({ icon, title, handle, href, gradient }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`relative group overflow-hidden block p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 w-full max-w-sm text-center shadow-2xl`}
        >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2">{title}</h3>
            <p className="text-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">{handle}</p>
        </motion.a>
    );
};

const Contact: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 font-heading"
            >
                Get In Touch
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-16"
            >
                We're always open to new ideas, collaborations, and conversations. Reach out and let's create something amazing together.
            </motion.p>
            <div className="flex flex-col md:flex-row gap-8">
                <ContactCard
                    icon={<MailIcon className="h-16 w-16 mx-auto text-cyan-400" />}
                    title="Email Us"
                    handle="thisisus533@gmail.com"
                    href="mailto:thisisus533@gmail.com"
                    gradient="from-cyan-400 to-blue-500"
                />
                <ContactCard
                    icon={<InstagramIcon className="h-16 w-16 mx-auto text-cyan-400" />}
                    title="Follow Us"
                    handle="@thisisusgroup"
                    href="https://instagram.com/thisisusgroup"
                    gradient="from-pink-500 via-red-500 to-yellow-500"
                />
            </div>
        </div>
    );
};

export default Contact;