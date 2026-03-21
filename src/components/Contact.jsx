import React, { useState } from "react";
import Supabase from './Supabase'


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", budget: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  const { data, error } = await Supabase
    .from('Anish_portfolio') // your table name
    .insert([
      {
        Full_Name: form.name,
        Email_Address: form.email,
        message: form.message,
      }
    ]);

  if (error) {
    console.error(error);
    setStatus("error");
  } else {
    setStatus("sent");
  }
};

  const subjects = ["AI Automation", "Data Analysis", "Web Development", "Freelance Project", "Full-time Opportunity", "Other"];
  const budgets = ["< ₹10,000", "₹10,000 – ₹30,000", "₹30,000 – ₹1,00,000", "₹1,00,000+", "Let's Discuss"];

  const contactInfo = [
    { icon: "✉", label: "Email", value: "mankanianeesh@gmail.com", href: "mailto:mankanianeesh@gmail.com" },
    { icon: "📞", label: "Phone", value: "+91 8378853372", href: "tel:+918378853372" },
    { icon: "in", label: "LinkedIn", value: "contactanishmankani", href: "https://www.linkedin.com/in/contactanishmankani" },
    { icon: "gh", label: "GitHub", value: "anish-mankani1", href: "https://github.com/anish-mankani1" },
  ];

  

  

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-root {
          font-family: 'DM Sans', sans-serif;
          background: #0f0f13;
          min-height: 100vh;
          padding: 80px 0;
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
        .orb { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; opacity: 0.13; }
        .orb-1 { width: 380px; height: 380px; background: #6c63ff; top: -80px; left: -80px; }
        .orb-2 { width: 280px; height: 280px; background: #3ecfcf; bottom: -60px; right: -60px; }

        /* Section header */
        .section-eyebrow { font-size: 0.72rem; color: #6c63ff; text-transform: uppercase; letter-spacing: 3px; font-weight: 600; margin-bottom: 10px; }
        .section-title { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(2rem, 4vw, 2.8rem); color: #fff; letter-spacing: -1px; line-height: 1.1; }
        .section-title span { background: linear-gradient(90deg, #6c63ff, #3ecfcf); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-sub { color: #666; font-size: 0.88rem; line-height: 1.7; margin-top: 10px; }

        /* Left info card */
        .info-card {
          background: #16161d;
          border: 1px solid #2a2a38;
          border-radius: 20px;
          padding: 36px;
          height: 100%;
        }
        .avail-chip {
          display: inline-flex; align-items: center; gap: 8px;
          background: #1a2e1a; border: 1px solid #2a5a2a;
          border-radius: 20px; padding: 6px 14px;
          font-size: 0.72rem; color: #5adf5a; margin-bottom: 28px;
        }
        .avail-dot { width: 7px; height: 7px; border-radius: 50%; background: #5adf5a; animation: pulse 2s infinite; }

        .contact-item-row {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #1e1e2d;
          text-decoration: none;
          transition: gap 0.2s;
        }
        .contact-item-row:last-child { border-bottom: none; }
        .contact-item-row:hover { gap: 18px; }
        .ci-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: #1e1e2d; border: 1px solid #2a2a38;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem; color: #6c63ff; flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .contact-item-row:hover .ci-icon { background: #23233a; border-color: #6c63ff55; }
        .ci-label { font-size: 0.68rem; color: #555; text-transform: uppercase; letter-spacing: 1px; }
        .ci-value { font-size: 0.82rem; color: #ccc; font-weight: 500; margin-top: 1px; }
        .contact-item-row:hover .ci-value { color: #fff; }

        .info-divider { height: 1px; background: #2a2a38; margin: 28px 0; }

        .response-note {
          background: #1e1e2d; border: 1px solid #2a2a38;
          border-radius: 14px; padding: 16px 18px;
        }
        .response-note p { font-size: 0.78rem; color: #666; margin: 0; line-height: 1.6; }
        .response-note strong { color: #aaa; }

        /* Form card */
        .form-card {
          background: #16161d;
          border: 1px solid #2a2a38;
          border-radius: 20px;
          padding: 36px;
        }

        .field-group { margin-bottom: 20px; }
        .field-label {
          display: block;
          font-size: 0.75rem; font-weight: 600;
          color: #666; text-transform: uppercase;
          letter-spacing: 1px; margin-bottom: 8px;
        }
        .field-required { color: #6c63ff; margin-left: 2px; }

        .field-input, .field-textarea, .field-select {
          width: 100%;
          background: #1a1a24;
          border: 1px solid #2a2a38;
          border-radius: 12px;
          padding: 12px 16px;
          color: #e0e0e0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          appearance: none;
        }
        .field-input::placeholder, .field-textarea::placeholder { color: #3a3a50; }
        .field-input:focus, .field-textarea:focus, .field-select:focus {
          border-color: #6c63ff;
          background: #1e1e2d;
          box-shadow: 0 0 0 3px rgba(108,99,255,0.12);
        }
        .field-input.active, .field-textarea.active, .field-select.active {
          border-color: #6c63ff55;
        }
        .field-textarea { resize: vertical; min-height: 130px; line-height: 1.6; }
        .field-select { cursor: pointer; color: #e0e0e0; }
        .field-select option { background: #1a1a24; color: #e0e0e0; }

        /* char count */
        .char-count { font-size: 0.68rem; color: #444; text-align: right; margin-top: 4px; }

        /* Submit */
        .btn-submit {
          width: 100%;
          background: linear-gradient(90deg, #6c63ff, #3ecfcf);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          margin-top: 8px;
        }
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(108,99,255,0.35);
        }
        .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        .btn-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%);
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer { to { transform: translateX(100%); } }

        /* Spinner */
        .spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
          vertical-align: middle;
          margin-right: 8px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success state */
        .success-box {
          background: linear-gradient(135deg, #1a2e1a, #1e2e1e);
          border: 1px solid #2a5a2a;
          border-radius: 20px;
          padding: 48px 36px;
          text-align: center;
          animation: fadeUp 0.5s ease both;
        }
        .success-icon {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, #2a5a2a, #3a7a3a);
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem; margin: 0 auto 20px;
          animation: popIn 0.4s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }
        @keyframes popIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .success-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: #5adf5a; font-weight: 700; margin-bottom: 8px; }
        .success-sub { color: #888; font-size: 0.88rem; line-height: 1.7; }
        .btn-reset {
          margin-top: 24px;
          background: transparent;
          border: 1px solid #2a5a2a;
          color: #5adf5a;
          padding: 10px 24px;
          border-radius: 20px;
          font-size: 0.82rem;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.2s;
        }
        .btn-reset:hover { background: #2a5a2a33; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(1.3); } }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
      `}</style>

      <div className="contact-root">
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="container px-4" style={{ maxWidth: 1100 }}>

          {/* Header */}
          <div className="mb-5 fade-up">
            <div className="section-eyebrow">Open to Opportunities</div>
            <div className="section-title">Seeking roles in AI Automation, Data Analysis, or Full-Stack Development.</div>
          </div>

          <div className="row g-4 align-items-start">

            {/* LEFT — Info */}
            <div className="col-12 col-lg-4 fade-up delay-1">
              <div className="info-card">
                <div className="avail-chip">
                  <span className="avail-dot" />
                  Available for Work
                </div>

                <div className="section-title" style={{ fontSize: '1.3rem', marginBottom: 8 }}>
                  Contact <span>Info</span>
                </div>
                <p className="section-sub" style={{ fontSize: '0.8rem', marginBottom: 24 }}>
                  Reach out through any of these channels.
                </p>

                {contactInfo.map((c, i) => (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-item-row" key={i} style={{ textDecoration: 'none' }}>
                    <span className="ci-icon">{c.icon}</span>
                    <div>
                      <div className="ci-label">{c.label}</div>
                      <div className="ci-value">{c.value}</div>
                    </div>
                    <span style={{ marginLeft: 'auto', color: '#333', fontSize: '0.8rem' }}>↗</span>
                  </a>
                ))}

                <div className="info-divider" />

                
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="col-12 col-lg-8 fade-up delay-2">
              {status === "sent" ? (
                <div className="success-box">
                  <div className="success-icon">✓</div>
                  <div className="success-title">Message Sent!</div>
                  <p className="success-sub">
                    Thanks for reaching out, <strong style={{ color: '#ccc' }}>{form.name || "there"}</strong>!<br />
                    I'll get back to you at <strong style={{ color: '#ccc' }}>{form.email}</strong> within 24 hours.
                  </p>
                  <button className="btn-reset" onClick={() => { setStatus(null); setForm({ name: "", email: "", subject: "", budget: "", message: "" }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="form-card">
                  <div className="row g-3">

                    {/* Name */}
                    <div className="col-12 col-sm-6">
                      <div className="field-group">
                        <label className="field-label">Full Name <span className="field-required">*</span></label>
                        <input
                          type="text" name="name" value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          className={`field-input ${focused === "name" ? "active" : ""}`}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-12 col-sm-6">
                      <div className="field-group">
                        <label className="field-label">Email Address <span className="field-required">*</span></label>
                        <input
                          type="email" name="email" value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          className={`field-input ${focused === "email" ? "active" : ""}`}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

               

                

                    {/* Message */}
                    <div className="col-12">
                      <div className="field-group">
                        <label className="field-label">Your Message <span className="field-required">*</span></label>
                        <textarea
                          name="message" value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          className={`field-textarea ${focused === "message" ? "active" : ""}`}
                          placeholder="Tell me about your project — what problem are you trying to solve, what tools you're using, and your timeline..."
                          required
                        />
                        <div className="char-count">{form.message.length} / 500</div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-12">
                      <button
                        className="btn-submit"
                        onClick={handleSubmit}
                        disabled={status === "sending" || !form.name || !form.email || !form.message}
                      >
                        {status === "sending" ? (
                          <><span className="spinner" /> Sending Message...</>
                        ) : (
                          <><span className="btn-shimmer" />Send Message ↗</>
                        )}
                      </button>
                      <p style={{ textAlign: 'center', color: '#444', fontSize: '0.72rem', marginTop: 12 }}>
                        🔒 Your information is private and will never be shared.
                      </p>
                    </div>

                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      
    </>
  );
}