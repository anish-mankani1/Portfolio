import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    icon: "🤖",
    title: "AI Automation",
    tagline: "Eliminate manual work with intelligent workflows",
    accent: "#6c63ff",
    items: [
      "AI inbound & outbound call agents (Retell AI)",
      "Email automation & ticket creation pipelines",
      "Lead qualification & CRM auto-update (GoHighLevel)",
      "Multi-agent workflow architecture (Lindy, Make.com)",
      "AI executive assistant setup",
      "Workflow sync across business tools",
    ],
    tools: ["Retell AI", "GoHighLevel", "Make.com", "Lindy", "n8n", "Power Automate"],
  },
  {
    id: "02",
    icon: "📊",
    title: "Data Analysis & Science",
    tagline: "Turn raw data into decisions that drive growth",
    accent: "#3ecfcf",
    items: [
      "Exploratory data analysis (EDA) & reporting",
      "Python-based data pipelines (Pandas, NumPy)",
      "SQL database querying & optimization",
      "Power BI dashboard creation",
      "Campaign performance tracking & insights",
      "Niche-specific data collection & cleaning",
    ],
    tools: ["Python", "Pandas", "NumPy", "SQL", "MySQL", "Power BI", "Excel"],
  },
  {
    id: "03",
    icon: "🌐",
    title: "Software Development",
    tagline: "Build modern, scalable web applications",
    accent: "#ff6c9d",
    items: [
      "Responsive business websites (React)",
      "Landing pages with lead capture forms",
      "Frontend component architecture",
      "Vercel deployment & GitHub source control",
      "MERN stack full-stack apps (in progress)",
      "API integration & backend connectivity",
    ],
    tools: ["React", "JavaScript", "HTML/CSS", "Node.js", "MongoDB", "Vercel", "GitHub"],
  },
  {
    id: "04",
    icon: "⚙️",
    title: "AI Agent Development",
    tagline: "Custom AI agents built for your business logic",
    accent: "#f7c948",
    items: [
      "Voice AI agents for sales & support calls",
      "Chatbot & conversational AI setup",
      "Email classification & response agents",
      "Multi-step agentic workflows",
      "CRM-integrated intelligent assistants",
      "Reporting & audit agents",
    ],
    tools: ["Retell AI", "OpenAI API", "Lindy", "GoHighLevel", "Outlook", "Gmail"],
  },
  {
    id: "05",
    icon: "🗄️",
    title: "Database Management",
    tagline: "Organize, secure, and optimize your data assets",
    accent: "#3ecfcf",
    items: [
      "Database design & schema optimization",
      "Data integrity & security management",
      "Large dataset organization in Excel & SQL",
      "Microsoft Lists & SharePoint pipelines",
      "Database backup & recovery",
      "Digital campaign data management",
    ],
    tools: ["MySQL", "SQL", "Microsoft Lists", "Excel", "Power Automate", "SharePoint"],
  },
  {
    id: "06",
    icon: "📈",
    title: "Business & Marketing Analytics",
    tagline: "Data-driven insights to grow faster",
    accent: "#6c63ff",
    items: [
      "Website & user behaviour analysis",
      "Bulk email & WhatsApp campaign analytics",
      "Conversion funnel tracking & optimization",
      "KPI dashboards for executive reporting",
      "Lead flow & pipeline performance analysis",
      "Actionable insight reports for decision-making",
    ],
    tools: ["Power BI", "Excel", "Google Analytics", "Python", "SQL", "GoHighLevel"],
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function ServiceCard({ s, index }) {
  const [ref, visible] = useInView(0.08);
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className="col-12 col-md-6 col-xl-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.6s ${index * 0.08}s ease, transform 0.6s ${index * 0.08}s ease`,
      }}
    >
      <div
        className="svc-card"
        style={{
          borderColor: hovered ? s.accent + "66" : "#2a2a38",
          boxShadow: hovered ? `0 24px 60px ${s.accent}15` : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top accent bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, ${s.accent}, transparent)`,
          opacity: hovered ? 1 : 0, transition: "opacity 0.3s", borderRadius: "20px 20px 0 0",
        }} />

        {/* Header */}
        <div className="svc-header" style={{ background: `linear-gradient(135deg, ${s.accent}10, transparent)` }}>
          <div className="d-flex align-items-start justify-content-between">
            <div className="svc-icon-wrap" style={{ background: s.accent + "20", border: `1px solid ${s.accent}33` }}>
              <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
            </div>
            <span className="svc-id">{s.id}</span>
          </div>
          <div className="svc-title">{s.title}</div>
          <div className="svc-tagline">{s.tagline}</div>
        </div>

        <div className="svc-divider" />

        {/* Body */}
        <div className="svc-body">
          <ul className="list-unstyled m-0">
            {(expanded ? s.items : s.items.slice(0, 4)).map((item, j) => (
              <li key={j} className="svc-li">
                <span className="svc-bullet" style={{ background: s.accent }} />
                {item}
              </li>
            ))}
          </ul>

          {s.items.length > 4 && (
            <button
              className="svc-toggle"
              style={{ color: s.accent }}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "▲ Show less" : `▼ +${s.items.length - 4} more`}
            </button>
          )}
        </div>

        {/* Tools */}
        <div className="svc-footer">
          <div className="svc-tools-label">Tools & Stack</div>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {s.tools.map((t, j) => (
              <span
                key={j}
                className="svc-tool"
                style={{ borderColor: s.accent + "33", color: s.accent + "cc" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Ghost number */}
        <div className="svc-ghost">{s.id}</div>
      </div>
    </div>
  );
}

export default function Services() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [ctaRef, ctaVisible] = useInView(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .svc-root {
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
        .orb { position: absolute; border-radius: 50%; filter: blur(110px); pointer-events: none; opacity: 0.11; }
        .orb-1 { width: 380px; height: 380px; background: #6c63ff; top: -60px; right: -80px; }
        .orb-2 { width: 300px; height: 300px; background: #3ecfcf; bottom: 0; left: -60px; }
        .orb-3 { width: 200px; height: 200px; background: #ff6c9d; top: 50%; left: 40%; }

        .section-eyebrow { font-size: 0.72rem; color: #6c63ff; text-transform: uppercase; letter-spacing: 3px; font-weight: 600; margin-bottom: 10px; }
        .section-title { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(2rem, 4vw, 2.8rem); color: #fff; letter-spacing: -1px; line-height: 1.1; }
        .section-title span { background: linear-gradient(90deg, #6c63ff, #3ecfcf); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-sub { color: #666; font-size: 0.88rem; line-height: 1.7; margin-top: 10px; max-width: 520px; }

        /* Card */
        .svc-card {
          background: #16161d;
          border: 1px solid #2a2a38;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .svc-card:hover { transform: translateY(-6px); }

        .svc-header { padding: 24px 24px 20px; }
        .svc-icon-wrap {
          width: 48px; height: 48px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .svc-id {
          font-family: 'Playfair Display', serif;
          font-size: 0.75rem; color: #333; font-weight: 700;
          letter-spacing: 1px;
        }
        .svc-title { font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .svc-tagline { font-size: 0.78rem; color: #666; line-height: 1.5; }

        .svc-divider { height: 1px; background: #1e1e2d; margin: 0 24px; }

        .svc-body { padding: 18px 24px; flex: 1; }
        .svc-li {
          font-size: 0.78rem; color: #888; line-height: 1.65;
          padding-left: 14px; position: relative; margin-bottom: 7px;
        }
        .svc-bullet {
          position: absolute; left: 0; top: 7px;
          width: 5px; height: 5px; border-radius: 50%;
          display: block;
        }

        .svc-toggle {
          background: none; border: none; padding: 6px 0 0;
          font-size: 0.72rem; font-weight: 600;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.5px;
        }

        .svc-footer {
          padding: 16px 24px 22px;
          border-top: 1px solid #1e1e2d;
          margin-top: auto;
        }
        .svc-tools-label { font-size: 0.65rem; color: #444; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; }
        .svc-tool {
          background: #1a1a24; border: 1px solid #2a2a38;
          font-size: 0.65rem; padding: 3px 9px;
          border-radius: 20px; font-weight: 500;
        }

        .svc-ghost {
          position: absolute; bottom: -18px; right: 14px;
          font-family: 'Playfair Display', serif;
          font-size: 6rem; font-weight: 900;
          color: #fff; opacity: 0.022;
          pointer-events: none; user-select: none; line-height: 1;
        }

        /* CTA strip */
        .cta-strip {
          background: linear-gradient(135deg, #16161d, #1a1a2e);
          border: 1px solid #2a2a38;
          border-radius: 20px;
          padding: 44px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          margin-top: 60px;
        }
        .cta-strip::before {
          content: '';
          position: absolute; inset: -1px;
          border-radius: 20px;
          background: linear-gradient(135deg, #6c63ff22, transparent 50%, #3ecfcf22);
          z-index: 0;
        }
        .cta-strip > * { position: relative; z-index: 1; }
        .cta-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 900; color: #fff; margin-bottom: 8px; }
        .cta-title span { background: linear-gradient(90deg, #6c63ff, #3ecfcf); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .cta-sub { color: #666; font-size: 0.88rem; margin-bottom: 28px; }

        .btn-grad {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          color: #fff; border: none;
          padding: 13px 32px; border-radius: 30px;
          font-size: 0.9rem; font-weight: 700;
          cursor: pointer; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-grad:hover { transform: translateY(-2px); box-shadow: 0 12px 35px rgba(108,99,255,0.38); color: #fff; text-decoration: none; }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; border: 1px solid #2a2a38;
          color: #aaa; padding: 13px 32px; border-radius: 30px;
          font-size: 0.9rem; font-weight: 500;
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-ghost:hover { border-color: #6c63ff; color: #fff; text-decoration: none; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="svc-root">
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="container px-4">

          {/* Header */}
          <div
            ref={headerRef}
            className="mb-5"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="section-eyebrow">What I Offer</div>
            <div className="section-title">Services & <span>Expertise</span></div>
            <p className="section-sub">
              From AI agent development to data analysis and full-stack web development — here's exactly how I can help your business grow.
            </p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {services.map((s, i) => (
              <ServiceCard key={s.id} s={s} index={i} />
            ))}
          </div>

          {/* CTA Strip */}
          <div
            ref={ctaRef}
            className="cta-strip"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s 0.1s ease, transform 0.6s 0.1s ease",
            }}
          >
            <div className="cta-title">Got a Project in <span>Mind?</span></div>
            <p className="cta-sub">Let's discuss how I can help automate, analyse, or build exactly what you need.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="/contact" className="btn-grad">Let's Talk ↗</a>
              <a href="https://jimmy-labs.vercel.app/" target="_blank" rel="noreferrer" className="btn-ghost">View My Work</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}