import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const StickyHeader = () => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const words = ['dev', 'gen', 'ai', 'art', 'GG', 'ball', '07'];

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Trigger after scrolling past the main title area (approx 60% of viewport)
        const threshold = window.innerHeight * 0.6;
        if (latest > threshold) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 800); // Faster pace
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                padding: '30px 40px',
                zIndex: 99,
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none' // Let clicks pass through
            }}
        >
            <h2 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-pixel)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                margin: 0,
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)' // Better visibility
            }}>
                <span style={{ color: 'var(--color-primary)' }}>Aejel</span>
                <span style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                    (
                    <div style={{
                        position: 'relative',
                        height: '1.2em',
                        width: '4ch', // Enough for longest word 'ball'
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <AnimatePresence mode='popLayout'>
                            <motion.span
                                key={words[index]}
                                initial={{ y: -30, opacity: 0, filter: 'blur(5px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                exit={{ y: 30, opacity: 0, filter: 'blur(5px)' }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    whiteSpace: 'nowrap',
                                    color: '#fff'
                                }}
                            >
                                {words[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    )
                </span>
            </h2>
        </motion.header>
    );
};

export default StickyHeader;
