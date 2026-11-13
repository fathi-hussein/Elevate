import React from 'react';
import { Target, Users, Sparkles, CheckCircle2, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="status-dot"></span>
            ABOUT ELEVATE
          </div>
          <h1 style={{ maxWidth: '700px' }}>
            Empowering the Next Generation of <span>Tech Professionals</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '580px', marginTop: '16px' }}>
            Elevate is a curated learning and career discovery platform designed to help self-taught developers, interns, and students navigate the tech industry with confidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container">
          <div className="deadline-layout">
            <div className="deadline-intro">
              <span className="section-label">OUR MISSION</span>
              <h2>Building clarity in a noisy digital learning landscape</h2>
              <p>
                With thousands of tutorials, courses, and bootcamps available online, knowing where to start and what skills actually matter can be overwhelming. Elevate cuts through the clutter.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--green)' }} /> Hand-vetted learning resources and roadmaps
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--green)' }} /> Practical focus on modern frontend and tech stacks
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--green)' }} /> Completely free, open, and beginner-friendly community tool
                </div>
              </div>
            </div>

            <div className="deadline-list">
              <div className="deadline-item" style={{ background: 'var(--light-bg)', border: 'none' }}>
                <div className="deadline-date" style={{ background: '#E6F5F0', color: 'var(--green)' }}>
                  <Target size={24} />
                </div>
                <div className="deadline-info">
                  <span className="deadline-category">PURPOSE</span>
                  <h3>Curated Discovery</h3>
                  <p>Providing structured resource filtering so learners spend less time searching and more time building.</p>
                </div>
              </div>

              <div className="deadline-item" style={{ background: 'var(--light-bg)', border: 'none' }}>
                <div className="deadline-date" style={{ background: '#E8F0FF', color: '#3157C8' }}>
                  <Users size={24} />
                </div>
                <div className="deadline-info">
                  <span className="deadline-category" style={{ color: '#3157C8' }}>COMMUNITY</span>
                  <h3>Built for Learners</h3>
                  <p>Created as part of an intensive web development internship journey to solve real developer friction points.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / How We Help */}
      <section className="section-padding how-it-works">
        <div className="container">
          <div className="center-heading">
            <span className="section-label">CORE VALUES</span>
            <h2>What Drives Our Platform</h2>
            <p>We believe learning software engineering should be transparent, accessible, and structured.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon"><Compass size={24} /></div>
              <h3>Quality Over Quantity</h3>
              <p>We feature only high-impact documentation, reputable bootcamps, and top-tier tutorials that deliver proven value.</p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon"><Sparkles size={24} /></div>
              <h3>Practical Growth</h3>
              <p>Every resource is tagged by difficulty, pricing, and domain type so you can match your exact current learning stage.</p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon"><Target size={24} /></div>
              <h3>Continuous Evolution</h3>
              <p>Constantly updated with fresh developer roadmaps, frontend tools, and modern industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="section-label">GET STARTED</span>
            <h2>Ready to accelerate your learning journey?</h2>
            <p>Jump into our curated resource hub and discover top tools tailored to your goals.</p>
            <Link to="/explore" className="btn btn-primary" style={{ background: 'var(--mint)', color: 'var(--navy)' }}>
              Explore Resources Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}