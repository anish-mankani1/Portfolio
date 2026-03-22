import React, { useEffect, useState } from "react"; 
import Feature from "../HOMES/Feature"; 
import {Link} from "react-router-dom";

const ROLES = [
  "Data Scientist & Analyst",
  "AI Agent Developer",
  "Software Developer",
  "Automation Engineer",
];

export default function Home() {
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((r) => (r + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "4", label: "Internships" },
    { value: "4", label: "Live Projects" },
    { value: "5+", label: "Tech Stack" },
  ];

  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗄️" },
    { name: "Power BI", icon: "📊" },
    { name: "Pandas", icon: "🐼" },
    { name: "Make.com", icon: "⚙️" },
    { name: "Retell AI", icon: "🤖" },
    { name: "MERN", icon: "🌐" },
    { name: "Excel", icon: "📋" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .home-root {
          font-family: 'DM Sans', sans-serif;
          background: #0f0f13;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* ── Background Grid ── */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── Glowing orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.18;
        }
        .orb-1 { width: 420px; height: 420px; background: #6c63ff; top: -100px; left: -100px; }
        .orb-2 { width: 320px; height: 320px; background: #3ecfcf; bottom: -60px; right: -60px; }
        .orb-3 { width: 200px; height: 200px; background: #6c63ff; top: 40%; right: 10%; }

        /* ── Nav ── */
        .home-nav {
          position: relative;
          z-index: 10;
          padding: 24px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #2a2a38;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 1.3rem;
          color: #fff;
          letter-spacing: -0.5px;
        }
        .nav-logo span {
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-links { display: flex; gap: 32px; list-style: none; margin: 0; padding: 0; }
        .nav-links a {
          color: #888;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #fff; }
        .nav-cta {
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          color: #fff !important;
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: 500 !important;
          font-size: 0.82rem !important;
          transition: opacity 0.2s !important;
        }
        .nav-cta:hover { opacity: 0.85; color: #fff !important; }

        /* ── Hero ── */
        .hero-wrap {
          position: relative;
          z-index: 5;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1e1e2d;
          border: 1px solid #3a3a55;
          border-radius: 30px;
          padding: 6px 16px;
          font-size: 0.75rem;
          color: #a89fff;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
          animation: fadeUp 0.6s ease both;
        }
        .badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3ecfcf;
          animation: pulse 2s infinite;
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(2.8rem, 6vw, 5rem);
          color: #fff;
          line-height: 1.05;
          letter-spacing: -1.5px;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .hero-name .grad {
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .typewriter-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 16px 0 24px;
          animation: fadeUp 0.6s 0.2s ease both;
        }
        .typewriter-label {
          color: #555;
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .typewriter-text {
          font-size: 1.05rem;
          font-weight: 500;
          color: #3ecfcf;
          min-width: 260px;
        }
        .cursor {
          display: inline-block;
          width: 2px; height: 1.1em;
          background: #3ecfcf;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 0.9s infinite;
        }

        .hero-desc {
          color: #888;
          font-size: 0.95rem;
          line-height: 1.8;
          max-width: 480px;
          margin-bottom: 36px;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .hero-desc strong { color: #ccc; font-weight: 500; }

        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          animation: fadeUp 0.6s 0.4s ease both;
        }
        .btn-primary-custom {
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          color: #fff;
          border: none;
          padding: 12px 28px;
          border-radius: 30px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.3px;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(108,99,255,0.35);
          color: #fff;
          text-decoration: none;
        }
        .btn-outline-custom {
          background: transparent;
          color: #ccc;
          border: 1px solid #3a3a55;
          padding: 12px 28px;
          border-radius: 30px;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-outline-custom:hover { border-color: #6c63ff; color: #fff; text-decoration: none; }

        /* ── Stats ── */
        .stats-row {
          animation: fadeUp 0.6s 0.5s ease both;
          margin-top: 48px;
          padding-top: 36px;
          border-top: 1px solid #2a2a38;
        }
        .stat-item { text-align: center; padding: 0 16px; }
        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .stat-label { font-size: 0.72rem; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
        .stat-divider { width: 1px; background: #2a2a38; align-self: stretch; }

        /* ── Right Card ── */
        .hero-card {
          background: #16161d;
          border: 1px solid #2a2a38;
          border-radius: 24px;
          padding: 32px;
          animation: fadeUp 0.7s 0.3s ease both;
          position: relative;
        }
        .hero-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 24px;
          background: linear-gradient(135deg, #6c63ff33, transparent 60%, #3ecfcf33);
          z-index: -1;
        }

        .card-avatar-ring {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, #6c63ff, #3ecfcf);
          padding: 3px;
          margin-bottom: 16px;
        }
        .card-avatar-inner {
          width: 100%; height: 100%; border-radius: 50%;
          background: #1a1a2e;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem; color: #fff; font-weight: 700;
        }
        .card-name { font-weight: 700; font-size: 1.1rem; color: #fff; }
        .card-role { font-size: 0.78rem; color: #888; margin-top: 2px; }

        .card-divider { height: 1px; background: #2a2a38; margin: 20px 0; }

        .info-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .info-icon { font-size: 0.85rem; width: 28px; text-align: center; }
        .info-text { font-size: 0.8rem; color: #aaa; }
        .info-text a { color: #a89fff; text-decoration: none; }
        .info-text a:hover { color: #fff; }

        .status-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: #1a2e1a; border: 1px solid #2a5a2a;
          border-radius: 20px; padding: 5px 12px;
          font-size: 0.72rem; color: #5adf5a;
          margin-top: 16px;
        }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #5adf5a; animation: pulse 2s infinite; }

        /* ── Tech Stack ── */
        .tech-section {
          position: relative;
          z-index: 5;
          padding: 60px 40px;
          border-top: 1px solid #2a2a38;
        }
        .tech-title {
          font-size: 0.72rem;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 28px;
        }
        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1e1e2d;
          border: 1px solid #2a2a38;
          border-radius: 30px;
          padding: 8px 18px;
          font-size: 0.82rem;
          color: #ccc;
          font-weight: 500;
          transition: border-color 0.2s, color 0.2s;
        }
        .tech-pill:hover { border-color: #6c63ff55; color: #fff; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>

      <div className="home-root">
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* ── NAV ── */}
        <nav className="home-nav">
          <div className="nav-logo">Anish Mankani<span>.</span></div>
          <ul className="nav-links d-none d-md-flex">
          </ul>
        </nav>

        {/* ── HERO ── */}
        <div className="hero-wrap px-3 px-md-5">
          <div className="container-fluid">
            <div className="row align-items-center g-5">

              {/* Left */}
              <div className="col-12 col-lg-7">
                <div className="hero-badge">
                  <span className="badge-dot" />
                  Available for Freelance & Full-time
                </div>

                <div className="hero-name">
                  Hi, I'm<br />
                  <span className="grad">Anish Mankani</span>
                </div>

                <div className="typewriter-wrap">
                  <span className="typewriter-label">I am a</span>
                  <span className="typewriter-text">
                    {displayed}<span className="cursor" />
                  </span>
                </div>

                <p className="hero-desc">
                  Building <strong>AI-powered automation systems</strong> and <strong>data-driven applications</strong> with 2+ years of hands-on experience. Specialized in designing end-to-end workflows that eliminate manual work and scale businesses. Currently pursuing <strong>B-Tech CS @ RTMNU (2026)</strong>.
                </p>

                <div className="hero-btns">
                  <a href="https://jimmy-labs.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary-custom">
                    View Live Project ↗
                  </a>
                  <Link to="/contact" className="btn-outline-custom">
                    Contact Me
                  </Link>
                </div>

                {/* Stats */}
                <div className="stats-row">
                  <div className="d-flex align-items-center">
                    {stats.map((s, i) => (
                      <React.Fragment key={i}>
                        <div className="stat-item">
                          <div className="stat-value">{s.value}</div>
                          <div className="stat-label">{s.label}</div>
                        </div>
                        {i < stats.length - 1 && <div className="stat-divider mx-2" style={{ height: 40 }} />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="col-12 col-lg-5">
                <div className="hero-card">
                  <div className="card-avatar-ring">
                    <div className="card-avatar-inner">AM</div>
                  </div>
                  <div className="card-name">Anish Mankani</div>
                  <div className="card-role">Data Scientist · AI Developer · Software Dev</div>

                  <div className="card-divider" />

                  <div className="info-row">
                    <span className="info-icon">📍</span>
                    <span className="info-text">India · Remote Friendly</span>
                  </div>
                  <div className="info-row">
                    <span className="info-icon">🎓</span>
                    <span className="info-text">B-Tech CS, RTMNU University (2026)</span>
                  </div>
                  <div className="info-row">
                    <span className="info-icon">📞</span>
                    <span className="info-text">+91 8378853372</span>
                  </div>
                  <div className="info-row">
                    <span className="info-icon">✉</span>
                    <span className="info-text">
                      <a href="mailto:mankanianeesh@gmail.com">mankanianeesh@gmail.com</a>
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="info-icon">in</span>
                    <span className="info-text">
                      <a href="https://www.linkedin.com/in/contactanishmankani" target="_blank" rel="noreferrer">
                        linkedin.com/in/contactanishmankani
                      </a>
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="info-icon">gh</span>
                    <span className="info-text">
                      <a href="https://github.com/anish-mankani1" target="_blank" rel="noreferrer">
                        github.com/anish-mankani1
                      </a>
                    </span>
                  </div>

                  <div className="status-chip">
                    <span className="status-dot" />
                    Open to opportunities
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── TECH STACK STRIP ── */}
        <div className="tech-section">
          <div className="tech-title">Tech Stack & Tools</div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {techStack.map((t, i) => (
              <span className="tech-pill" key={i}>
                <span>{t.icon}</span> {t.name}
              </span>
            ))}
          </div>
        </div>

      </div>
      <Feature/>
    </>
  );
}
    
 