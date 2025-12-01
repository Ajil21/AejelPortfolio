import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ClickableIcon = ({ icon: Icon, link, color = "var(--color-primary)" }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "var(--color-text)" }}
            whileTap={{ scale: 0.9 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: '15px',
                color: color,
                textDecoration: 'none'
            }}
        >
            <Icon size={40} />
        </motion.a>
    );
};

const Contact = () => {
    return (
        <>
            <section className="container" style={{ padding: '150px 20px 20px', textAlign: 'center', marginBottom: '0px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="cinematic-text" style={{ fontSize: '4rem', marginBottom: '30px', lineHeight: '1' }}>
                        Let's Build Something <br />
                        <span style={{ color: 'var(--color-primary)' }}>Awesome</span>
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 50px', fontSize: '1.4rem' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <motion.a
                        href="mailto:aejelvarghesebabu@gmail.com"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            padding: '20px 50px',
                            border: '2px solid var(--color-primary)',
                            color: 'var(--color-primary)',
                            fontSize: '1.5rem',
                            fontFamily: 'var(--font-pixel)',
                            borderRadius: '4px',
                            position: 'relative',
                            overflow: 'hidden',
                            marginBottom: '80px'
                        }}
                    >
                        Say Hello
                    </motion.a>

                    {/* Interactive Contact Icons */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '60px',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    }}>
                        <ClickableIcon icon={FaPhoneAlt} link="tel:+919072608153" />
                        <ClickableIcon icon={FaLinkedin} link="https://linkedin.com/in/aejel-dev" />
                        <ClickableIcon icon={FaGithub} link="https://github.com/Ajil21" />
                    </div>

                    {/* Address with Map Icon */}
                    <div style={{
                        marginTop: '60px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '15px',
                        color: 'var(--color-text-muted)'
                    }}>
                        <FaMapMarkerAlt size={24} color="var(--color-primary)" />
                        <span style={{ fontSize: '1.2rem' }}>Bengaluru, Karnataka, IND</span>
                    </div>

                </motion.div>
            </section>
            <footer style={{
                marginTop: '50px',
                color: 'var(--color-text-muted)',
                fontSize: '0.9rem', // Reduced font size
                backgroundColor: '#111', // Gray footer area
                padding: '15px 20px', // Reduced size/padding
                textAlign: 'left', // Align left
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <p style={{ margin: 0, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>Designed & Built by Aejel</p>
            </footer>
        </>
    );
};

export default Contact;
