import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollHighlightText = ({ children, className = "" }) => {
    const elementRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to opacity/color
    // As it enters (0), it's dim. As it gets to center (0.5), it's bright.
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
    const color = useTransform(scrollYProgress, [0, 0.5, 1], ["#888888", "#39FF14", "#888888"]);
    const x = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, -20]);

    return (
        <motion.div
            ref={elementRef}
            style={{ opacity, color, x }}
            className={`scroll-highlight ${className}`}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollHighlightText;
