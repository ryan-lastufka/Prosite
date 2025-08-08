import { FunctionComponent } from 'preact';
import './css/app.css';
import { Section } from './components/Section';
import { SkillCard } from './components/SkillCard';
import { ExperienceCard } from './components/ExperienceCard';
import { EducationCard } from './components/EducationCard';
import { NavigationStrip } from './components/NavigationStrip';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const SECTIONS_IDS = ['landing', 'skills', 'experience', 'education'];
const SECTION_CLASS_NAME = 'section';

const App: FunctionComponent = () => {
    const sections = SECTIONS_IDS;

    const scrollToSection = (currentSection: HTMLElement, direction: 'next' | 'prev') => {
        const targetSection = direction === 'next'
            ? currentSection.nextElementSibling as HTMLElement
            : currentSection.previousElementSibling as HTMLElement;

        if (targetSection && targetSection.classList.contains(SECTION_CLASS_NAME)) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSectionScroll = (direction: 'next' | 'prev') => (e: MouseEvent) => {
        const section = (e.currentTarget as HTMLElement).closest(`.${SECTION_CLASS_NAME}`);
        if (section) scrollToSection(section as HTMLElement, direction);
    };

    const scrollToContact = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="app">
            <NavigationStrip sections={sections} />

            <Section
                id="landing"
                isFirst={true}
                onNextSection={handleSectionScroll('next')}
            >
                {}
                <div className="profile-container">
                    <img src="/assets\portraits\portrait-2-final.png" alt="Ryan Lastufka" className="profile-image" />
                    <h1>Ryan Lastufka</h1>
                    <p>Versatile software engineer with expertise across the full technology stack. From low-level systems programming to modern web development and graphic design, I bring a deep technical understanding and adaptable approach to every project.</p>
                    <p className="subtitle">Experience. Adapt. Refine.</p>
                </div>
            </Section>

            <Section
                id="skills"
                onNextSection={handleSectionScroll('next')}
                onPrevSection={handleSectionScroll('prev')}
            >
                <h2>Skills & Expertise</h2>
                <div className="skills-grid">
                    <SkillCard
                        title="Web Development"
                        description="Proficient in modern web technologies with strong background in both frontend and backend development. Built web-based database interfaces and internal tooling systems at ProPath using PHP and modern JavaScript frameworks. Experienced with modern development practices and CI/CD workflows."
                        technologies={[
                            'React', 'Preact', 'Vue.js', 'Next.js',
                            'TypeScript', 'PHP',
                            'Node.js', 'Express', 'PostgreSQL',
                            'Docker', 'Vite', 'Webpack', 'TailwindCSS'
                        ]}
                        imageUrl="/assets\stock\pexels-markusspiske-360591.jpg"
                        imageAlt="Web Development"
                    />
                    <SkillCard
                        title="Software Architecture"
                        description="Experienced in designing and implementing scalable systems using modern methodologies like Agile and Scrum. Strong background in architectural patterns (MVC, MVVM, microservices) and design principles (SOLID, DRY). Focus on maintainable, efficient solutions with clear documentation and testing strategies."
                        technologies={[
                            'AWS', 'Docker', 'Kubernetes',
                            'REST', 'GraphQL', 'MongoDB', 'SQLite', 'Redis',
                            'Git', 'Microservices',
                            'C#', 'Java', 'Kotlin'
                        ]}
                        imageUrl="/assets\stock\pexels-mikhail-nilov-7988241.jpg"
                        imageAlt="Software Architecture"
                    />
                    <SkillCard
                        title="IT & Systems"
                        description="Comprehensive understanding of IT infrastructure and system administration, developed through roles at PhotoFusion Technologies and the Texas A&M University IT Department. Experience in maintaining and securing computer systems across various platforms, from academic to industrial environments."
                        technologies={[
                            'Windows', 'Linux', 'MacOS',
                            'Active Directory', 'VMware',
                            'Networking', 'Security', 'Hardware', 'Virtualization'
                        ]}
                        imageUrl="/assets\stock\pexels-joshsorenson-1054397.jpg"
                        imageAlt="IT & Systems"
                    />
                    <SkillCard
                        title="Systems Programming"
                        description="Skilled in embedded systems development and low-level programming, applied extensively in laser technology systems at PhotoFusion. Experienced in robotics control systems, hardware interfaces, and real-time processing for precision equipment."
                        technologies={[
                            'C', 'C++', 'Assembly',
                            'Arduino', 'Raspberry Pi', 'ARM', 'AVR',
                            'RTOS', 'Linux',
                            'USB', 'Serial', 'I2C', 'SPI'
                        ]}
                        imageUrl="/assets\stock\pexels-tima-miroshnichenko-6755058.jpg"
                        imageAlt="Systems Programming"
                    />
                    <SkillCard
                        title="Creative Technology"
                        description="Designer and illustrator with 3D modeling and procedural generation capabilities. Combines technical expertise with aesthetic sensibility to bridge the gap between development and design. Experienced in collaborating with artists and designers."
                        technologies={[
                            'Affinity Designer', 'Adobe Illustrator', 'Clip Studio Paint', 'Blender',
                            'Unity',
                            'WebGL', 'Three.js', 'SVG', 'Canvas'
                        ]}
                        imageUrl="/assets\stock\pexels-adrien-olichon-1257089-3137076.jpg"
                        imageAlt="Creative Technology"
                    />
                </div>
            </Section>

            <Section
                id="experience"
                onNextSection={handleSectionScroll('next')}
                onPrevSection={handleSectionScroll('prev')}
            >
                <h2>Work Experience</h2>
                <div className="experience-list">
                    <ExperienceCard
                        title="Software Architect"
                        company="PhotoFusion Technologies"
                        description="Led full-stack development initiatives across multiple domains, developing robotics control systems and microcontroller firmware using C++ and Python. Designed and implemented user interfaces with Vue.js and TypeScript, while architecting cloud-based infrastructure solutions. Successfully integrated multimodal technologies to create cohesive systems, demonstrating expertise in both hardware and software development."
                        logoImageUrl="/assets\logo\photofusion+left+aligned.png"
                        logoImageAlt="PhotoFusion Technologies Inc. Logo"
                        previewImageUrl="/assets\stock\pexels-optlasers-7254428.jpg"
                        previewImageAlt="Laser systems control software was part of my many responsibilities."
                    />
                    <ExperienceCard
                        title="PHP Developer"
                        company="ProPath Pathology Services"
                        description="Specialized in internal tools development and database integration, building comprehensive web-based solutions using PHP and SQL. Managed and optimized database systems while implementing robust cybersecurity measures. Created efficient, secure applications that streamlined internal processes and improved data management workflows."
                        logoImageUrl="/assets\logo\propath-logo.png"
                        logoImageAlt="ProPath Pathology Services Logo"
                        previewImageUrl="/assets\stock\pexels-sejio402-6466141.jpg"
                        previewImageAlt="I was involved in writing database tooling and IT tasks."
                    />
                    <ExperienceCard
                        title="IT Support Specialist"
                        company="Texas A&M University Department of IT"
                        description="Provided comprehensive IT support services, performing hardware diagnostics, repairs, and system maintenance. Managed computer systems and hardware inventory while delivering technical support to faculty and students. Developed expertise in system administration and hardware troubleshooting through hands-on experience in a large academic environment."
                        logoImageUrl="/assets\logo\TAM-Stack-white-bg.png"
                        logoImageAlt="Texas A&M University Logo"
                        previewImageUrl="/assets\stock\pexels-cookiecutter-17489151.jpg"
                        previewImageAlt="In the Computer Repair Service I completed hardware tasks and managed inventory."
                    />
                </div>
            </Section>

            <Section
                id="education"
                isLast={false}
                onPrevSection={handleSectionScroll('prev')}
                onNextSection={scrollToContact}
            >
                <h2>Education</h2>
                <div className="education-list">
                    <EducationCard
                        school="Dallas Baptist University"
                        degree="Computer Science"
                        period="2018 - 2019"
                        description="Advanced coursework in software development and computer systems. Telecommunications and networking."
                        logoImageUrl="/assets\logo\dbu-compact.png"
                        logoImageAlt="Dallas Baptist University Logo"
                    />
                    <EducationCard
                        school="Texas A&M University"
                        degree="Bachelor of Science in Computer Science"
                        period="2016 - 2018"
                        description="Focused on systems programming, software engineering, and computer architecture. Computer graphics, algorithms, related upper-level mathematics."
                        logoImageUrl="/assets\logo\TAM-Stack-white-bg.png"
                        logoImageAlt="Texas A&M University Logo"
                    />
                </div>
            </Section>

            {}
            <footer className="footer">
                <div className="contact-info">
                    <h2>Contact</h2>
                    <a href="mailto:ryan.lastufka@gmail.com" className="footer-link contact-icon-link">
                        <FaEnvelope />
                        ryan.lastufka@gmail.com
          </a>
                    <p>
                        <FaPhone />
                        (682) 265-0990
          </p>
                    <p>
                        <a href="https://www.linkedin.com/in/ryan-lastufka-21016628b/" className="footer-link contact-icon-link">
                            <FaLinkedin />
                            linkedin.com/in/ryan-lastufka-21016628b
            </a>
                    </p>
                </div>
                <div className="copyright">
                    <p>© 2025 Ryan Lastufka. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
