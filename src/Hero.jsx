import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/files/ThanishaS_MCA_B.pdf`;
    link.download = 'ThanishaS_MCA_B.pdf';
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
            THANISHA <span>S</span>
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
            <a href="https://www.linkedin.com/in/thanisha-s-88a1b0228/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Thanisha2727" target="_blank" rel="noopener noreferrer">
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
            THANISHA <span className="highlight">S</span>
          </h1>
          <p className="hero-subtitle">Data Science Enthusiast</p>
          <p className="hero-description">
            Crafting innovative, scalable, and user-focused solutions with a passion for data science and full-stack development.
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
          I am a dedicated Software Engineer with a passion for building intelligent, scalable web applications.
          With expertise in React.js, MySQL, and data science, I create solutions that are both functional and user-friendly.
          My interests lie in AI, data-driven systems, and emerging technologies, driving me to explore tools that enable smarter applications.
          From e-commerce platforms to AI-powered apps, I focus on clean code and impactful solutions that solve real-world problems.
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
              <div className="skill">DATA SCIENCE</div>
<div className="skill">Artificial intelligence</div>
<div className="skill">Networking</div>

            </div>
          </div>


              <div className="skills-box">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill">PYTHON</div>
              <div className="skill">JAVA</div>
<div className="skill">JAVASCRIPT</div>
<div className="skill"></div>

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
              src="https://i.ytimg.com/vi/CITzpWbTSE8/maxresdefault.jpg"
              alt="Dog Breed Recognition"
            />



            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>Dog Breed Recognition</h3>
              <p>
                A web app using deep learning to identify dog breeds from images, providing breed details, stats, and adoption links.
                Includes name suggestions based on selected gender.
              </p>
              <div className="tags">
                <span className="tag">TensorFlow</span>
                <span className="tag">Scrapy</span>
                <span className="tag">NumPy</span>
                <span className="tag">Streamlit</span>
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Thanishaa27/dog-breed-identifier/blob/main/mainapp.py"
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
              src="https://tse3.mm.bing.net/th?id=OIP.p1qnyq5K24cIVkqfmN8T7wHaE7&pid=Api&P=0&h=180"
              alt="Natural Language Processing"
            />
            <div className="card-content">
              <h3>Natural Language Processing</h3>
              <p>
                An NLP-based project enabling chatbots to understand and respond to human language, bridging communication gaps.
              </p>
              <div className="tags">
                <span className="tag">TensorFlow</span>
                <span className="tag">NLTK</span>
                <span className="tag">Tokenizer</span>
                <span className="tag">LSTM</span>
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Thanisha2727/Natural-language-processing"
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
              src="https://tse2.mm.bing.net/th?id=OIP.Kw5zI06_Mhnr75_uOyR1cgHaD5&pid=Api&P=0&h=180"
              alt="KM Malligai Store"
            />
            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>ARP SPOOFING</h3>
              <p>
               The goal of this project is to demonstrate a Man-in-the-Middle (MITM) attack using ARP Spoofing. This shows how a hacker can intercept communication between a victim and a router by manipulating the ARP
              </p>
              <div className="tags">
                <span className="tag">Librosa</span>
                <span className="tag">SoundFile</span>
                <span className="tag">SciPy</span>
                <span className="tag">PyAudio</span>
                <span className="tag">Wave</span>
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Thanisha2727/ARP-SPOOFING"
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
              src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-Deep-Learning-and-Neural-Networks.jpg"
              alt="Natural Language Processing"
            />
          <div className="card-content">
              <h3>NEURA NETWORK SCRATCH</h3>
              <p>
              The goal of this project is to implement a basic neural network from scratch without using any machine learning frameworks like TensorFlow or PyTorch. Instead, we use only NumPy for matrix operations to understand the fundamentals of how neural networks work internally
              </p>
              <div className="tags">
                <span className="tag">NUMPY</span>
             
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Thanisha2727/Neural-Network"
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
              src="https://tse1.mm.bing.net/th?id=OIP.fMBLvkdLbg0MEfv7KbJZjQHaCl&pid=Api&P=0&h=180"
              alt="KM Malligai Store"
            />
            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>HAND GESTURE MEDIA PLAYER CONTROL</h3>
              <p>
               To control video playback using finger gestures detected by a webcam. Each finger count performs a different function like play, pause, next, or preview of the video.
              </p>
              <div className="tags">
                <span className="tag">MEDIAPIPE</span>
                <span className="tag">OPENCV</span>
                <span className="tag">PYAUTOGUI</span>
                
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Thanisha2727/Neural-Network"
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
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/84/8a/b4/848ab476-4b69-1c4e-50da-71d96114dcdc/AppIcon-85-220-4-2x.png/1200x630wa.png"
              alt="Natural Language Processing"
            />
          <div className="card-content">
              <h3>VOICE CHANGER USING LIBROSA</h3>
              <p>
             🎙️ This project records your voice using PyAudio and saves it as a WAV file.
🐱 Then it modifies the recording to sound like a cat by increasing pitch and speed using Librosa.
🔊 Finally, it applies a bandpass filter to clean the sound and saves the "catified" audio using SoundFile</p>
              <div className="tags">
                
          <span className="tag">LIBROSA</span>
          <span className="tag">SOUND FILE</span>
          <span className="tag">SCIPY</span>
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
            <div className="internship-date">May 03, 2024</div>
            <h3>Frontend Developer</h3>
            <div className="company-name">
              🏢{' '}
              <h3>
                <a href="https://rooman.net" className="blue-link" target="_blank" rel="noopener noreferrer">
                  Rooman Technologies
                </a>
              </h3>
            </div>
            <ul className="internship-points">
              <li> Built responsive web pages using HTML and CSS.</li>
              <li> Designed clean layouts with Flexbox and Grid.</li>
              <li>Improved page styling for better user experience.</li>
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
            <p className="cgpa">CGPA: 9.1</p>
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
                <strong>Email:</strong> <a href="mailto:sthanisha84@gmail.com">sthanisha84@gmail.com</a>
              </div>
            </div>
            <div className="info-box">
              <span className="icon"><i className="fa fa-phone"></i></span>
              <div className="info">
                <strong>Phone:</strong> +91 8105091572
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
  <form action="https://formsubmit.co/sthanisha84@gmail.com" method="POST">
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