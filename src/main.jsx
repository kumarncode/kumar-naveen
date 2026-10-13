import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import {
  ArrowDownToLine, ArrowRight, BriefcaseBusiness, Code2, GraduationCap,
  Mail, MapPin, Phone, Send, ExternalLink, CheckCircle2, Menu, X,
  Github, Linkedin, Globe, Sparkles
} from 'lucide-react';
import './styles.css';

const cvUrl = '/Naveen_Frontend_8_years.pdf';

const skills = [
  'React.js', 'JavaScript', 'Redux', 'TypeScript (knowledge)', 'HTML5',
  'CSS3', 'SCSS', 'Bootstrap 3/4/5', 'jQuery', 'REST APIs',
  'C# / .NET', 'SQL Server', 'PostgreSQL', 'MongoDB'
];

const experience = [
  { company: 'CMS Computers Ltd', role: 'Frontend Developer', date: 'Feb 2025 – Present', place: 'Delhi', current: true },
  { company: 'Velocis Systems Pvt. Ltd.', role: 'Software Developer', date: 'Jun 2023 – Jan 2025', place: 'Delhi' },
  { company: 'Akal Information Systems Ltd.', role: 'Software Developer', date: 'Apr 2022 – May 2023', place: 'Delhi' },
  { company: 'Himflax Informations Technologies Pvt. Ltd.', role: 'Web Developer', date: 'Nov 2020 – Apr 2022', place: 'Noida' },
  { company: 'Aglaea Pharmaceuticals Pvt. Ltd.', role: 'Web Developer', date: 'Apr 2020 – Oct 2020', place: 'Noida' },
  { company: 'AMIRIT Techservices Pvt. Ltd.', role: 'Senior Web Designer', date: 'Mar 2019 – Mar 2020', place: 'Noida' },
  { company: 'Interactive Webtech Pvt. Ltd.', role: 'Web / Graphic Designer', date: 'Mar 2017 – Mar 2019', place: 'India' }
];

const projects = [
  { name: 'IPMS', team: '5 members', tech: 'React.js, Redux, SCSS, Java, PostgreSQL', detail: 'Contributed to application development and UI design.' },
  { name: 'Bhuneer', team: '9 members', tech: 'C#, ASP.NET MVC, HTML5, JavaScript, jQuery, SQL Server 2019, Web API', detail: 'Worked on web application development and design using the .NET framework.' },
  { name: 'NOCAP — Central Ground Water Authority', team: '11 members', tech: 'C#, ASP.NET, HTML5, JavaScript, jQuery, SQL Server 2014, Web API', detail: 'Contributed to development and design of the NOCAP application.' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ from_name: '', from_email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: '', text: '' });
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', text: 'Contact form is not configured yet. Please email frontenddevelopers1@gmail.com directly, or configure EmailJS using the README instructions.' });
      return;
    }
    setSending(true);
    try {
      await emailjs.send(serviceId, templateId, {
        ...form,
        to_email: 'frontenddevelopers1@gmail.com',
        reply_to: form.from_email
      }, { publicKey });
      setStatus({ type: 'success', text: 'Thanks! Your message has been sent successfully.' });
      setForm({ from_name: '', from_email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', text: 'Your message could not be sent. Please try again or email frontenddevelopers1@gmail.com directly.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">N</span><span>Naveen<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {[['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-download" href={cvUrl} download="Naveen_Kumar_CV.pdf"><ArrowDownToLine size={16} /> Download CV</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO THE RIGHT OPPORTUNITY</div>
            <h1>Hi, I'm <span>Naveen Kumar.</span><br />I build for the <em>web.</em></h1>
            <p className="hero-lead">Frontend Developer focused on building responsive, intuitive web experiences with React, JavaScript, and modern UI technologies.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Let's talk <ArrowRight size={17} /></a>
              <a className="btn btn-secondary" href={cvUrl} download="Naveen_Kumar_CV.pdf"><ArrowDownToLine size={17} /> Download CV</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Noida, Uttar Pradesh, India</span>
              <span><BriefcaseBusiness size={15} /> 8+ years of experience*</span>
            </div>
            <small className="asterisk-note">*As stated in the provided CV.</small>
          </div>
          <div className="hero-art" aria-label="Frontend development illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i></i><i></i><i></i></div><span>naveen.dev.jsx</span><span className="window-lock">●</span></div>
              <div className="code-body">
                <div><span className="line-no">01</span><span className="syntax-purple">const</span> <span className="syntax-blue">developer</span> = {'{'}</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="syntax-green">'Naveen Kumar'</span>,</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;role: <span className="syntax-green">'Frontend Developer'</span>,</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;skills: [</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-green">'React'</span>, <span className="syntax-green">'JavaScript'</span>,</div>
                <div><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-green">'CSS'</span>, <span className="syntax-green">'UI/UX'</span></div>
                <div><span className="line-no">07</span>&nbsp;&nbsp;],</div>
                <div><span className="line-no">08</span>&nbsp;&nbsp;building: <span className="syntax-orange">true</span></div>
                <div><span className="line-no">09</span>{'}'};</div>
                <div className="code-cursor"><span className="line-no">10</span><span className="cursor"></span></div>
              </div>
              <div className="code-footer"><span><span className="tiny-green"></span> Ready to build</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
            </div>
            <div className="float-card float-react"><Code2 size={18} /><span>React.js</span></div>
            <div className="float-card float-ui"><Sparkles size={17} /><span>Clean UI</span></div>
            <div className="hero-glow"></div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Turning ideas into<br /><span>useful interfaces.</span></h2></div>
            <div className="about-content"><p>I'm a frontend developer with 8+ years of professional experience across web design and application development. My background spans React-based interfaces, responsive layouts, and .NET-powered web applications.</p><p>I enjoy collaborating with teams, solving UI challenges, and continuously learning technologies that make digital products more useful and accessible.</p>
              <div className="stats"><div><strong>8+</strong><span>Years experience*</span></div><div><strong>7</strong><span>Companies</span></div><div><strong>3</strong><span>Featured projects</span></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-kicker">02 / CAREER JOURNEY</div>
          <div className="section-heading"><h2>Experience that <span>adds up.</span></h2><p>My professional journey across development and design.</p></div>
          <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company}>
            <div className="timeline-marker">{job.current ? <span className="marker-current"></span> : <span>{String(i + 1).padStart(2, '0')}</span>}</div>
            <div className="job-main"><h3>{job.role}</h3><p>{job.company}</p><span className="job-place"><MapPin size={13} /> {job.place}</span></div>
            <div className="job-date">{job.date}{job.current && <span className="current-tag">CURRENT</span>}</div>
          </article>)}</div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading"><h2>Projects I've <span>worked on.</span></h2><p>Selected projects and technologies listed in my CV.</p></div>
          <div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.name}>
            <div className="project-top"><span className="project-number">0{i + 1}</span><span className="project-icon"><Code2 size={20} /></span></div>
            <h3>{project.name}</h3><p className="project-detail">{project.detail}</p>
            <div className="project-team">{project.team}</div>
            <div className="tag-list">{project.tech.split(', ').map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>)}</div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-kicker">04 / TOOLKIT</div>
          <div className="skills-layout"><div><h2>Tools I use to<br /><span>make things work.</span></h2><p className="muted">A mix of frontend, UI styling, and backend technologies drawn from my experience.</p></div>
            <div className="skills-panel"><div className="skills-label"><Code2 size={17} /> TECHNOLOGIES & SKILLS</div><div className="skills-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
          </div>
        </section>

        <section className="section-wrap section-block education-section">
          <div className="section-kicker">05 / EDUCATION</div>
          <div className="education-card"><div className="education-icon"><GraduationCap size={24} /></div><div><h3>B.Tech — Computer Science</h3><p>Dr. A.P.J. Abdul Kalam Technical University</p><span>2012 – 2016 · Ghaziabad, Uttar Pradesh</span></div><span className="education-badge">GRADUATED 2016</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid">
            <div className="contact-copy"><div className="section-kicker">06 / GET IN TOUCH</div><h2>Have a role or<br />project in <span>mind?</span></h2><p>I'm happy to discuss frontend opportunities, collaborations, or interesting projects. Send me a message and let's connect.</p>
              <div className="contact-links"><a href="mailto:frontenddevelopers1@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL ME</small>frontenddevelopers1@gmail.com</span><ExternalLink size={15} /></a><a href="tel:+918527365405"><span className="contact-icon"><Phone size={18} /></span><span><small>CALL ME</small>+91 85273 65405</span><ExternalLink size={15} /></a><div className="contact-location"><span className="contact-icon"><MapPin size={18} /></span><span><small>BASED IN</small>Noida, Uttar Pradesh, India</span></div></div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><h3>Send a message</h3><p>Fields marked * are required.</p></div>
              <div className="form-row"><label>Your name *<input name="from_name" value={form.from_name} onChange={update} placeholder="e.g. Rahul Sharma" required maxLength="100" /></label><label>Email address *<input type="email" name="from_email" value={form.from_email} onChange={update} placeholder="you@company.com" required maxLength="150" /></label></div>
              <label>Phone number <input name="phone" value={form.phone} onChange={update} placeholder="+91 ..." maxLength="30" /></label>
              <label>Subject *<input name="subject" value={form.subject} onChange={update} placeholder="Job opportunity / Collaboration" required maxLength="150" /></label>
              <label>Message *<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about what you have in mind..." required rows="5" maxLength="4000"></textarea></label>
              {status.text && <div className={`form-status ${status.type}`} role="status">{status.type === 'success' && <CheckCircle2 size={17} />}{status.text}</div>}
              <button className="btn btn-primary submit-btn" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'} <Send size={16} /></button>
              <p className="form-privacy">Your details are used only to respond to your message.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">N</span><span>Naveen<span className="brand-dot">.</span></span></a><p>Designed with care. Built with React.</p><a href={cvUrl} download="Naveen_Kumar_CV.pdf">Download CV <ArrowDownToLine size={14} /></a><span className="copyright">© {new Date().getFullYear()} Naveen Kumar</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
