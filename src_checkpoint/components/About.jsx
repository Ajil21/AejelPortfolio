import React from 'react';
import ScrollHighlightText from './ScrollHighlightText';

const About = () => {
    return (
        <section className="container" style={{ padding: '100px 20px', maxWidth: '800px', margin: '0 auto' }}>

            {/* Main Content - Centered */}
            <div>
                <div style={{ marginBottom: '80px', textAlign: 'center' }}>
                    {/* Removed "PROFILE" header as requested */}
                    <ScrollHighlightText>
                        <p style={{ fontSize: '2rem', lineHeight: '1.4', fontWeight: '300' }}>
                            “21 year old.
                            I like creating stuff, tweaking existing tech. In my free time I game, ball and inhale music. Trying to be something!”
                        </p>
                    </ScrollHighlightText>
                </div>

                <div>
                    <h3 className="cinematic-text" style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
                        <span style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontFamily: 'var(--font-pixel)' }}>01.</span>
                        EDUCATION
                    </h3>

                    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px' }}>Undergraduate</h4>
                        <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-pixel)', display: 'block', marginBottom: '10px' }}>2023-Present</span>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>BE Information and Science Engineering</p>
                        <p style={{ fontSize: '1.1rem' }}>Visvesvaraya Technological University | Bengaluru</p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px' }}>School</h4>
                        <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-pixel)', display: 'block', marginBottom: '10px' }}>2009-2022</span>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Central Board of Secondary Education(CBSE) | Sharjah, UAE</p>
                        <p style={{ fontSize: '1.1rem' }}>Secondary (Class 10) & Higher Secondary (Class 12)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
