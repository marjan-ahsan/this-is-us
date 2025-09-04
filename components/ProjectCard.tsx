import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { ArrowUpRightIcon } from './icons/MiscIcons';

const glowColors: { [key: string]: string } = {
  cyan: 'hover:shadow-[0_0_20px_5px] hover:shadow-cyan-500/50',
  lime: 'hover:shadow-[0_0_20px_5px] hover:shadow-lime-500/50',
  fuchsia: 'hover:shadow-[0_0_20px_5px] hover:shadow-fuchsia-500/50',
  amber: 'hover:shadow-[0_0_20px_5px] hover:shadow-amber-500/50',
  red: 'hover:shadow-[0_0_20px_5px] hover:shadow-red-500/50',
  indigo: 'hover:shadow-[0_0_20px_5px] hover:shadow-indigo-500/50',
};

const bgColors: { [key: string]: string } = {
  cyan: 'bg-cyan-500/10',
  lime: 'bg-lime-500/10',
  fuchsia: 'bg-fuchsia-500/10',
  amber: 'bg-amber-500/10',
  red: 'bg-red-500/10',
  indigo: 'bg-indigo-500/10',
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowColorClass = glowColors[project.glowColor] || 'hover:shadow-neutral-500/50';
  const bgColorClass = bgColors[project.glowColor] || 'bg-black/20';

  const isExternal = project.link.startsWith('http');

  const ButtonComponent = isExternal ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group self-start mt-4 inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
    >
      View Project
      <ArrowUpRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </a>
  ) : (
    <Link
      to={project.link}
      className="group self-start mt-4 inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
    >
      View Project
      <ArrowUpRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </Link>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative w-full h-96 rounded-2xl transition-shadow duration-500 ${glowColorClass} shadow-2xl`}
    >
      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
        className={`absolute inset-0 ${bgColorClass} backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-xl font-bold font-heading text-white mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>
        {ButtonComponent}
      </div>
    </motion.div>
  );
};

export default ProjectCard;