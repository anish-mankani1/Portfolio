import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI Automation Agency Website",
    subtitle: "Jimmy Labs",
    role: "Full-Stack Web Developer",
    year: "2026",
    category: "Web Dev",
    emoji: "🌐",
    color: "#6c63ff",
    live: "https://jimmy-labs.vercel.app/",
    code: "https://github.com/anish-mankani1/Jimmy_labs",
    desc: "Designed and developed a responsive business website for an AI automation agency offering executive assistant and workflow automation solutions.",
    points: [
      "Built modular frontend components — service overview, automation workflow, client targeting, and contact booking form",
      "Implemented a lead-capture form for collecting client information and automation requirements",
      "Structured the site to clearly present AI email assistants, lead-flow automation, and workflow synchronization",
      "Deployed production build on Vercel with GitHub source control",
    ],
    tags: ["React", "Vercel", "GitHub", "Lead Capture", "Responsive","Supabase","Lindy AI","Spring Boot"],
  },
  {
    id: 2,
    title: "AI-Powered Accounting Ticket Automation",
    subtitle: "Automation Engineer",
    role: "Automation Engineer",
    year: "2026",
    category: "AI Automation",
    emoji: "🤖",
    color: "#3ecfcf",
    live: null,
    code: null,
    desc: "End-to-end AI automation workflow that processes accounting emails, creates structured tickets, and logs them with zero manual intervention.",
    points: [
      "Architected a multi-agent system — Intake Agent (email classification & ticket creation), Closure Agent (reply-based status updates), Reporting Agent (audit summaries)",
      "Built Excel → Power Automate → Microsoft Lists pipeline as an enterprise-grade buffer layer ensuring auditability",
      "Automated email classification across billing, tax, and reconciliation with auto-generated Ticket IDs (ACC-YYYYMMDD-HHMMSS)",
      "Intelligent tenant/property identification with zero manual intervention across the entire workflow",
    ],
    tags: ["Lindy AI", "Power Automate", "Microsoft Lists","Outlook", "Excel", "Outlook"],
  },
  {
    id: 3,
    title: "AI Inbound Call Automation System",
    subtitle: "Jimmy Labs",
    role: "AI Automation Engineer",
    year: "2025",
    category: "Voice AI",
    emoji: "📞",
    color: "#ff6c9d",
    live: null,
    code: null,
    desc: "Built a fully automated AI inbound call handling system using Retell AI and GoHighLevel — answering, qualifying, and routing leads without any human involvement.",
    points: [
      "Configured Retell AI voice agent with custom scripts for inbound call handling and lead qualification",
      "Integrated Retell AI with GoHighLevel (GHL) CRM for automatic contact creation and pipeline updates",
      "Set up call routing logic — warm transfer to human agent or automated SMS/email follow-up based on lead response",
      "Reduced cost-per-lead and response time by replacing manual call handling with always-on AI agent",
    ],
    tags: ["Retell AI", "GoHighLevel","Centerfy Ai", "CRM", "Voice AI", "Lead Automation"],
  },
];

export default function Project() {
  const [active, setActive] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .proj-root { font-family: 'DM Sans', sans-serif; background: #0f0f13; min-height: 100vh; padding: 80px 0; position: relative; overflow: hidden; }

        .bg-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .orb { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; opacity: 0.12; }
        .orb-1 { width: 350px; height: 350px; background: #6c63ff; top: 0; right: -80px; }
        .orb-2 { width: 280px; height: 280px; background: #3ecfcf; bottom: 0; left: -60px; }

        .section-eyebrow {
          font-size: 0.72rem; color: #6c63ff; text-transform: uppercase;
          letter-spacing: 3px; font-weight: 600; margin-bottom: 10px;
        }
        .section-title {
          font-family: 'Playfair Display', serif; font-weight: 900;
          font-size: clamp(2rem, 4vw, 2.8rem); color: #fff;
          letter-spacing: -1px; line-height: 1.1;
        }
        .section-title span {
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .section-sub { color: #666; font-size: 0.9rem; margin-top: 10px; max-width: 480px; }

        /* Project Card */
        .proj-card {
          background: #16161d;
          border: 1px solid #2a2a38;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
          cursor: pointer;
          height: 100%;
        }
        .proj-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }

        .proj-card-header {
          padding: 28px 28px 20px;
          position: relative;
        }
        .proj-icon-wrap {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem; margin-bottom: 16px;
          position: relative;
        }
        .proj-category {
          position: absolute; top: 28px; right: 28px;
          font-size: 0.68rem; color: #888; text-transform: uppercase;
          letter-spacing: 1.5px; font-weight: 600;
          background: #1e1e2d; border: 1px solid #2a2a38;
          padding: 4px 10px; border-radius: 20px;
        }
        .proj-title { font-size: 1.05rem; font-weight: 700; color: #fff; line-height: 1.3; margin-bottom: 4px; }
        .proj-subtitle { font-size: 0.78rem; color: #666; }

        .proj-divider { height: 1px; background: #2a2a38; margin: 0 28px; }

        .proj-body { padding: 20px 28px 24px; }
        .proj-desc { font-size: 0.83rem; color: #888; line-height: 1.7; margin-bottom: 16px; }

        .proj-point {
          font-size: 0.78rem; color: #888; line-height: 1.6;
          position: relative; padding-left: 14px; margin-bottom: 6px;
        }
        .proj-point::before {
          content: ''; position: absolute; left: 0; top: 7px;
          width: 5px; height: 5px; border-radius: 50%;
        }

        .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
        .proj-tag {
          background: #1e1e2d; border: 1px solid #2a2a38;
          color: #888; font-size: 0.68rem; padding: 3px 10px;
          border-radius: 20px; font-weight: 500;
        }

        .proj-footer {
          padding: 16px 28px 24px;
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .btn-live {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 20px;
          font-size: 0.78rem; font-weight: 600;
          color: #fff; text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          border: none; cursor: pointer;
        }
        .btn-live:hover { opacity: 0.85; transform: translateY(-1px); color: #fff; text-decoration: none; }
        .btn-code {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 20px;
          font-size: 0.78rem; font-weight: 500;
          color: #aaa; text-decoration: none;
          background: #1e1e2d; border: 1px solid #2a2a38;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-code:hover { border-color: #6c63ff; color: #fff; text-decoration: none; }

        .no-link-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 20px;
          font-size: 0.72rem; color: #555;
          background: #1a1a22; border: 1px solid #222230;
        }

        /* Number accent */
        .proj-number {
          font-family: 'Playfair Display', serif;
          font-size: 5rem; font-weight: 900;
          position: absolute; bottom: -10px; right: 20px;
          opacity: 0.04; color: #fff; line-height: 1;
          pointer-events: none; user-select: none;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
      `}</style>

      <div className="proj-root">
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="container px-4">

          {/* Header */}
          <div className="mb-5 fade-up">
            <div className="section-eyebrow">Portfolio</div>
            <div className="section-title">
              Featured <span>Projects</span>
            </div>
            <p className="section-sub">
              Real-world systems built with AI automation, data pipelines, and full-stack development.
            </p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {projects.map((p, i) => (
              <div className={`col-12 col-md-6 col-lg-4 fade-up delay-${i + 1}`} key={p.id}>
                <div
                  className="proj-card"
                  style={{ borderColor: active === p.id ? p.color + "55" : undefined }}
                  onMouseEnter={() => setActive(p.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="proj-card-header" style={{ background: `linear-gradient(135deg, ${p.color}0d, transparent)` }}>
                    <div className="proj-icon-wrap" style={{ background: p.color + "22" }}>
                      {p.emoji}
                    </div>
                    <span className="proj-category">{p.category}</span>
                    <div className="proj-title">{p.title}</div>
                    <div className="proj-subtitle">{p.subtitle} · {p.year}</div>
                    <div className="proj-number">{String(p.id).padStart(2, "0")}</div>
                  </div>

                  <div className="proj-divider" />

                  <div className="proj-body">
                    <p className="proj-desc">{p.desc}</p>
                    <ul className="list-unstyled m-0">
                      {p.points.map((pt, j) => (
                        <li className="proj-point" key={j} style={{ ['--dot-color']: p.color }}>
                          <style>{`.proj-point:nth-child(${j + 1})::before { background: ${p.color}; }`}</style>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="proj-tags">
                      {p.tags.map((t, j) => (
                        <span className="proj-tag" key={j} style={{ borderColor: p.color + "33", color: p.color + "cc" }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="proj-footer">
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn-live" style={{ background: `linear-gradient(90deg, ${p.color}, #3ecfcf)` }}>
                        ↗ Live Demo
                      </a>
                    ) : (
                      <span className="no-link-badge">🔒 Private Project</span>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="btn-code">
                        {"<>"} Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-5 pt-3 fade-up delay-3">
            <p style={{ color: '#555', fontSize: '0.85rem' }}>More projects on the way — currently building in public</p>
            <a href="https://github.com/anish-mankani1" target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#1e1e2d', border: '1px solid #2a2a38',
                color: '#aaa', padding: '10px 24px', borderRadius: 30,
                fontSize: '0.83rem', fontWeight: 500, textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#6c63ff'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a38'; e.currentTarget.style.color = '#aaa'; }}
            >
              View GitHub Profile ↗
            </a>
          </div>

        </div>
      </div>
    </>
  );
}