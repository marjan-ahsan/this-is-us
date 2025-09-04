import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from '../components/ProjectCard';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);


  return (
    <div className="space-y-32 md:space-y-48 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }} 
            className="container mx-auto px-6 text-center z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
            <div className="text-left">
                <AnimatedText
                    text="This Is Us"
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
                >
                    We are a next-generation tech collective—with the audacity to build what others only imagine. Unlike traditional startups, we don’t chase trends; we define them. Our work sits at the intersection of innovation, design, and rebellion, crafting software that doesn’t just serve the future—it creates it.
                </motion.p>
            </div>
            <div className="flex justify-center items-center h-96">
                <Logo />
            </div>
        </motion.div>
      </section>

      {/* Our Creations Section */}
      <section className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
        >
          Our Creations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" style={{ perspective: '1000px' }}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
            <Link to="/projects" className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition-opacity hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]">
                Explore All Projects
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;