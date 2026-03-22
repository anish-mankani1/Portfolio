
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: "🤖",
    title: "Real-World AI Experience",
    desc: "Not just theory — I've built and deployed live AI automation systems used by real clients. From voice agents to ticket workflows, my work solves actual business problems.",
    accent: "#6c63ff",
    stat: "2+",
    statLabel: "Years building AI systems",
  },
  {
    icon: "💼",
    title: "3 Paid Internships",
    desc: "Companies paid me to solve real problems - AI automation at Jimmy Labs, database management at HOTC LLP, and data analytics at Scout-Ripper. Proven, not just claimed.",
    accent: "#3ecfcf",
    stat: "3",
    statLabel: "Paid roles completed",
  },
  {
    icon: "🚀",
    title: "Live Deployed Projects",
    desc: "My projects are live on the internet - not just GitHub repos. The Jimmy Labs website is production-deployed on Vercel and actively used as a business frontend.",
    accent: "#ff6c9d",
    stat: "2+",
    statLabel: "Projects in production",
  },
  {
    icon: "⚙️",
    title: "End-to-End Automation",
    desc: "I don't just write scripts — I architect complete automation pipelines. From email intake to CRM updates to reporting, I build systems that run without human touch.",
    accent: "#f7c948",
    stat: "0",
    statLabel: "Manual steps left behind",
  },
  {
    icon: "📊",
    title: "Data + AI Combined",
    desc: "Rare combo of data analysis (Python, SQL, Power BI) and AI automation skills. I can collect data, analyse it, and automate decisions — all in one workflow.",
    accent: "#3ecfcf",
    stat: "5+",
    statLabel: "Tools mastered",
  },
  {
    icon: "🎓",
    title: "Fresh Talent, Modern Stack",
    desc: "Final-year B-Tech CS student hungry to prove myself. I stay current with the latest AI tools, automation platforms, and MERN stack — no legacy thinking.",
    accent: "#6c63ff",
    stat: "2026",
    statLabel: "Graduating with full drive",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function ReasonCard({ r, index }) {
  const [ref, visible] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="col-12 col-md-6 col-lg-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ${index * 0.1}s ease, transform 0.55s ${index * 0.1}s ease`,
      }}
    >
      <div
        className="why-card"
        style={{ borderColor: hovered ? r.accent + "55" : "#2a2a38", boxShadow: hovered ? `0 20px 50px ${r.accent}18` : "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top accent bar */}
        <div className="card-top-bar" style={{ background: `linear-gradient(90deg, ${r.accent}, transparent)`, opacity: hovered ? 1 : 0 }} />

        {/* Icon */}
        <div className="why-icon-wrap" style={{ background: r.accent + "18", border: `1px solid ${r.accent}33` }}>
          <span style={{ fontSize: "1.5rem" }}>{r.icon}</span>
        </div>

        {/* Stat */}
        <div className="why-stat" style={{ color: r.accent }}>{r.stat}</div>
        <div className="why-stat-label">{r.statLabel}</div>

        <div className="why-divider" />

        {/* Text */}
        <div className="why-title">{r.title}</div>
        <p className="why-desc">{r.desc}</p>

        {/* Ghost number */}
        <div className="why-ghost">{String(index + 1).padStart(2, "0")}</div>
      </div>
    </div>
  );
}

function CountUp({ target, suffix = "", visible }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const num = parseFloat(target);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const step = num / 40;
    const t = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(t); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(t);
  }, [visible, target]);
  return <>{isNaN(parseFloat(target)) ? target : count}{suffix}</>;
}

export default function Feature() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [statsRef, statsVisible] = useInView(0.3);

  const bigStats = [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 3, suffix: "", label: "Paid Internships" },
    { value: 4, suffix: "+", label: "Live Projects" },
    { value: 100, suffix: "%", label: "Remote Ready" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .why-root {
          font-family: 'DM Sans', sans-serif;
          background: #0f0f13;
          min-height: 100vh;
          padding: 90px 0;
          position: relative;
          overflow: hidden;
        }
        .bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .orb { position: absolute; border-radius: 50%; filter: blur(110px); pointer-events: none; opacity: 0.1; }
        .orb-1 { width: 400px; height: 400px; background: #6c63ff; top: 10%; right: -100px; }
        .orb-2 { width: 300px; height: 300px; background: #3ecfcf; bottom: 10%; left: -80px; }

        /* Header */
        .section-eyebrow { font-size: 0.72rem; color: #6c63ff; text-transform: uppercase; letter-spacing: 3px; font-weight: 600; margin-bottom: 10px; }
        .section-title { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(2rem, 4vw, 2.8rem); color: #fff; letter-spacing: -1px; line-height: 1.1; }
        .section-title span { background: linear-gradient(90deg, #6c63ff, #3ecfcf); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-sub { color: #666; font-size: 0.9rem; line-height: 1.7; margin-top: 10px; max-width: 520px; }

        /* Card */
        .why-card {
          background: #16161d;
          border: 1px solid #2a2a38;
          border-radius: 20px;
          padding: 28px;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .why-card:hover { transform: translateY(-5px); }

        .card-top-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          transition: opacity 0.3s;
        }

        .why-icon-wrap {
          width: 50px; height: 50px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }

        .why-stat {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem; font-weight: 900; line-height: 1;
        }
        .why-stat-label { font-size: 0.68rem; color: #555; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; margin-bottom: 14px; }
        .why-divider { height: 1px; background: #2a2a38; margin-bottom: 14px; }
        .why-title { font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .why-desc { font-size: 0.8rem; color: #777; line-height: 1.7; margin: 0; }

        .why-ghost {
          position: absolute; bottom: -12px; right: 16px;
          font-family: 'Playfair Display', serif;
          font-size: 5rem; font-weight: 900;
          color: #fff; opacity: 0.025;
          pointer-events: none; user-select: none; line-height: 1;
        }

        /* Big stats strip */
        .stats-strip {
          background: #16161d;
          border: 1px solid #2a2a38;
          border-radius: 20px;
          padding: 36px 40px;
          margin-top: 60px;
        }
        .big-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 2.6rem; font-weight: 900;
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1;
        }
        .big-stat-label { font-size: 0.72rem; color: #555; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 6px; }
        .stat-vdivider { width: 1px; background: #2a2a38; align-self: stretch; }

        /* CTA */
        .why-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          color: #fff; border: none;
          padding: 12px 28px; border-radius: 30px;
          font-size: 0.88rem; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .why-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(108,99,255,0.35); color: #fff; text-decoration: none; }

        .why-cta-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          color: #aaa; border: 1px solid #2a2a38;
          padding: 12px 28px; border-radius: 30px;
          font-size: 0.88rem; font-weight: 500;
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .why-cta-outline:hover { border-color: #6c63ff; color: #fff; text-decoration: none; }
      `}</style>

      <div className="why-root">
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="container px-4">

          {/* Header */}
          <div
            ref={headerRef}
            className="mb-5 d-flex flex-column flex-md-row justify-content-between align-items-start gap-4"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
          >
            <div>
              <div className="section-eyebrow">Why Hire Me</div>
              <div className="section-title">What Makes Me <span>Stand Out</span></div>
              <p className="section-sub">
                I bring a rare mix of AI automation, data skills, and real deployment experience- not just certificates, but actual shipped work.
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap align-items-center" style={{ flexShrink: 0, paddingTop: 8 }}>
              <Link to="/contact" className="why-cta">Hire Me ↗</Link>
              <a href="https://jimmy-labs.vercel.app/" target="_blank" rel="noreferrer" className="why-cta-outline">View Work</a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row g-4">
            {reasons.map((r, i) => (
              <ReasonCard key={i} r={r} index={i} />
            ))}
          </div>

          {/* Big Stats Strip */}
          <div
            ref={statsRef}
            className="stats-strip"
            style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s 0.2s ease, transform 0.6s 0.2s ease" }}
          >
            <div className="d-flex align-items-center justify-content-around flex-wrap gap-4">
              {bigStats.map((s, i) => (
                <React.Fragment key={i}>
                  <div className="text-center">
                    <div className="big-stat-val">
                      <CountUp target={s.value} suffix={s.suffix} visible={statsVisible} />
                    </div>
                    <div className="big-stat-label">{s.label}</div>
                  </div>
                  {i < bigStats.length - 1 && (
                    <div className="stat-vdivider d-none d-md-block" style={{ height: 48 }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}