import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FaLaptop, FaMobileAlt, FaGamepad, FaKeyboard, FaMouse } from 'react-icons/fa';
import heroPortrait from '../assets/hero-portrait.png';

const FloatingIcon = ({ icon: Icon, initialX, initialY, delay }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 10 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 10 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Magnetic pull effect
        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;

        x.set(distanceX * 0.2); // Move slightly towards mouse
        y.set(distanceY * 0.2);

        rotateX.set(-(mouseY - centerY) / 5);
        rotateY.set((mouseX - centerX) / 5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: initialY,
                left: initialX,
                x,
                y,
                rotateX,
                rotateY,
                cursor: 'none',
                zIndex: 0
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 0.4,
                scale: 1,
                y: [0, -15, 0] // Floating animation
            }}
            transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: { repeat: Infinity, duration: 3 + Math.random() * 2, ease: "easeInOut", delay: Math.random() }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Icon size={40} color="var(--color-primary)" />
        </motion.div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // Push content to bottom
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            perspective: '1000px',
            paddingBottom: '12vh' // Lowered text slightly
        }}>

            {/* Floating Vector Elements */}
            <FloatingIcon icon={FaLaptop} initialX="15%" initialY="20%" delay={0.2} />
            <FloatingIcon icon={FaMobileAlt} initialX="80%" initialY="25%" delay={0.4} />
            <FloatingIcon icon={FaGamepad} initialX="20%" initialY="70%" delay={0.6} />
            <FloatingIcon icon={FaKeyboard} initialX="75%" initialY="65%" delay={0.8} />
            <FloatingIcon icon={FaMouse} initialX="50%" initialY="85%" delay={1.0} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ textAlign: 'center', zIndex: 1, maxWidth: '90%' }}
            >
                {/* Hero Portrait */}
                <motion.img
                    src={heroPortrait}
                    alt="Aejel Varghese Babu"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                        width: '100%',
                        maxWidth: '350px', // Responsive width
                        height: 'auto',
                        marginBottom: '-80px', // Pull closer to text (move down relative to text)
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        filter: 'grayscale(100%) contrast(1.2)', // Match aesthetic
                        position: 'relative',
                        zIndex: 0,
                        pointerEvents: 'none', // Disable all interactions
                        userSelect: 'none', // Disable selection
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none'
                    }}
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click
                    draggable="false" // Disable drag
                />

                <motion.h1
                    className="pixel-font"
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1rem',
                        color: 'var(--color-text)',
                        textShadow: '4px 4px 0px var(--color-primary)',
                        position: 'relative',
                        zIndex: 1 // Ensure text is on top of image
                    }}
                >
                    AEJEL VARGHESE BABU
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '3rem',
                        fontFamily: 'var(--font-pixel)'
                    }}
                >
                    <span>CREATIVE</span>
                    <span style={{ color: 'var(--color-primary)' }}>//</span>
                    <span>ENGINEER</span>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <div style={{
                        width: '2px',
                        height: '60px',
                        background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
                        margin: '0 auto'
                    }} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
