import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ label, percentage }) => (
    <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.9rem' }}>{label}</span>
            <span style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>{percentage}%</span>
        </div>
        <div style={{ width: '100%', height: '10px', background: '#222', borderRadius: '5px', overflow: 'hidden' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ height: '100%', background: 'var(--color-primary)' }}
            />
        </div>
    </div>
);

const Skills = () => {
    const technicalLanguages = [
        { name: "Java", percent: 90 },
        { name: "Python", percent: 85 },
        { name: "C", percent: 80 },
        { name: "JavaScript", percent: 75 },
        { name: "React", percent: 70 },
        { name: "HTML/CSS", percent: 85 }
    ];

    const verbalLanguages = [
        { name: "English (Fluent)", percent: 100 },
        { name: "Malayalam (Native)", percent: 100 },
        { name: "Hindi", percent: 69 },
        { name: "German (A2)", percent: 76 }
    ];

    const softSkills = [
        { name: "Leadership", percent: 95 },
        { name: "Responsibility", percent: 82 },
        { name: "Teamwork", percent: 90 },
        { name: "Problem Solving", percent: 87 },
        { name: "Communication", percent: 99 }
    ];

    const coreSkills = [
        "DSA", "Algorithms", "Scenario Coding", "Pseudocode", "OOP",
        "Problem Solving", "Crisis Management", "Creative Thinking", "Data Analysis"
    ];

    return (
        <section className="container" style={{ padding: '150px 20px' }}>
            <h3 className="cinematic-text" style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '20px' }}>

                SKILLS
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                {/* Soft Skills */}
                <div>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--color-text)', fontFamily: 'var(--font-pixel)' }}>
                        Soft Skills
                    </h4>
                    {softSkills.map((skill, index) => (
                        <ProgressBar key={index} label={skill.name} percentage={skill.percent} />
                    ))}
                </div>

                {/* Technical Languages */}
                <div>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--color-text)', fontFamily: 'var(--font-pixel)' }}>
                        Technical Languages
                    </h4>
                    {technicalLanguages.map((skill, index) => (
                        <ProgressBar key={index} label={skill.name} percentage={skill.percent} />
                    ))}
                </div>

                {/* Verbal Languages */}
                <div>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--color-text)', fontFamily: 'var(--font-pixel)' }}>
                        Verbal Languages
                    </h4>
                    {verbalLanguages.map((skill, index) => (
                        <ProgressBar key={index} label={skill.name} percentage={skill.percent} />
                    ))}
                </div>

                {/* Core Skills (Tags) */}
                <div style={{ gridColumn: '1 / -1' }}>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--color-text)', fontFamily: 'var(--font-pixel)' }}>
                        Core Skills & Tools
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        {coreSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--color-primary)', color: 'var(--color-bg)' }}
                                style={{
                                    padding: '12px 24px',
                                    border: '1px solid var(--color-surface)',
                                    backgroundColor: 'var(--color-surface)',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    cursor: 'none'
                                }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
