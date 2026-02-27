"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaTools, FaRunning, FaCloudSun } from 'react-icons/fa';
import './About.css';

const About = () => {
    const roles = ["Frontend Developer", "Java Full Stack Developer", "AI-powered Developer"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-container">
            <h1 className="page-title its-me-title">It's Me</h1>

            <div className="about-card">
                <div className="profile-section">
                    <div className="profile-header">
                        <h2 className="dev-name">Hariprasath R</h2>
                        <h3 className="dev-role">
                            <span key={currentRole} className="role-text-swap">{roles[currentRole]}</span>
                        </h3>
                    </div>
                </div>

                <div className="content-grid">
                    <div className="text-content">
                        <div className="bio-section">
                            <p>
                                I build sleek, responsive, and high-performance web applications using modern React and Next.js. With a strong focus on component-driven architecture and asynchronous data fetching, I design user interfaces that are intuitive, fast, and accessible.
                            </p>
                            <p>
                                I am passionate about transforming ideas into engaging digital experiences through clean code, state management, and modern CSS techniques like glassmorphism and micro-animations.
                            </p>
                        </div>

                        <div className="stats-strip">
                            <div className="stat-item">
                                <span className="stat-value">2</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">2</span>
                                <span className="stat-label">Internships</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value"><FaRunning className="inline-icon" /></span>
                                <span className="stat-label">Hackathon Winner</span>
                            </div>
                        </div>
                    </div>

                    <div className="tech-stack-section">
                        <h3 className="section-subtitle">Technical Stack</h3>
                        <div className="stack-grid">
                            <div className="stack-card">
                                <div className="stack-header">
                                    <FaCode className="stack-icon" /> <span>Frontend Core</span>
                                </div>
                                <ul>
                                    <li>React 19</li>
                                    <li>Next.js 16 (App Router)</li>
                                    <li>Client-Side State Management</li>
                                    <li>Asynchronous Fetch API</li>
                                </ul>
                            </div>

                            <div className="stack-card">
                                <div className="stack-header">
                                    <FaCloudSun className="stack-icon" /> <span>UI & Styling</span>
                                </div>
                                <ul>
                                    <li>Modern CSS3 Variables</li>
                                    <li>Glassmorphism Effects</li>
                                    <li>Responsive Grid & Flexbox</li>
                                    <li>CSS Animations</li>
                                </ul>
                            </div>

                            <div className="stack-card">
                                <div className="stack-header">
                                    <FaServer className="stack-icon" /> <span>Data & APIs</span>
                                </div>
                                <ul>
                                    <li>RESTful API Integration</li>
                                    <li>JSON Parsing</li>
                                    <li>Error Handling</li>
                                    <li>WeatherAPI Documentation</li>
                                </ul>
                            </div>

                            <div className="stack-card">
                                <div className="stack-header">
                                    <FaTools className="stack-icon" /> <span>Dev Environment</span>
                                </div>
                                <ul>
                                    <li>Node.js / npm</li>
                                    <li>Git & Version Control</li>
                                    <li>Vercel / Local Server Hosting</li>
                                    <li>React Icons</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="about-project-section">
                        <h3 className="section-subtitle"><FaCloudSun className="inline-icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />About This Project</h3>
                        <div className="project-description-card">
                            <p>
                                <strong>Weather App</strong> is a lightweight, responsive application designed to showcase a pristine frontend built with <strong>Next.js</strong> and <strong>React</strong>.
                                It demonstrates modern UI/UX principles, featuring a stunning glassmorphism design aesthetic and smooth micro-animations.
                            </p>
                            <p>
                                Key features include <strong>real-time weather fetching</strong> from WeatherAPI, dynamic search functionality with robust error handling,
                                and a tailored <strong>Popular Cities</strong> dashboard that aggregates concurrent data streams seamlessly.
                            </p>
                            <p>
                                By deeply integrating Next.js routing, efficient state manipulation, and global CSS variables, this application stands as a testament
                                to clean frontend architecture and API integration.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contact-footer">
                    <a href="https://github.com/Hp24get" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub /> <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/hariprasath-r-85a346267/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin /> <span>LinkedIn</span>
                    </a>
                    <a href="mailto:hariprasath24r@gmail.com" className="social-link">
                        <FaEnvelope /> <span>Email</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
