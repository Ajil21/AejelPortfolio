import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [dots, setDots] = useState('.');
    const [isZooming, setIsZooming] = useState(false);

    useEffect(() => {
        if (isZooming) return;

        const interval = setInterval(() => {
            setDots(prev => {
                if (prev === '...') return '.';
                return prev + '.';
            });
        }, 500);

        const timer = setTimeout(() => {
            clearInterval(interval);
            setIsZooming(true);
        }, 2000); // Load for 2 seconds

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [isZooming]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            overflow: 'hidden'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={isZooming ? {
                    scale: 50,
                    opacity: 0,
                    filter: 'blur(20px)'
                } : {
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)'
                }}
                transition={isZooming ? {
                    duration: 0.8,
                    ease: "easeInOut"
                } : { duration: 0.5 }}
                onAnimationComplete={() => {
                    if (isZooming) onComplete();
                }}
                style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '2rem',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    whiteSpace: 'nowrap' // Prevent wrapping during zoom
                }}
            >
                LOADING{dots}
            </motion.div>
        </div>
    );
};

export default Loader;
