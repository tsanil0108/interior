// src/components/AnimatedCounter.jsx
import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export default function AnimatedCounter({ to, suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}