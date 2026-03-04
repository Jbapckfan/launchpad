import { useState, useMemo } from "react";

const PROJECTS = [
  {
    name: "Flight Intel",
    desc: "MCI departure flight search with true cost analysis, points redemption, and companion pass pricing",
    url: "https://flight-intel.vercel.app",
    github: "https://github.com/Jbapckfan/flight-intel",
    color: "#34C759",
    icon: "\u2708\uFE0F",
    category: "tool",
    span: 2,
  },
  {
    name: "TARS Gateway",
    desc: "Self-hosted AI agent gateway and orchestrator with BullMQ job queuing",
    url: "http://127.0.0.1:7820/ui",
    github: "https://github.com/Jbapckfan/tars",
    color: "#007AFF",
    icon: "\uD83E\uDD16",
    category: "tool",
    span: 2,
    local: true,
  },
  {
    name: "GVMHED Provider Dashboard",
    desc: "Dashboard for ED providers to access clinical information quickly",
    url: "https://gvmhedproviderdashboard.vercel.app",
    github: "https://github.com/Jbapckfan/GVMHEDProviderDashboard",
    color: "#FF3B30",
    icon: "\uD83C\uDFE5",
    category: "app",
    span: 2,
  },
  {
    name: "ReadyScan",
    desc: "Quick-access scanning and readiness tool",
    url: "https://readyscan.vercel.app",
    github: "https://github.com/Jbapckfan/ReadyScan",
    color: "#FF9500",
    icon: "\uD83D\uDCF7",
    category: "app",
    span: 1,
  },
  {
    name: "Quantum Alpha Hunter",
    desc: "AI-powered multi-bagger detection system using free market data",
    url: "https://quantum-alpha-hunter.vercel.app",
    github: "https://github.com/Jbapckfan/quantum-alpha-hunter",
    color: "#AF52DE",
    icon: "\uD83D\uDCC8",
    category: "finance",
    span: 2,
  },
  {
    name: "PriceWatch",
    desc: "Track product prices and get push alerts when they drop",
    url: "https://pricewatch.vercel.app",
    github: "https://github.com/Jbapckfan/pricewatch",
    color: "#FFD60A",
    icon: "\uD83D\uDCB0",
    category: "finance",
    span: 1,
  },
  {
    name: "Family Game Portal",
    desc: "Self-hosted game portal for UGREEN NAS \u2014 serve web games to your home network",
    url: "https://family-game-portal.vercel.app",
    github: "https://github.com/Jbapckfan/family-game-portal",
    color: "#30D158",
    icon: "\uD83C\uDFAE",
    category: "game",
    span: 1,
  },
  {
    name: "Glitched",
    desc: "iOS puzzle platformer where the iPhone itself is the controller",
    url: null,
    github: "https://github.com/Jbapckfan/Glitched",
    color: "#FF2D55",
    icon: "\uD83E\uDE90",
    category: "game",
    span: 1,
  },
  {
    name: "GhostLink",
    desc: "Unified remote desktop \u2014 macOS agent + iOS/iPad client with H.264 streaming",
    url: null,
    github: "https://github.com/Jbapckfan/GhostLink",
    color: "#5E5CE6",
    icon: "\uD83D\uDDA5\uFE0F",
    category: "tool",
    span: 2,
  },
  {
    name: "Lucid Gravity App",
    desc: "iOS + Apple Watch app for 2026 Lucid Gravity Dream Edition \u2014 real-time vehicle data",
    url: null,
    github: "https://github.com/Jbapckfan/LucidGravityApp",
    color: "#64D2FF",
    icon: "\uD83D\uDE97",
    category: "app",
    span: 1,
  },
  {
    name: "iWitness",
    desc: "Evidence survivability software for civil liberties documentation \u2014 iOS/watchOS",
    url: null,
    github: "https://github.com/Jbapckfan/iWitness",
    color: "#FF6961",
    icon: "\uD83D\uDCF9",
    category: "app",
    span: 1,
  },
  {
    name: "OpenClaw Playbook",
    desc: "110+ creative use cases for a fully local AI assistant on Apple Silicon",
    url: "https://openclaw-playbook.vercel.app",
    github: "https://github.com/Jbapckfan/openclaw-playbook",
    color: "#BDB76B",
    icon: "\uD83D\uDCD6",
    category: "tool",
    span: 2,
  },
  {
    name: "QuickLaunchBar",
    desc: "macOS menu bar utility for quick-launching projects, system tools, and work mode layouts",
    url: null,
    github: "https://github.com/Jbapckfan/QuickLaunchBar",
    color: "#8E8E93",
    icon: "\uD83D\uDE80",
    category: "tool",
    span: 1,
  },
  {
    name: "ParalleLLM",
    desc: "LLM orchestrator for parallel model execution",
    url: null,
    github: "https://github.com/Jbapckfan/ParalleLLM",
    color: "#00C7BE",
    icon: "\u26A1",
    category: "tool",
    span: 1,
  },
  {
    name: "Municipal Signals",
    desc: "Municipal data signal processing and analysis",
    url: "https://municipal-signals.vercel.app",
    github: null,
    color: "#AC8E68",
    icon: "\uD83C\uDFDB\uFE0F",
    category: "tool",
    span: 1,
  },
  {
    name: "Epstein Files",
    desc: "Search results through the files for Trump, Musk, etc.",
    url: "https://epstein-files.vercel.app",
    github: "https://github.com/Jbapckfan/epstein-files",
    color: "#FF453A",
    icon: "\uD83D\uDCC2",
    category: "app",
    span: 1,
  },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "app", label: "Apps" },
  { key: "tool", label: "Tools" },
  { key: "finance", label: "Finance" },
  { key: "game", label: "Games" },
];

export default function Launchpad() {
  const [filter, setFilter] = useState("all");
  const [hovered, setHovered] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div style={{
      background: "#0A0A0C", minHeight: "100vh", color: "#FFF",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "0 0 60px",
    }}>
      {/* Header */}
      <div style={{
        padding: "40px 32px 24px",
        background: "linear-gradient(180deg, #14141A 0%, #0A0A0C 100%)",
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid #1A1A1E",
        backdropFilter: "blur(20px)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -1 }}>
                {"\uD83D\uDE80"} Launchpad
              </div>
              <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>
                @Jbapckfan \u00b7 {PROJECTS.length} projects
              </div>
            </div>
            <a href="https://github.com/Jbapckfan" target="_blank" rel="noopener"
              style={{
                fontSize: 12, color: "#888", background: "#1A1A1E", padding: "8px 14px",
                borderRadius: 8, textDecoration: "none", fontWeight: 600, border: "1px solid #333",
              }}>GitHub {"\u2197"}</a>
          </div>

          {/* Category filters */}
          <div style={{ display: "flex", gap: 6 }}>
            {CATEGORIES.map(c => (
              <button key={c.key} onClick={() => setFilter(c.key)}
                style={{
                  padding: "6px 14px", borderRadius: 20,
                  border: `1.5px solid ${filter === c.key ? "#FFF" : "#333"}`,
                  background: filter === c.key ? "#FFF" : "transparent",
                  color: filter === c.key ? "#000" : "#888",
                  fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                }}>{c.label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div style={{
        maxWidth: 1200, margin: "24px auto 0", padding: "0 32px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
      }}>
        {filtered.map((p, i) => {
          const isHovered = hovered === i;
          const hasUrl = !!p.url;
          return (
            <div
              key={p.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                gridColumn: `span ${p.span || 1}`,
                background: isHovered ? "#1A1A1E" : "#111114",
                borderRadius: 16,
                padding: "20px 22px",
                border: `1px solid ${isHovered ? p.color + "55" : "#1E1E22"}`,
                cursor: hasUrl ? "pointer" : "default",
                transition: "all 0.2s ease",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 140,
                boxShadow: isHovered ? `0 8px 32px ${p.color}15` : "none",
              }}
              onClick={() => hasUrl && window.open(p.url, "_blank")}
            >
              {/* Glow effect */}
              {isHovered && (
                <div style={{
                  position: "absolute", top: -40, right: -40,
                  width: 120, height: 120, borderRadius: "50%",
                  background: `radial-gradient(circle, ${p.color}20 0%, transparent 70%)`,
                  pointerEvents: "none",
                }} />
              )}

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>{p.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 15, fontWeight: 700, color: "#FFF",
                      display: "flex", alignItems: "center", gap: 6,
                    }}>
                      {p.name}
                      {p.local && (
                        <span style={{
                          fontSize: 8, color: "#FF9500", background: "#FF950020",
                          padding: "2px 6px", borderRadius: 4, fontWeight: 700,
                        }}>LOCAL</span>
                      )}
                    </div>
                  </div>
                  <span style={{
                    fontSize: 9, color: p.color, background: `${p.color}18`,
                    padding: "3px 8px", borderRadius: 6, fontWeight: 700,
                    textTransform: "uppercase",
                  }}>{p.category}</span>
                </div>
                <div style={{ fontSize: 11, color: "#777", lineHeight: 1.5 }}>{p.desc}</div>
              </div>

              {/* Actions */}
              <div style={{
                display: "flex", gap: 6, marginTop: 14, alignItems: "center",
              }}>
                {hasUrl && (
                  <span
                    onClick={e => { e.stopPropagation(); window.open(p.url, "_blank"); }}
                    style={{
                      fontSize: 11, color: p.color, background: `${p.color}15`,
                      padding: "5px 12px", borderRadius: 8, fontWeight: 600,
                      cursor: "pointer", textDecoration: "none",
                    }}>Open {"\u2197"}</span>
                )}
                {!hasUrl && (
                  <span style={{
                    fontSize: 10, color: "#444", padding: "5px 12px",
                    borderRadius: 8, fontWeight: 600, background: "#1A1A1E",
                  }}>Source only</span>
                )}
                {p.github && (
                  <span
                    onClick={e => { e.stopPropagation(); window.open(p.github, "_blank"); }}
                    style={{
                      fontSize: 11, color: "#666", background: "#1A1A1E",
                      padding: "5px 10px", borderRadius: 8, fontWeight: 600,
                      cursor: "pointer", textDecoration: "none", border: "1px solid #2A2A2E",
                    }}>GitHub</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: 1200, margin: "32px auto 0", padding: "0 32px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 10, color: "#333" }}>
          Built with React + Vite \u00b7 Deployed on Vercel
        </div>
      </div>
    </div>
  );
}
