import { ArrowUpRight, Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Flood Digital Twin",
    tag: "Disaster Resilience",
    text: "A real-time flood simulation combining rainfall datasets, water-level progression, AI-assisted evacuation behavior, and an interactive Unreal Engine environment.",
    href: "#",
  },
  {
    title: "Decivio",
    tag: "AI Decision Simulation",
    text: "A career and education decision simulator designed around probabilistic scenarios, personalized guidance, and explainable outcomes.",
    href: "#",
  },
  {
    title: "Physics-Informed Earthquake Forecasting",
    tag: "Research",
    text: "A physics-informed framework that connects prediction, hazard visualization, and digital-twin workflows for near real-time emergency planning.",
    href: "#",
  },
];

const research = [
  "Machine Learning in Disaster Management: A Comprehensive Review — IIT Indore, IYGEC 2025",
  "Enhancing Flood Prediction in Kerala with Digital Twin Technology and Real-Time Simulation — IISc Bengaluru, GLS 2025",
  "Physics-Informed Earthquake Early Impact Forecasting Using Digital Twin and Unreal Engine — IISc Bengaluru",
  "Physics-Informed Neural Network Framework for Early Detection and Localization of Toxic Seepage in Tailings Dams — IISc Bengaluru",
  "AI-Based Digital Twin Framework for Bridge Health Monitoring — accepted for presentation at IIT Roorkee",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav wrap">
          <a className="brand" href="#top">DM</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#research">Research</a>
            <a href="#about">About</a>
            <a className="nav-cta" href="#contact">Contact <ArrowUpRight size={15} /></a>
          </div>
        </nav>

        <div className="wrap hero-grid" id="top">
          <div>
            <p className="eyebrow">AI/ML • Digital Twins • Disaster Resilience</p>
            <h1>Engineering technology for a more resilient world.</h1>
            <p className="hero-copy">
              I&apos;m Debjit Mandal, a B.Tech CSE (AI/ML) student and research-focused builder exploring
              intelligent infrastructure, flood simulation, physics-informed machine learning, and
              immersive digital twins.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <ArrowUpRight size={16} /></a>
              <a className="button ghost" href="mailto:debit.mandal@example.com">Get in touch <Mail size={16} /></a>
            </div>
            <div className="meta-row">
              <span><MapPin size={15} /> Chennai, India</span>
              <span>Open to research &amp; collaboration</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>Current focus</span>
              <span className="status-dot">●</span>
            </div>
            <div className="focus-lines">
              <div><b>01</b><span>Flood prediction &amp; simulation</span></div>
              <div><b>02</b><span>Physics-informed AI</span></div>
              <div><b>03</b><span>Digital twins for resilience</span></div>
            </div>
            <div className="hero-card-footer">Build → simulate → learn → improve</div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="work">
        <div className="section-head">
          <div><p className="eyebrow">Selected work</p><h2>Projects that turn ideas into interactive systems.</h2></div>
          <span className="section-index">01 / 04</span>
        </div>
        <div className="project-grid">
          {projects.map((project, i) => (
            <article className={i === 0 ? "project featured" : "project"} key={project.title}>
              <div className="project-number">0{i + 1}</div>
              <p className="tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <a href={project.href}>View project <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark" id="research">
        <div className="wrap">
          <div className="section-head">
            <div><p className="eyebrow">Research</p><h2>From hazard intelligence to engineering systems.</h2></div>
            <span className="section-index">02 / 04</span>
          </div>
          <div className="research-list">
            {research.map((item, i) => (
              <div className="research-item" key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p><ExternalLink size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" id="about">
        <div className="about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2>Curious about systems that matter beyond the screen.</h2>
          </div>
          <div>
            <p className="large-copy">
              My work sits at the intersection of software, simulation, and disaster resilience. I enjoy
              building systems that make complex physical processes easier to see, test, and reason about.
            </p>
            <div className="skill-cloud">
              {["Python", "C/C++", "React", "Node.js", "Unreal Engine 5", "AI/ML", "Digital Twins", "IoT", "Supabase", "Research"].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap cta-inner">
          <div><p className="eyebrow">Let&apos;s build something meaningful.</p><h2>Have a research idea, prototype, or problem worth simulating?</h2></div>
          <div className="contact-links">
            <a href="mailto:debit.mandal@example.com"><Mail size={18}/> Email</a>
            <a href="https://github.com/Debjit678" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} Debjit Mandal</span>
        <span>Designed for research, resilience &amp; real-world impact.</span>
      </footer>
    </main>
  );
}