import React from "react";

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .resume-root { font-family: 'DM Sans', sans-serif; background: #0f0f13; min-height: 100vh; }
        .resume-card { background: #16161d; border: 1px solid #2a2a38; border-radius: 20px; overflow: hidden; }
        .sidebar { background: linear-gradient(170deg, #1a1a2e 0%, #0d0d1a 100%); border-right: 1px solid #2a2a38; }
        .name-heading { font-family: 'Playfair Display', serif; font-weight: 900; font-size: 2.4rem; line-height: 1.1; color: #fff; letter-spacing: -0.5px; }
        .role-tag { background: linear-gradient(90deg, #6c63ff, #3ecfcf); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 500; font-size: 0.9rem; letter-spacing: 2px; text-transform: uppercase; }
        .section-label { font-family: 'Playfair Display', serif; font-size: 1.15rem; color: #fff; font-weight: 700; letter-spacing: 0.5px; }
        .accent-line { width: 36px; height: 3px; background: linear-gradient(90deg, #6c63ff, #3ecfcf); border-radius: 2px; }
        .contact-item { color: #aaa; font-size: 0.82rem; display: flex; align-items: center; gap: 8px; padding: 6px 0; border-bottom: 1px solid #2a2a38; transition: color 0.2s; }
        .contact-item:last-child { border-bottom: none; }
        .contact-item:hover { color: #e0e0e0; }
        .contact-icon { width: 28px; height: 28px; border-radius: 8px; background: #23233a; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #6c63ff; flex-shrink: 0; }
        .skill-bar-track { height: 4px; background: #23233a; border-radius: 4px; overflow: hidden; }
        .skill-bar-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, #6c63ff, #3ecfcf); }
        .skill-name { font-size: 0.8rem; color: #ccc; }
        .exp-card { background: #1e1e2d; border: 1px solid #2a2a38; border-radius: 14px; padding: 18px 20px; transition: border-color 0.2s; }
        .exp-card:hover { border-color: #6c63ff55; }
        .exp-dot { width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(135deg, #6c63ff, #3ecfcf); flex-shrink: 0; margin-top: 6px; }
        .exp-title { font-size: 1rem; font-weight: 600; color: #fff; }
        .exp-li { color: #999; font-size: 0.82rem; line-height: 1.6; position: relative; padding-left: 14px; }
        .exp-li::before { content: ''; position: absolute; left: 0; top: 8px; width: 5px; height: 5px; border-radius: 50%; background: #6c63ff; }
        .badge-tech { background: #23233a; border: 1px solid #3a3a55; color: #a89fff; font-size: 0.72rem; padding: 4px 10px; border-radius: 20px; font-weight: 500; }
        .edu-card { background: linear-gradient(135deg, #1e1e2d, #23233a); border: 1px solid #2a2a38; border-radius: 14px; padding: 18px 20px; }
        .summary-text { color: #aaa; font-size: 0.87rem; line-height: 1.8; }
        .avatar-ring { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #6c63ff, #3ecfcf); padding: 3px; margin: 0 auto 16px; }
        .avatar-inner { width: 100%; height: 100%; border-radius: 50%; background: #1a1a2e; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #fff; font-weight: 700; }
      `}</style>

      <div className="resume-root py-5 px-3">
        <div className="resume-card mx-auto" style={{ maxWidth: 960 }}>
          <div className="row g-0">

            {/* SIDEBAR */}
            <div className="col-12 col-md-4 sidebar p-4">

              {/* Avatar */}
              <div className="text-center mb-4">
                <div className="avatar-ring">
                  <div className="avatar-inner">AM</div>
                </div>
                <div className="name-heading mb-1">Anish<br />Mankani</div>
                <div className="role-tag">AI · Data · MERN</div>
              </div>

              <hr style={{ borderColor: '#2a2a38' }} />

              {/* Contact */}
              <div className="mb-4">
                <div className="section-label mb-3">Contact</div>
                {[
                  { icon: '✉', text: 'mankanianeesh@email.com' },
                  { icon: '📞', text: '+91 8378853372' },
                  { icon: 'in', text: 'linkedin.com/in/contactanishmankani' },
                  { icon: 'gh', text: 'github.com/anish-mankani1' },
                ].map((c, i) => (
                  <div className="contact-item" key={i}>
                    <span className="contact-icon">{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>

              <hr style={{ borderColor: '#2a2a38' }} />

              {/* Skills */}
              <div className="mb-4">
                <div className="section-label mb-3">Skills</div>
                {[
                  { name: 'AI Automation', pct: 90 },
                  { name: 'Data Analysis', pct: 85 },
                  { name: 'Python', pct: 82 },
                  { name: 'SQL', pct: 78 },
                  { name: 'Excel / BI', pct: 80 },
                  { name: 'MERN Stack', pct: 45 },
                ].map((s, i) => (
                  <div className="mb-3" key={i}>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-name" style={{ color: '#6c63ff' }}>{s.pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <hr style={{ borderColor: '#2a2a38' }} />

              {/* Tools */}
              <div>
                <div className="section-label mb-3">Tools</div>
                <div className="d-flex flex-wrap gap-2">
                  {['Retell AI', 'GoHighLevel', 'Make.com', 'n8n', 'Pandas', 'Power BI', 'Git'].map((t, i) => (
                    <span className="badge-tech" key={i}>{t}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="col-12 col-md-8 p-4 p-md-5">

              {/* Summary */}
              <div className="mb-5">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="accent-line" />
                  <span className="section-label">Summary</span>
                </div>
                <p className="summary-text">
                  Results-driven AI Automation and Data Analysis enthusiast with 2+ years of hands-on experience building real-world systems that streamline business operations. Experienced in designing end-to-end AI workflows for inbound call handling and email automation. Currently expanding skills in MERN stack to build full-stack intelligent applications.
                </p>
              </div>

              {/* Experience */}
              <div className="mb-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="accent-line" />
                  <span className="section-label">Experience</span>
                </div>
                <div className="d-flex flex-column gap-3">

                  {/* Exp 1 */}
                  <div className="exp-card">
                    <div className="d-flex gap-3">
                      <div className="exp-dot mt-1" />
                      <div className="w-100">
                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-1 mb-2">
                          <span className="exp-title">AI Automation Intern</span>
                          <span className="badge-tech">Jan 2025 – Mar 2025</span>
                        </div>
                        <ul className="list-unstyled m-0 d-flex flex-column gap-1">
                          <li className="exp-li">Paid internship (₹10,000/month) focused on AI automation and workflow development</li>
                          <li className="exp-li">Developed AI-driven automation workflows for business processes</li>
                          <li className="exp-li">Built inbound call automation systems using AI voice platforms</li>
                          <li className="exp-li">Worked with Retell AI and GoHighLevel integrations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Exp 2 */}
                  <div className="exp-card">
                    <div className="d-flex gap-3">
                      <div className="exp-dot mt-1" />
                      <div className="w-100">
                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-1 mb-2">
                          <span className="exp-title">Data Analyst</span>
                          <span className="badge-tech">Mar 2025 – Jun 2025</span>
                        </div>
                        <ul className="list-unstyled m-0 d-flex flex-column gap-1">
                          <li className="exp-li">Paid internship (₹5,000/month) in database management and data analysis</li>
                          <li className="exp-li">Analyzed datasets to extract actionable business insights</li>
                          <li className="exp-li">Used Python, SQL, and Excel for data processing pipelines</li>
                          <li className="exp-li">Created dashboards and reports for executive decision-making</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Exp 3 */}
                  <div className="exp-card">
                    <div className="d-flex gap-3">
                      <div className="exp-dot mt-1" />
                      <div className="w-100">
                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-1 mb-2">
                          <span className="exp-title">Data Analyst</span>
                          <span className="badge-tech">Dec 2024 – Feb 2025</span>
                        </div>
                        <ul className="list-unstyled m-0 d-flex flex-column gap-1">
                          <li className="exp-li">Paid internship (₹2,000/month) focused on data analysis and reporting</li>
                          <li className="exp-li">Analysed website and user data to extract actionable insights</li>
                          <li className="exp-li">Tracked and optimized campaign performance using analytics tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Education */}
              <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="accent-line" />
                  <span className="section-label">Education</span>
                </div>
                <div className="edu-card">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                      <div className="exp-title mb-1">Bachelor of Engineering</div>
                      <div style={{ color: '#888', fontSize: '0.82rem' }}> RTMNU University · Nagpur,Maharashtra, India</div>
                    </div>
                    <span className="badge-tech">2022 – 2026</span>
                  </div>
                </div>
              </div>
                  <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                </div>
                <div className="edu-card">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                      <div className="exp-title mb-1">HSC</div>
                      <div style={{ color: '#888', fontSize: '0.82rem' }}> Sindhu Mahavidhyalaya · Nagpur,Maharashtra, India</div>
                    </div>
                    <span className="badge-tech">2020 – 2022</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}