import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <Cursor />;
};

const Cursor: React.FC = () => {
  const mouse = {
    x: useSpring(0, { stiffness: 500, damping: 100 }),
    y: useSpring(0, { stiffness: 500, damping: 100 }),
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      style={{
        left: mouse.x,
        top: mouse.y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="pointer-events-none fixed z-[9999] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1)_0%,_rgba(0,255,255,0)_50%)] dark:bg-[radial-gradient(circle_at_center,_rgba(0,191,255,0.15)_0%,_rgba(0,191,255,0)_40%)]"
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
