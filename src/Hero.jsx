import React from 'react';
import './Hero.css';


import animeimage from './Images/animewebsite.jpg';
import farmingtonapp from './Images/Farmington app.jpg'
import dhcpsnooping from './Images/DHCP SNOOPING NETWORKING.jpg'

import handgestsock from './Images/HAND GEST+SOCKET.jpg'

import gamesteering from './Images/Hand Gesture-Controlled Game Interface.png'
import NeuralNumber from './Images/Neural number.png'

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/files/Jenit Akash_MCA_B (2).pdf`;
    link.download = 'Jenit Akash_MCA_B (2).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="hero-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            JENIT AKASH <span>A</span>
          </div>
          <ul className="nav-menu">
            {['about', 'skills', 'projects', 'internship', 'education', 'contact'].map((section) => (
              <li
                key={section}
                onClick={() => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
          <div className="nav-icons">
            <a href="https://www.linkedin.com/in/jenit-akash-385069262/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/jenitakash2727" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>

            {/* <a href="https://www.instagram.com/_thanisha._?igsh=Mzltb2pneHM2ZWt1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a> */}

          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            JENIT AKASH <span className="highlight">A</span>
          </h1>
          <p className="hero-subtitle">Data Science Enthusiast</p>
          <p className="hero-description">
        I’am Jenit Akash, a passionate and self-driven tech enthusiast pursuing my Master’s in Computer Applications (MCA) from Alliance University. My interests lie in Artificial Intelligence, Cybersecurity, Web and App Development, and Networking. I love solving real-world problems through code and have built projects involving voice AI, gesture-controlled systems, and cybersecurity simulations. I'm always eager to learn and contribute to impactful tech innovations.
          </p>
          <div className="hero-buttons">
            <button className="btn">Get In Touch</button>
            <button className="btn" onClick={handleDownload}>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="about-me-container" id="about">
        <h2 className="section-title">About Me</h2>
        <p>
        I’am Jenit Akash, a passionate and self-driven tech enthusiast pursuing my Master’s in Computer Applications (MCA) from Alliance University. My interests lie in Artificial Intelligence, Cybersecurity, Web and App Development, and Networking. I love solving real-world problems through code and have built projects involving voice AI, gesture-controlled systems, and cybersecurity simulations. I'm always eager to learn and contribute to impactful tech innovations.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skills-box">
            <h3>Frontend</h3>
            <div className="skills-grid">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">React.js</div>
            </div>
          </div>
          <div className="skills-box">
            <h3>Database Management</h3>
            <div className="skills-grid">
              <div className="skill">MongoDB</div>
              <div className="skill">MySQL</div>
            </div>
          </div>
    <div className="skills-box">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill">APP DEVELOPMENT</div>
               <div className="skill">WEBSITE DEVELOPMENT</div>
              <div className="skill">DATA SCIENCE</div>
<div className="skill">Artificial intelligence</div>
<div className="skill">Networking</div>
<div className="skill">CYBER SECURITY</div>


            </div>
          </div>


              <div className="skills-box">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill">PYTHON</div>
              <div className="skill">JAVA</div>
<div className="skill">JAVASCRIPT</div>
<div className="skill">C#</div>
<div className="skill">C++</div>
<div className="skill">C</div>

            </div>
          </div>




          <div className="skills-box">
            <h3>Tools & Technologies</h3>
            <div className="skills-grid">
              <div className="skill">Git</div>
              <div className="skill">GitHub</div>
              <div className="skill">Figma</div>
              <div className="skill">Jupyter Notebook</div>
              <div className="skill">Google Colab</div>
              <div className="skill">VS Code</div>
               <div className="skill">PYCHARM</div>
                  <div className="skill">ANDROID STUDIO</div>
          
            </div>


       



            





          </div>

          
        </div>
        
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          <div className="project-card featured">
          <img
  src={animeimage}
  alt="Anime streaming Website"
/>




            <div className="card-content">
              <span className="tag">Featured</span>
              <h3></h3>
              <p>
          AnimeVerse is a user-friendly anime streaming-style website that allows users to browse, search, and explore information about their favorite anime. It uses the Jikan API to fetch real-time anime data like trending shows, upcoming anime, anime details, and more.


              </p>
              <div className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JAVASCRIPT</span>
                <span className="tag">REACT JS</span>
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/jenitakash2727/Anime-Streaming-Website-Using-React-js-HTML-CSS-JAVASCRIPT-"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img
            src={farmingtonapp}
              alt="Farmington app"
            />
            <div className="card-content">
              <h3>FARMINGTON APP</h3>
              <p>
                To build a smart farming app that connects farmers and buyers directly by allowing farmers to upload and sell crops or vegetables (e.g., tomato, onions, etc.) online. The app simplifies agricultural marketing and supports local crop-based e-commerce.


              </p>
              <div className="tags">
                <span className="tag">ANDROID STUDIO</span>
                <span className="tag">JAVA</span>
                <span className="tag">FIREBASE</span>
          
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/jenitakash2727/Farmington-app-using-Android-Studio"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card featured">
            <img
              src={dhcpsnooping}
              alt="KM Malligai Store"
            />
            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>DHCP SNOOPING</h3>
              <p>
              The DHCP Snooping project is a security mechanism implemented in network switches to prevent unauthorized (rogue) DHCP servers from distributing invalid IP configurations to clients. This project involves creating a Python-based simulation using Scapy, where network traffic is monitored to identify and filter out malicious DHCP responses. The switch (or simulated switch in the project) maintains a database of trusted ports where valid DHCP servers are located. Any DHCP offer or acknowledgment received on untrusted ports is dropped to prevent IP spoofing or man-in-the-middle attacks. This helps ensure only legitimate devices assign IP addresses, protecting the network from attacks such as DHCP spoofing and IP conflicts. Through this project, we demonstrate how network administrators can enforce DHCP security policies and maintain network integrity.
              </p>
              <div className="tags">
                <span className="tag">SCAPY</span>
               
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/jenitakash2727/DHCP-SNOOPING-USING-SCAPY-NETWORKING"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>





            
          </div>
            <div className="project-card">
            <img
              src={handgestsock}
              alt="hand gest sock"
            />
          <div className="card-content">
              <h3>Hand Gesture Based Text Transfer Over Network-AI + Networking</h3>
              <p>
              The goal of this project is to create a system that uses hand gestures (recognized via computer vision) to send custom text messages or signals over a network (LAN/Wi-Fi). The system combines AI (gesture recognition) and networking (socket programming) to transfer data without using a keyboard or mouse.
              </p>
              <div className="tags">
                <span className="tag">OPENCV</span>
                   <span className="tag">MEDIAPIPE</span>
                    <span className="tag">SOCKET</span>
                     <span className="tag">PYAUTOGUI</span>
             
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/jenitakash2727/Hand-Gesture-Based-Text-Transfer-Over-Network-AI-NETWORKING"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
            </div>

     <div className="project-card featured">
            <img
              src={NeuralNumber}
              alt="KM Malligai Store"
            />
            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>CNN-NEURAL NUMBER RECOGNITION</h3>
              <p>
              To develop a Convolutional Neural Network (CNN) model that can recognize handwritten digits (0–4) from image data, typically using datasets like MNIST.
              CNN is a type of deep learning neural network used for image classification. It automatically learns features from images using:

Convolutional layers: Detect features like edges, curves, and patterns.

Pooling layers: Reduce image size while keeping important info.

Fully connected layers: Make final predictions based on learned features

The model learns to classify digits from images.

Accuracy: Generally above 98% with this CNN architecture.
              </p>
              <div className="tags">
                <span className="tag">MEDIAPIPE</span>
                <span className="tag">OPENCV</span>
                <span className="tag">PYAUTOGUI</span>
                
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/jenitakash2727/CNN-NEURAL-NUMBER-RECOGNITION-"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>





            
          </div>




             <div className="project-card">
            <img
              src={gamesteering}
              alt="Natural Language Processing"
            />
          <div className="card-content">
              <h3>KIvymd-app-using-game-steering-wheel-control-and-hand-gestures</h3>
              <p>
I created a Android app with hand gesture 
controls for a media player and a car game 
steering wheel control using fake cardboard 
KIvymd app using game steering wheel control 
and hand gestures  
Gesture-Controlled Copy-Paste over-AI+ Net</p>
              <div className="tags">
                
          <span className="tag">OPENCV</span>
          <span className="tag">MEDIAPIPE</span>
          <span className="tag">PYAUTOGUI</span>
          <span className="tag">PYAUDIO</span>
          <span className="tag">WAVE</span>
             
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Thanisha2727/Voice-changer-Using-Librosa"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
            </div>




            
        </div>
      </section>

      {/* Internship Section */}
      <section className="internship-section" id="internship">
        <h2 className="section-title">Internship Experience</h2>
        <p className="section-subtitle">Practical experience and hands-on learning through internships</p>
        <div className="internship-list">
          <div className="internship-card">
            <div className="internship-date">SEPTEMBER, 2023</div>
            <h3>MICROSOFT  AZURE CLOUD TECHNOLOGIES</h3>
            <div className="company-name">
              🏢{' '}
              <h3>
                <a href="https://www.zaubacorp.com/HYSTERESIS-PRIVATE-LIMITED-U80902PN2020PTC192467#google_vignette" className="blue-link" target="_blank" rel="noopener noreferrer">
                  HYSTERESIS PRIVATE LIMITED
                </a>
              </h3>
            </div>
            <ul className="internship-points">
              <li> Developed and deployed scalable web applications using Microsoft Azure services like App Service and Azure SQL.</li>
              <li> Implemented cloud storage solutions with Azure Blob Storage to manage and access large datasets securely.</li>
              <li>Enhanced application performance and availability using Azure Functions and Load Balancer.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="icon-circle"></div>
          <div className="edu-details">
            <h3>Master of Computer Applications</h3>
            <p className="highlight">Data Science</p>
            <a href="https://www.alliance.edu.in" className="blue-link" target="_blank" rel="noopener noreferrer">
              Alliance University
            </a>
            <p className="info-icons">
              <span><i className="fa fa-calendar"></i> SEP 2024 - MAY 2026</span>
              <span><i className="fa fa-map-marker"></i> Bengaluru, India</span>
            </p>
            <p className="cgpa">CGPA: 8.1</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaborations or inquiries!</p>
            <div className="info-box">
              <span className="icon"><i className="fa fa-envelope"></i></span>
              <div className="info">
                <strong>Email:</strong> <a href="mailto:jenitakash@gmail.com">jenitakash@gmail.com</a>
              </div>
            </div>
            <div className="info-box">
              <span className="icon"><i className="fa fa-phone"></i></span>
              <div className="info">
                <strong>Phone:</strong> +91 8072026020
              </div>
            </div>
            <div className="info-box">
              <span className="icon"><i className="fa fa-map-marker"></i></span>
              <div className="info">
                <strong>Location:</strong> Bengaluru, India
              </div>
            </div>
          </div>
          <div className="contact-form">
  <form action="https://formsubmit.co/jenitakash@gmail.com" method="POST">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required />

    <label htmlFor="subject">Subject</label>
    <input type="text" id="subject" name="subject" placeholder="Subject" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" placeholder="Your Message" required></textarea>


    <input type="hidden" name="_captcha" value="false" />


    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

    <button type="submit">Send Message</button>
  </form>

  <h3>Send a Message</h3>
</div>

        </div>
      </section>
    </>
  );
};

export default Hero;
