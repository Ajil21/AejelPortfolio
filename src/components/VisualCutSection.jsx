import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VisualCutSection = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2, margin: "0px 0px -10% 0px" });

    return (
        <div ref={ref} style={{ position: 'relative', overflow: 'hidden', margin: '50px 0' }}>
            <motion.div
                initial={{
                    opacity: 0,
                    clipPath: "inset(0 100% 0 0)", // Start hidden (wiped right)
                    filter: "grayscale(100%) contrast(150%)" // B-roll raw look
                }}
                animate={isInView ? {
                    opacity: 1,
                    clipPath: "inset(0 0% 0 0)", // Snap reveal
                    filter: "grayscale(0%) contrast(100%)"
                } : {
                    opacity: 0,
                    clipPath: "inset(0 100% 0 0)",
                    filter: "grayscale(100%) contrast(150%)"
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1], // Cubic bezier for "snappy" feel
                    delay: delay
                }}
            >
                {/* Chromatic Aberration Glitch Overlay on Enter */}
                <motion.div
                    initial={{ x: 5, opacity: 0.8, mixBlendMode: 'screen' }}
                    animate={isInView ? { x: 0, opacity: 0 } : { x: 5, opacity: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(255, 0, 0, 0.1)', // Subtle red shift
                        pointerEvents: 'none',
                        zIndex: 2
                    }}
                />
                <motion.div
                    initial={{ x: -5, opacity: 0.8, mixBlendMode: 'screen' }}
                    animate={isInView ? { x: 0, opacity: 0 } : { x: -5, opacity: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 255, 255, 0.1)', // Subtle cyan shift
                        pointerEvents: 'none',
                        zIndex: 2
                    }}
                />

                {children}
            </motion.div>
        </div>
    );
};

export default VisualCutSection;
