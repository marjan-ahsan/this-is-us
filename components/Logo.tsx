import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LOGO_URL } from '../constants';

const Logo: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['100%', '-0%']);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['80%', '-20%']);

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

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 150 }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative"
        >
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    transform: 'translateZ(20px)',
                    transformStyle: 'preserve-3d',
                }}
            >
                <img
                    src={LOGO_URL}
                    alt="This Is Us Logo"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                />
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                        transform: 'translateZ(25px)',
                        opacity: 0.6,
                        mixBlendMode: 'soft-light',
                        x: glareX,
                        y: glareY,
                        pointerEvents: 'none',
                    }}
                />
            </div>
             <div className="absolute inset-[-20px] rounded-full border-2 border-cyan-300/20" style={{ transform: 'translateZ(-20px)' }}></div>
             <div className="absolute inset-[-40px] rounded-full border-2 border-blue-400/10" style={{ transform: 'translateZ(-40px)' }}></div>
        </motion.div>
    );
};

export default Logo;
