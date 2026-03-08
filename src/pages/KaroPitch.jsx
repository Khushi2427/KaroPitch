import { useState, useEffect, useRef } from "react";

const KaroPitch = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [counters, setCounters] = useState({ startups: 0, investors: 0, funded: 0, cities: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  const animateCounters = () => {
    const targets = { startups: 500, investors: 120, funded: 45, cities: 200 };
    const duration = 2000;
    const steps = 60;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounters({
        startups: Math.round(targets.startups * ease),
        investors: Math.round(targets.investors * ease),
        funded: Math.round(targets.funded * ease),
        cities: Math.round(targets.cities * ease),
      });
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
  };

  const steps = [
    { icon: "📋", title: "Apply with Your Pitch Deck", desc: "Submit your startup profile and pitch deck through our simple application form." },
    { icon: "⭐", title: "Get Shortlisted", desc: "KaroStartup's expert team reviews and shortlists the most promising startups." },
    { icon: "🎤", title: "Pitch Live to Investors", desc: "Present your vision in a structured, curated pitch session to top investors." },
    { icon: "🚀", title: "Raise Funding & Scale", desc: "Close deals, get mentorship, and scale your startup with the right support." },
  ];

  const categories = [
    { icon: "🛍️", name: "D2C Brands", color: "#FF6B35" },
    { icon: "⚙️", name: "MSMEs", color: "#F7931E" },
    { icon: "📱", name: "Consumer Startups", color: "#FF4757" },
    { icon: "🏭", name: "Manufacturing", color: "#2ED573" },
    { icon: "💻", name: "SaaS Startups", color: "#1E90FF" },
    { icon: "🌾", name: "Bharat Startups", color: "#FF6B9D" },
  ];

  const startups = [
    { name: "AgroLink", category: "AgriTech", city: "Jaipur", stage: "Pre-Seed", desc: "Connecting farmers to buyers directly via mobile marketplace.", raised: "₹80L" },
    { name: "KiraanAI", category: "D2C / MSME", city: "Patna", stage: "Seed", desc: "AI-powered inventory system for kirana store owners.", raised: "₹1.2Cr" },
    { name: "NariCraft", category: "Consumer", city: "Surat", stage: "Pre-Seed", desc: "Handmade goods platform empowering rural women artisans.", raised: "₹40L" },
    { name: "HealthDost", category: "HealthTech", city: "Indore", stage: "Seed", desc: "Affordable telemedicine and diagnostics for Tier-3 India.", raised: "₹2Cr" },
    { name: "LogiKart", category: "SaaS", city: "Nagpur", stage: "Pre-Seed", desc: "Last-mile logistics management for small D2C brands.", raised: "₹60L" },
    { name: "EduSangam", category: "EdTech", city: "Lucknow", stage: "Seed", desc: "Vernacular skill-building courses for rural youth.", raised: "₹1.5Cr" },
  ];

  const investors = [
    { name: "Arjun Mehta", firm: "Bharat Ventures", focus: "Consumer & D2C", avatar: "AM" },
    { name: "Priya Sharma", firm: "Startup India Fund", focus: "MSME & Manufacturing", avatar: "PS" },
    { name: "Rahul Gupta", firm: "Desi Angels Network", focus: "SaaS & Tech", avatar: "RG" },
    { name: "Kavya Nair", firm: "Tier2 Capital", focus: "Bharat Startups", avatar: "KN" },
  ];

  const m = isMobile;

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0A0A0F", color: "#F5F0E8", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #FF6B35; border-radius: 2px; }

        .btn-primary {
          background: linear-gradient(135deg, #FF6B35, #F7931E);
          color: #0A0A0F; border: none; padding: 14px 32px; border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
          cursor: pointer; transition: all 0.3s ease; letter-spacing: 0.5px; white-space: nowrap;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,107,53,0.4); }

        .btn-outline {
          background: transparent; color: #F5F0E8;
          border: 1.5px solid rgba(245,240,232,0.3); padding: 14px 32px; border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 15px;
          cursor: pointer; transition: all 0.3s ease; white-space: nowrap;
        }
        .btn-outline:hover { border-color: #FF6B35; color: #FF6B35; transform: translateY(-2px); }

        .tag {
          display: inline-block; background: rgba(255,107,53,0.1);
          border: 1px solid rgba(255,107,53,0.3); color: #FF6B35;
          padding: 6px 16px; border-radius: 2px; font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FF6B35, #F7931E, #FFD700);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .grid-lines {
          position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px; padding: 28px; transition: all 0.3s ease;
        }
        .card:hover { background: rgba(255,107,53,0.05); border-color: rgba(255,107,53,0.2); transform: translateY(-4px); }

        .nav-link {
          font-family: 'DM Sans', sans-serif; font-size: 14px;
          color: rgba(245,240,232,0.6); cursor: pointer; transition: color 0.2s; text-decoration: none;
        }
        .nav-link:hover { color: #FF6B35; }

        .step-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.2); cursor: pointer; transition: all 0.3s; border: none;
        }
        .step-dot.active { background: #FF6B35; transform: scale(1.3); }

        @keyframes pulse-ring {
          0% { transform: scale(0.8) translateX(-50%); opacity: 1; }
          100% { transform: scale(2) translateX(-50%); opacity: 0; }
        }
        .pulse-ring {
          position: absolute; border: 2px solid rgba(255,107,53,0.4);
          border-radius: 50%; animation: pulse-ring 2s ease-out infinite;
        }

        .mobile-menu {
          position: fixed; top: 72px; left: 0; right: 0;
          background: rgba(10,10,15,0.98); backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 24px 5%; z-index: 99;
          display: flex; flex-direction: column; gap: 20px;
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 5%",
        background: scrollY > 50 ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "72px",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #FF6B35, #F7931E)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#0A0A0F", fontFamily: "'Playfair Display', serif", flexShrink: 0 }}>K</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700 }}>Karo Pitch</div>
            <div style={{ fontSize: 10, color: "rgba(255,107,53,0.8)", fontFamily: "'DM Sans', sans-serif", letterSpacing: 1.5, textTransform: "uppercase" }}>by KaroStartup</div>
          </div>
        </a>

        {!m && (
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {["About", "How It Works", "Startups", "Investors"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="nav-link">{item}</a>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {!m && <button className="btn-outline" style={{ padding: "10px 22px", fontSize: 14 }}>Explore Startups</button>}
          {!m && <button className="btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>Apply to Pitch</button>}
          {m && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4, color: "#F5F0E8", cursor: "pointer", padding: "8px 12px", fontSize: 18, lineHeight: 1 }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </nav>

      {m && menuOpen && (
        <div className="mobile-menu">
          {["About", "How It Works", "Startups", "Investors"].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="nav-link" style={{ fontSize: 16 }} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <button className="btn-primary" style={{ textAlign: "center", width: "100%", padding: "14px" }} onClick={() => setMenuOpen(false)}>Apply to Pitch →</button>
            <button className="btn-outline" style={{ textAlign: "center", width: "100%", padding: "14px" }} onClick={() => setMenuOpen(false)}>Explore Startups</button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", padding: m ? "100px 5% 60px" : "0 6%", overflow: "hidden" }}>
        <div className="grid-lines" />
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "rgba(255,107,53,0.08)", filter: "blur(110px)", top: "15%", right: "10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "rgba(247,147,30,0.06)", filter: "blur(90px)", bottom: "15%", left: "2%", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 40 : 80, alignItems: "center", minHeight: m ? "auto" : "100vh", paddingTop: "72px", paddingBottom: "40px" }}>

          {/* LEFT — text */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="tag">🇮🇳 India's Startup Discovery Platform</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(32px, 9vw, 46px)" : "clamp(36px, 4vw, 58px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: m ? "-0.5px" : "-1.5px", marginBottom: 18 }}>
              Pitch Your Startup<br />to India's <span className="gradient-text">Top Investors.</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: m ? 14 : 15, color: "rgba(245,240,232,0.6)", lineHeight: 1.75, maxWidth: 420, marginBottom: 30, fontWeight: 300 }}>
              Karo Pitch connects early-stage founders from Bharat's Tier-2 &amp; Tier-3 cities with investors through curated, structured pitch events.
            </p>
            <div style={{ display: "flex", gap: 12, flexDirection: m ? "column" : "row" }}>
              <button className="btn-primary" style={{ fontSize: 14, padding: "13px 30px", width: m ? "100%" : "auto" }}>Apply to Pitch →</button>
              <button className="btn-outline" style={{ fontSize: 14, padding: "13px 30px", width: m ? "100%" : "auto" }}>Explore Startups</button>
            </div>
            <div style={{ marginTop: 40, display: "flex", gap: m ? 24 : 36, flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[["500+", "Startups Applied"], ["120+", "Investors"], ["200+", "Cities"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? 22 : 26, fontWeight: 700, color: "#FF6B35" }}>{num}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.45)", marginTop: 2, letterSpacing: 0.3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — animated process */}
          {!m && (
            <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <style>{`
                @keyframes stepFadeIn {
                  0% { opacity: 0; transform: translateY(16px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes connectorGrow {
                  0% { height: 0; opacity: 0; }
                  100% { height: 40px; opacity: 1; }
                }
                @keyframes orbPulse {
                  0%, 100% { transform: scale(1); opacity: 0.6; }
                  50% { transform: scale(1.15); opacity: 1; }
                }
                @keyframes tickPop {
                  0% { transform: scale(0); opacity: 0; }
                  60% { transform: scale(1.2); }
                  100% { transform: scale(1); opacity: 1; }
                }
                .process-step-0 { animation: stepFadeIn 0.6s ease forwards 0.1s; opacity: 0; }
                .process-step-1 { animation: stepFadeIn 0.6s ease forwards 0.7s; opacity: 0; }
                .process-step-2 { animation: stepFadeIn 0.6s ease forwards 1.3s; opacity: 0; }
                .process-step-3 { animation: stepFadeIn 0.6s ease forwards 1.9s; opacity: 0; }
                .connector-0 { animation: connectorGrow 0.4s ease forwards 0.6s; height: 0; opacity: 0; }
                .connector-1 { animation: connectorGrow 0.4s ease forwards 1.2s; height: 0; opacity: 0; }
                .connector-2 { animation: connectorGrow 0.4s ease forwards 1.8s; height: 0; opacity: 0; }
                .tick-0 { animation: tickPop 0.4s ease forwards 0.5s; opacity: 0; }
                .tick-1 { animation: tickPop 0.4s ease forwards 1.1s; opacity: 0; }
                .tick-2 { animation: tickPop 0.4s ease forwards 1.7s; opacity: 0; }
                .tick-3 { animation: tickPop 0.4s ease forwards 2.3s; opacity: 0; }
                .orb-pulse { animation: orbPulse 3s ease-in-out infinite; }
              `}</style>

              <div style={{ width: "100%", maxWidth: 380, padding: "36px 32px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, position: "relative", overflow: "hidden" }}>
                {/* bg glow inside card */}
                <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,107,53,0.06)", filter: "blur(60px)", top: "-20px", right: "-20px", pointerEvents: "none" }} />

                {/* header */}
                <div style={{ marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.4)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>Your Journey</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>From Idea to Funding</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(46,213,115,0.1)", border: "1px solid rgba(46,213,115,0.2)", borderRadius: 20, padding: "5px 12px" }}>
                    <div className="orb-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#2ED573" }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#2ED573", fontWeight: 600 }}>Live</span>
                  </div>
                </div>

                {/* steps */}
                {[
                  { icon: "📋", label: "Apply", sub: "Submit your pitch deck", color: "#FF6B35" },
                  { icon: "⭐", label: "Get Shortlisted", sub: "Expert review by KaroStartup", color: "#F7931E" },
                  { icon: "🎤", label: "Pitch Live", sub: "Present to investors", color: "#FFD700" },
                  { icon: "🚀", label: "Raise & Scale", sub: "Close deals & grow", color: "#2ED573" },
                ].map((step, i) => (
                  <div key={i}>
                    <div className={`process-step-${i}`} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      {/* icon + tick column */}
                      <div style={{ position: "relative", flexShrink: 0 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: `${step.color}12`, border: `1px solid ${step.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                          {step.icon}
                        </div>
                        <div className={`tick-${i}`} style={{ position: "absolute", top: -5, right: -5, width: 16, height: 16, borderRadius: "50%", background: step.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#0A0A0F", fontWeight: 700 }}>✓</div>
                      </div>
                      {/* text */}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, color: "#F5F0E8" }}>{step.label}</div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.4)", marginTop: 2 }}>{step.sub}</div>
                      </div>
                      {/* step number */}
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, color: `${step.color}30` }}>0{i + 1}</div>
                    </div>
                    {/* connector line */}
                    {i < 3 && (
                      <div className={`connector-${i}`} style={{ marginLeft: 21, width: 2, background: `linear-gradient(to bottom, ${step.color}50, transparent)`, borderRadius: 2, margin: "6px 0 6px 21px" }} />
                    )}
                  </div>
                ))}

                {/* footer stat bar */}
                <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 0 }}>
                  {[["₹45Cr+", "Facilitated"], ["45", "Funded"], ["120+", "Investors"]].map(([val, lbl], i, arr) => (
                    <div key={lbl} style={{ flex: 1, textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "#FF6B35" }}>{val}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(245,240,232,0.4)", marginTop: 2 }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT KARO PITCH */}
      <section style={{ padding: m ? "60px 5%" : "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 40 : 80, alignItems: "center" }}>
          <div>
            <div className="tag">About Karo Pitch</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(28px, 8vw, 42px)" : "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px", marginBottom: 20 }}>
              Built for <span className="gradient-text">Bharat's</span> Boldest Founders
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: m ? 15 : 17, color: "rgba(245,240,232,0.6)", lineHeight: 1.8, marginBottom: 16, fontWeight: 300 }}>
              Thousands of founders are building extraordinary businesses across India — from small towns, rural districts, and emerging cities. But they lack one thing: access to the right investors.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: m ? 15 : 17, color: "rgba(245,240,232,0.6)", lineHeight: 1.8, fontWeight: 300 }}>
              Karo Pitch was created to bridge exactly this gap. We curate high-quality pitch events where selected startups present directly to investors who are actively looking for India's next big opportunity.
            </p>
            <div style={{ marginTop: 28 }}>
              <button className="btn-primary" style={{ width: m ? "100%" : "auto" }}>Learn More →</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { icon: "🎯", title: "Curated Events", desc: "Structured pitch sessions with pre-vetted investors" },
              { icon: "🌍", title: "Pan-India Reach", desc: "From metros to Tier-3 cities and rural India" },
              { icon: "🤝", title: "Investor Access", desc: "Direct connections with angels, VCs, and family offices" },
              { icon: "📈", title: "Growth Support", desc: "Mentorship, visibility, and community support" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: m ? "18px" : "24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{title}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.5)", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: m ? "60px 5%" : "100px 5%", background: "rgba(255,107,53,0.02)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: m ? 32 : 60 }}>
            <div className="tag">How It Works</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(28px, 8vw, 42px)" : "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px" }}>
              Four Steps to <span className="gradient-text">Funding</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)", gap: m ? 12 : 20 }}>
            {steps.map((step, i) => (
              <div key={i} onClick={() => setActiveStep(i)} style={{
                padding: m ? "18px 20px" : "28px 20px", borderRadius: 8,
                border: `1px solid ${activeStep === i ? "rgba(255,107,53,0.4)" : "rgba(255,255,255,0.07)"}`,
                background: activeStep === i ? "rgba(255,107,53,0.08)" : "rgba(255,255,255,0.02)",
                cursor: "pointer", transition: "all 0.4s ease",
                transform: activeStep === i && !m ? "translateY(-6px)" : "none",
                position: "relative",
                display: m ? "flex" : "block", alignItems: m ? "flex-start" : "unset", gap: m ? 16 : 0,
              }}>
                {activeStep === i && <div style={{ position: "absolute", top: -1, left: -1, right: -1, height: 3, background: "linear-gradient(90deg, #FF6B35, #F7931E)", borderRadius: "8px 8px 0 0" }} />}
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: activeStep === i ? "linear-gradient(135deg, #FF6B35, #F7931E)" : "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: m ? 0 : 16, transition: "all 0.4s", flexShrink: 0 }}>{step.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: "#FF6B35", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Step {i + 1}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? 15 : 17, fontWeight: 700, marginBottom: 8 }}>{step.title}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.5)", lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 28 }}>
            {steps.map((_, i) => (
              <button key={i} className={`step-dot ${activeStep === i ? "active" : ""}`} onClick={() => setActiveStep(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{ padding: m ? "60px 5%" : "80px 5%" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: m ? 12 : 24, textAlign: "center" }}>
            {[
              { val: counters.startups, suffix: "+", label: "Startups Applied", icon: "🚀" },
              { val: counters.investors, suffix: "+", label: "Investors in Network", icon: "💼" },
              { val: `₹${counters.funded}Cr`, suffix: "+", label: "Funding Facilitated", icon: "💰" },
              { val: counters.cities, suffix: "+", label: "Cities Represented", icon: "📍" },
            ].map(({ val, suffix, label, icon }) => (
              <div key={label} style={{ padding: m ? "24px 12px" : "40px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8 }}>
                <div style={{ fontSize: m ? 24 : 32, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(24px, 6vw, 34px)" : "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#FF6B35" }}>
                  {val}{typeof val === "number" ? suffix : suffix}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.5)", marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section style={{ padding: m ? "60px 5%" : "100px 5%", background: "rgba(255,107,53,0.02)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: m ? 32 : 56 }}>
            <div className="tag">Who Can Apply</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(28px, 8vw, 42px)" : "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px" }}>
              Built for <span className="gradient-text">Every Founder</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: m ? 14 : 17, color: "rgba(245,240,232,0.5)", marginTop: 14, fontWeight: 300 }}>
              We welcome founders from all sectors — especially those building for Bharat.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr 1fr" : "repeat(3, 1fr)", gap: m ? 12 : 18 }}>
            {categories.map(({ icon, name, color }) => (
              <div key={name} className="card" style={{ display: "flex", alignItems: "center", gap: 14, padding: m ? "14px" : "22px" }}>
                <div style={{ width: m ? 40 : 50, height: m ? 40 : 50, borderRadius: 10, flexShrink: 0, background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: m ? 20 : 26 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: m ? 13 : 15 }}>{name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color, marginTop: 3, fontWeight: 500 }}>Open for applications</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: "15px 40px", width: m ? "100%" : "auto" }}>Apply to Pitch Now →</button>
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section id="investors" style={{ padding: m ? "60px 5%" : "100px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 40 : 80, alignItems: "center" }}>
            <div>
              <div className="tag">Investors</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(28px, 8vw, 42px)" : "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px", marginBottom: 20 }}>
                Meet Investors Looking for the <span className="gradient-text">Next Big Startup.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: m ? 15 : 17, color: "rgba(245,240,232,0.6)", lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
                Our investor network spans angel investors, venture capital firms, family offices, and corporate investors — all actively seeking opportunities across India.
              </p>
              <button className="btn-outline" style={{ width: m ? "100%" : "auto" }}>Become an Investor Partner →</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {investors.map(({ name, firm, focus, avatar }) => (
                <div key={name} className="card" style={{ padding: m ? "16px" : "22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg, #FF6B35, #F7931E)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13, color: "#0A0A0F" }}>{avatar}</div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13 }}>{name}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#FF6B35" }}>{firm}</div>
                    </div>
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.4)", background: "rgba(255,255,255,0.03)", padding: "5px 8px", borderRadius: 4 }}>Focus: {focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STARTUPS */}
      <section id="startups" style={{ padding: m ? "60px 5%" : "100px 5%", background: "rgba(255,107,53,0.02)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: m ? "flex-start" : "flex-end", marginBottom: m ? 28 : 52, flexDirection: m ? "column" : "row", gap: 16 }}>
            <div>
              <div className="tag">Featured Startups</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(28px, 8vw, 42px)" : "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px" }}>
                Startups <span className="gradient-text">to Watch</span>
              </h2>
            </div>
            <button className="btn-outline" style={{ width: m ? "100%" : "auto" }}>View All Startups →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: m ? 12 : 20 }}>
            {startups.map(({ name, category, city, stage, desc, raised }) => (
              <div key={name} className="card" style={{ cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: "linear-gradient(135deg, rgba(255,107,53,0.2), rgba(247,147,30,0.1))", border: "1px solid rgba(255,107,53,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 17, color: "#FF6B35" }}>{name[0]}</div>
                  <div style={{ background: "rgba(46,213,115,0.1)", border: "1px solid rgba(46,213,115,0.2)", color: "#2ED573", fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 3 }}>{raised} raised</div>
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{name}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.5)", lineHeight: 1.6, marginBottom: 14 }}>{desc}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[category, city, stage].map(tag => (
                    <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 3, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(245,240,232,0.5)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT KAROSTARTUP */}
      <section style={{ padding: m ? "60px 5%" : "100px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: m ? 32 : 56 }}>
            <div className="tag">About KaroStartup</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(26px, 7vw, 40px)" : "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px" }}>
              India's Largest Startup <span className="gradient-text">Storytelling Platform</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: m ? 14 : 17, color: "rgba(245,240,232,0.5)", marginTop: 16, maxWidth: 560, margin: "16px auto 0", fontWeight: 300, lineHeight: 1.8 }}>
              For 5 years, KaroStartup has been the voice of India's founders — publishing thousands of startup stories and building one of the country's largest entrepreneurship communities.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: m ? 12 : 24 }}>
            {[
              { icon: "📰", num: "10,000+", label: "Startup Stories Published", desc: "Real journeys from India's boldest founders" },
              { icon: "👥", num: "5M+", label: "Community Members", desc: "Entrepreneurs, investors, and mentors" },
              { icon: "🏆", num: "5 Years", label: "Of Startup Storytelling", desc: "Building India's entrepreneurship narrative" },
            ].map(({ icon, num, label, desc }) => (
              <div key={label} className="card" style={{ textAlign: "center", padding: m ? "28px 20px" : "40px 24px" }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? 28 : 36, fontWeight: 900, color: "#FF6B35", marginBottom: 8 }}>{num}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.45)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: m ? "60px 5%" : "100px 5%", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,107,53,0.12) 0%, transparent 70%)" }} />
        <div className="grid-lines" style={{ opacity: 0.5 }} />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: 28 }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #FF6B35, #F7931E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto" }}>🚀</div>
            <div className="pulse-ring" style={{ width: 72, height: 72, top: 0, left: "50%" }} />
            <div className="pulse-ring" style={{ width: 72, height: 72, top: 0, left: "50%", animationDelay: "0.6s" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: m ? "clamp(28px, 8vw, 42px)" : "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px", marginBottom: 18 }}>
            Ready to Pitch Your <span className="gradient-text">Startup?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: m ? 15 : 18, color: "rgba(245,240,232,0.55)", marginBottom: 40, lineHeight: 1.7, fontWeight: 300 }}>
            Join hundreds of founders who have already taken the leap. Apply today and put your startup in front of India's most active investors.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexDirection: m ? "column" : "row" }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 44px", width: m ? "100%" : "auto" }}>Apply Now →</button>
            <button className="btn-outline" style={{ fontSize: 16, padding: "16px 44px", width: m ? "100%" : "auto" }}>Partner With Us</button>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.3)", marginTop: 20 }}>No application fee. Just your story and your vision.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: m ? "40px 5% 28px" : "48px 5% 32px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: m ? "column" : "row", justifyContent: "space-between", alignItems: m ? "flex-start" : "center", gap: 28, marginBottom: 36 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #FF6B35, #F7931E)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#0A0A0F", fontFamily: "'Playfair Display', serif" }}>K</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700 }}>Karo Pitch</div>
                <div style={{ fontSize: 10, color: "rgba(255,107,53,0.7)", fontFamily: "'DM Sans', sans-serif", letterSpacing: 1.5, textTransform: "uppercase" }}>by KaroStartup</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: m ? 18 : 32, flexWrap: "wrap" }}>
              {["About", "How It Works", "Apply", "Investors", "Contact"].map(link => (
                <a key={link} href="#" className="nav-link" style={{ fontSize: 13 }}>{link}</a>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {["📷", "💼", "🐦", "📘", "▶️"].map((icon, i) => (
                <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, cursor: "pointer" }}>{icon}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.3)" }}>© 2025 KaroStartup. All rights reserved.</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.3)" }}>Made with ❤️ for India's Founders</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KaroPitch;