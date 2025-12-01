import React from 'react';
import { motion } from 'framer-motion';
import VisualCutSection from './VisualCutSection';

const ProjectCard = ({ title, description, index }) => (
    <VisualCutSection delay={index * 0.1}>
        <motion.div
            whileHover={{ y: -5, borderColor: 'var(--color-primary)' }}
            style={{
                backgroundColor: 'var(--color-surface)',
                padding: '40px',
                border: '1px solid #222',
                position: 'relative',
                height: '100%',
                transition: 'border-color 0.3s ease'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'var(--color-primary)',
                transformOrigin: 'left',
                transform: 'scaleX(0)',
                transition: 'transform 0.3s ease'
            }} className="card-line" />

            <h4 style={{ fontSize: '2rem', marginBottom: '20px', fontFamily: 'var(--font-pixel)' }}>{title}</h4>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>{description}</p>

            <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
                <div style={{ width: '10px', height: '10px', background: 'var(--color-primary)' }} />
                <div style={{ width: '10px', height: '10px', background: '#333' }} />
                <div style={{ width: '10px', height: '10px', background: '#333' }} />
            </div>
        </motion.div>
    </VisualCutSection>
);

const Projects = () => {
    const projects = [
        {
            title: "Crisis Reunification",
            description: "A system designed to help reunite families during crisis situations. Leverages database management and real-time updates to facilitate efficient information flow."
        },
        {
            title: "AI Detection Metadata",
            description: "A tool to detect AI-generated content by analyzing file metadata and underlying patterns. Helps in verifying authenticity of digital assets."
        }
    ];

    return (
        <section className="container" style={{ padding: '150px 20px' }}>
            <h3 className="cinematic-text" style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontFamily: 'var(--font-pixel)' }}>04.</span>
                PROJECTS
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
