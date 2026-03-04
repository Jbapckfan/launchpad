import { useState } from "react";

const PROJECTS = [
  {
    name: "Flight Intel",
    desc: "Flight search with true cost analysis, points redemption, and companion pass pricing out of MCI",
    url: "https://flight-intel.vercel.app",
    github: "https://github.com/Jbapckfan/flight-intel",
    shot: "/shots/flight-intel.png",
    accent: "#34C759",
    tags: ["React", "Vite"],
  },
  {
    name: "GVMHED Provider Dashboard",
    desc: "Clinical decision support dashboard for emergency department providers",
    url: "https://gvmhed-provider-dashboard.vercel.app",
    github: "https://github.com/Jbapckfan/GVMHEDProviderDashboard",
    shot: "/shots/gvmhed.png",
    accent: "#FF453A",
    tags: ["Next.js", "Healthcare"],
  },
  {
    name: "TARS Mission Control",
    desc: "Self-hosted AI agent gateway \u2014 queue management, system health, skills, and agent monitoring",
    url: "http://127.0.0.1:7820/ui",
    github: "https://github.com/Jbapckfan/tars",
    shot: "/shots/tars.png",
    accent: "#0A84FF",
    tags: ["Node.js", "BullMQ", "Local"],
  },
  {
    name: "Alford Family Game Portal",
    desc: "Dad's experimental games collection \u2014 Zoo Conquest, Particle Conquest Pro, Tower Defense, and more",
    url: "https://jbapckfan.github.io/family-game-portal/",
    github: "https://github.com/Jbapckfan/family-game-portal",
    shot: "/shots/family-portal.png",
    accent: "#FF6B35",
    tags: ["Games", "GitHub Pages"],
  },
];

export default function Launchpad() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      minHeight: "100vh", color: "#e5e2ff",
      fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      WebkitFontSmoothing: "antialiased",
      background: "#0c0a14",
    }}>
      {/* Background layers */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {/* Gradient mesh */}
        <div style={{
          position: "absolute", top: "-20%", left: "-10%", width: "60%", height: "60%",
          background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", right: "-10%", width: "50%", height: "50%",
          background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
        }} />
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.07) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        {/* Noise texture overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.4,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <div style={{
          padding: "100px 40px 80px", maxWidth: 1100, margin: "0 auto",
          borderBottom: "1px solid rgba(139, 92, 246, 0.1)",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12, marginBottom: 24,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 800, color: "#a78bfa",
            }}>J</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#e5e2ff" }}>Jbapckfan</div>
              <div style={{ fontSize: 11, color: "#6b6685" }}>Full-stack developer</div>
            </div>
          </div>

          <h1 style={{
            fontSize: 56, fontWeight: 800, letterSpacing: -2.5, lineHeight: 1.05,
            margin: 0,
            background: "linear-gradient(135deg, #e5e2ff 0%, #a8a4ce 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Launchpad</h1>

          <p style={{
            fontSize: 17, color: "#a8a4ce", marginTop: 16, lineHeight: 1.7,
            maxWidth: 480,
          }}>
            A collection of live web projects. Click any card to visit the site,
            or check the source on GitHub.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <a href="https://github.com/Jbapckfan" target="_blank" rel="noopener"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 13, color: "#e5e2ff", textDecoration: "none", fontWeight: 600,
                padding: "10px 20px", borderRadius: 10,
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                transition: "all 200ms",
              }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 13, color: "#6b6685", fontWeight: 500,
              padding: "10px 16px", borderRadius: 10,
              background: "rgba(139, 92, 246, 0.05)",
              border: "1px solid rgba(139, 92, 246, 0.08)",
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: 3, background: "#34C759",
                boxShadow: "0 0 8px rgba(52, 199, 89, 0.5)",
              }} />
              {PROJECTS.length} live projects
            </div>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "48px 40px 80px",
        }}>
          <div style={{
            fontSize: 11, fontWeight: 600, color: "#6b6685",
            textTransform: "uppercase", letterSpacing: 2, marginBottom: 24,
          }}>Live Sites</div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24,
          }}>
            {PROJECTS.map((p, i) => {
              const isHovered = hovered === i;
              return (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex", flexDirection: "column",
                    textDecoration: "none", color: "inherit",
                    borderRadius: 20, overflow: "hidden",
                    background: "#15111e",
                    border: `1px solid ${isHovered ? "rgba(139, 92, 246, 0.35)" : "rgba(139, 92, 246, 0.1)"}`,
                    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-6px)" : "none",
                    boxShadow: isHovered
                      ? `0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(139, 92, 246, 0.2), 0 0 80px -20px ${p.accent}20`
                      : "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Screenshot area */}
                  <div style={{
                    position: "relative", overflow: "hidden",
                    aspectRatio: "16 / 10",
                    background: "#0c0a14",
                  }}>
                    <img
                      src={p.shot}
                      alt={p.name}
                      style={{
                        width: "100%", height: "100%", objectFit: "cover", objectPosition: "top",
                        display: "block",
                        transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                        filter: isHovered ? "brightness(1.05)" : "brightness(0.8) saturate(0.9)",
                      }}
                    />
                    {/* Bottom gradient */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, height: "60%",
                      background: "linear-gradient(to top, #15111e 0%, rgba(21,17,30,0.6) 40%, transparent 100%)",
                      pointerEvents: "none",
                    }} />
                    {/* Top accent line */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 3,
                      background: isHovered
                        ? `linear-gradient(90deg, ${p.accent}, ${p.accent}88)`
                        : "transparent",
                      transition: "all 300ms",
                    }} />
                    {/* Visit badge */}
                    <div style={{
                      position: "absolute", top: 14, right: 14,
                      fontSize: 11, fontWeight: 600, color: "#e5e2ff",
                      padding: "5px 12px", borderRadius: 8,
                      background: "rgba(12, 10, 20, 0.7)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(139, 92, 246, 0.15)",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(-4px)",
                      transition: "all 250ms",
                    }}>Visit &rarr;</div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "20px 24px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    }}>
                      <div style={{
                        fontSize: 17, fontWeight: 700, color: "#e5e2ff",
                        letterSpacing: -0.3, lineHeight: 1.3,
                      }}>{p.name}</div>
                      {p.github && (
                        <span
                          onClick={e => { e.preventDefault(); e.stopPropagation(); window.open(p.github, "_blank"); }}
                          style={{
                            fontSize: 11, color: "#6b6685", fontWeight: 500, cursor: "pointer",
                            padding: "4px 10px", borderRadius: 6, flexShrink: 0, marginLeft: 12,
                            background: "rgba(139, 92, 246, 0.08)",
                            border: "1px solid rgba(139, 92, 246, 0.12)",
                            transition: "all 200ms",
                          }}>Source</span>
                      )}
                    </div>
                    <div style={{
                      fontSize: 13, color: "#6b6685", marginTop: 8, lineHeight: 1.6, flex: 1,
                    }}>{p.desc}</div>

                    {/* Tags */}
                    <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
                      {p.tags.map(t => (
                        <span key={t} style={{
                          fontSize: 10, fontWeight: 600, color: "#a8a4ce",
                          padding: "3px 8px", borderRadius: 5,
                          background: "rgba(139, 92, 246, 0.08)",
                          letterSpacing: 0.3,
                        }}>{t}</span>
                      ))}
                      <span style={{
                        fontSize: 10, fontWeight: 600, color: p.accent,
                        padding: "3px 8px", borderRadius: 5,
                        background: `${p.accent}12`,
                        marginLeft: "auto",
                        display: "flex", alignItems: "center", gap: 4,
                      }}>
                        <span style={{
                          width: 5, height: 5, borderRadius: "50%", background: p.accent,
                          boxShadow: `0 0 6px ${p.accent}80`,
                        }} />
                        Live
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
