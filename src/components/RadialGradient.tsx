'use client';

import { useEffect, useState } from 'react';


{/* Can play with this*/}
export default function RadialGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none transition-opacity opacity-0 md:dark:opacity-80 duration-300"
      style={{
        background: `radial-gradient(75px at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.1), transparent 80%)`
      }}
    />
  );
}