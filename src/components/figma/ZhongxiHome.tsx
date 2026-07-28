"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { camps as campData } from "@/lib/camps";
import { stories as storyData } from "@/lib/stories";

// ── Palette ──────────────────────────────────────────────────────────
const C = {
  bg: '#F2F5EE',
  bgWarm: '#EAF0E5',
  dark: '#0C1A0E',
  dark2: '#142318',
  dark3: '#1E3520',
  mid: '#2D4A2F',
  accent: '#5A8A5C',    // sage green
  accentLight: '#8BB88C',
  accentPale: '#C4D9C2',
  gold: '#8FAF68',      // yellow-green highlight
  text: '#1A2E1B',
  textMid: '#4A6741',
  textLight: '#7A9A76',
  cream: '#F2F5EE',
}

// ── Hook: reveal on scroll ────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

// ── Hook: counter animation ───────────────────────────────────────────
function useCounter(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return val
}

// ── Animated stat ─────────────────────────────────────────────────────
function AnimStat({ num, suffix, label, sub, delay, active }: {
  num: number; suffix: string; label: string; sub: string; delay: number; active: boolean
}) {
  const count = useCounter(num, active)
  return (
    <div style={{
      opacity: active ? 1 : 0,
      transform: active ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.7s ${delay}ms, transform 0.7s ${delay}ms`,
    }}>
      <div style={{
        fontFamily: "'Noto Serif SC', serif",
        fontWeight: 700,
        fontSize: 'clamp(44px, 5vw, 64px)',
        color: C.accentLight,
        lineHeight: 1,
        marginBottom: 12,
        letterSpacing: '-0.02em',
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontWeight: 500, fontSize: 15, color: '#E8F0E5', marginBottom: 6 }}>{label}</div>
      <div style={{ fontWeight: 300, fontSize: 12, color: 'rgba(232,240,229,0.4)', letterSpacing: '0.05em' }}>{sub}</div>
    </div>
  )
}

// ── Reveal wrapper ────────────────────────────────────────────────────
function Reveal({ children, delay = 0, style = {} }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties
}) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.8s ${delay}ms ease, transform 0.8s ${delay}ms ease`,
      ...style,
    }}>
      {children}
    </div>
  )
}

// ── SVG decorative sprigs ─────────────────────────────────────────────
function Sprig({ color = 'rgba(90,138,92,0.25)', size = 120 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <path d="M60 110 Q60 70 60 20" stroke={color} strokeWidth="1" />
      <path d="M60 80 Q40 60 20 65" stroke={color} strokeWidth="1" />
      <path d="M60 65 Q80 45 100 50" stroke={color} strokeWidth="1" />
      <path d="M60 50 Q42 32 28 38" stroke={color} strokeWidth="1" />
      <path d="M60 38 Q76 22 90 28" stroke={color} strokeWidth="1" />
      <circle cx="20" cy="65" r="3" fill={color} />
      <circle cx="100" cy="50" r="3" fill={color} />
      <circle cx="28" cy="38" r="2.5" fill={color} />
      <circle cx="90" cy="28" r="2.5" fill={color} />
      <circle cx="60" cy="20" r="3" fill={color} />
    </svg>
  )
}

function SprigLarge({ color = 'rgba(90,138,92,0.12)' }: { color?: string }) {
  return (
    <svg width="300" height="400" viewBox="0 0 300 400" fill="none" style={{ display: 'block' }}>
      <path d="M150 390 C150 320 152 240 148 80" stroke={color} strokeWidth="1.5" />
      <path d="M150 320 C110 290 70 300 30 285" stroke={color} strokeWidth="1.5" />
      <path d="M150 280 C190 250 230 260 268 248" stroke={color} strokeWidth="1.5" />
      <path d="M150 240 C114 210 82 218 48 208" stroke={color} strokeWidth="1.5" />
      <path d="M150 200 C184 172 216 180 248 170" stroke={color} strokeWidth="1.5" />
      <path d="M150 160 C118 134 90 142 60 132" stroke={color} strokeWidth="1.5" />
      <path d="M150 130 C178 106 206 114 232 105" stroke={color} strokeWidth="1.5" />
      <ellipse cx="30" cy="285" rx="6" ry="4" fill={color} transform="rotate(-15 30 285)" />
      <ellipse cx="268" cy="248" rx="6" ry="4" fill={color} transform="rotate(20 268 248)" />
      <ellipse cx="48" cy="208" rx="5" ry="3.5" fill={color} transform="rotate(-10 48 208)" />
      <ellipse cx="248" cy="170" rx="5" ry="3.5" fill={color} transform="rotate(15 248 170)" />
      <ellipse cx="60" cy="132" rx="5" ry="3" fill={color} transform="rotate(-12 60 132)" />
      <ellipse cx="232" cy="105" rx="5" ry="3" fill={color} transform="rotate(18 232 105)" />
      <ellipse cx="150" cy="80" rx="5" ry="7" fill={color} />
    </svg>
  )
}

const NAV_LINKS = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "营期与归档", href: "/camps" },
  { label: "声音与改变", href: "/stories" },
  { label: "参与支持", href: "/join" },
];

const CAMPS = campData.map((c, i) => ({
  slug: c.slug,
  year: `${c.year} · ${c.season.replace("令营", "")}`,
  title: c.title,
  location: c.location,
  tag: c.status === "ongoing" ? "进行中" : "已结束",
  shade: ["#0C1A0E", "#142318", "#1E3520", "#2D4A2F"][i % 4],
  cover: c.cover,
}));

const VOICES = storyData
  .filter((s) => s.kind === "student")
  .slice(0, 3)
  .map((s) => ({
    quote: `“${s.text}”`,
    author: `${s.camp} · ${s.author}`,
  }));

// ── Seed particle cursor trail ─────────────────────────────────────────
type Particle = { id: number; x: number; y: number; vx: number; vy: number; life: number; size: number; rotation: number }

function SeedTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -999, y: -999 })
  const raf = useRef(0)
  const idCounter = useRef(0)

  const drawLeaf = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, alpha: number) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotation)
    ctx.globalAlpha = alpha
    ctx.beginPath()
    ctx.moveTo(0, -size)
    ctx.bezierCurveTo(size * 0.8, -size * 0.5, size * 0.8, size * 0.5, 0, size * 0.3)
    ctx.bezierCurveTo(-size * 0.8, size * 0.5, -size * 0.8, -size * 0.5, 0, -size)
    ctx.fillStyle = `rgba(90,138,92,${alpha})`
    ctx.fill()
    // center vein
    ctx.globalAlpha = alpha * 0.4
    ctx.beginPath()
    ctx.moveTo(0, -size)
    ctx.lineTo(0, size * 0.3)
    ctx.strokeStyle = `rgba(139,184,140,${alpha})`
    ctx.lineWidth = 0.5
    ctx.stroke()
    ctx.restore()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    let lastSpawn = 0
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      const now = performance.now()
      if (now - lastSpawn > 40) {
        lastSpawn = now
        const angle = Math.random() * Math.PI * 2
        const speed = 0.4 + Math.random() * 0.8
        particles.current.push({
          id: idCounter.current++,
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.2,
          life: 1,
          size: 3 + Math.random() * 4,
          rotation: Math.random() * Math.PI * 2,
        })
      }
    }
    window.addEventListener('mousemove', onMove)

    let last = 0
    const loop = (ts: number) => {
      const dt = Math.min(ts - last, 32)
      last = ts
      const ctx = canvas.getContext('2d')!
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // soft glow at cursor
      const grd = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 80)
      grd.addColorStop(0, 'rgba(90,138,92,0.07)')
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.current = particles.current.filter(p => p.life > 0)
      for (const p of particles.current) {
        p.x += p.vx * (dt / 16)
        p.y += p.vy * (dt / 16)
        p.vy += 0.04 * (dt / 16)
        p.rotation += 0.03 * (dt / 16)
        p.life -= 0.018 * (dt / 16)
        drawLeaf(ctx, p.x, p.y, p.size, p.rotation, Math.max(0, p.life) * 0.85)
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999,
    }} />
  )
}

// ── Main ──────────────────────────────────────────────────────────────
export default function ZhongxiHome() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeVoice, setActiveVoice] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const statsReveal = useReveal();

  useEffect(() => {
    setTimeout(() => setHeroReady(true), 100)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setActiveVoice(v => (v + 1) % VOICES.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", color: C.text, overflowX: 'hidden' }}>
      <SeedTrail />

      {/* ── CSS keyframes injected ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes drawLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { opacity: 0.4; }
          50%  { opacity: 1; }
          100% { opacity: 0.4; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .camp-card { transition: box-shadow 0.4s; }
        .camp-card:hover { box-shadow: 0 0 0 2px rgba(90,138,92,0.5), 0 24px 48px rgba(12,26,14,0.35) !important; }
        .camp-card:hover .camp-img { transform: scale(1.06) !important; }
        .camp-card:hover .camp-overlay { opacity: 1 !important; }
        .camp-card:hover .camp-label { color: #A8D4A8 !important; }
        .camp-card:hover .camp-title { color: #ffffff !important; }
        .nav-link:hover { color: ${C.accentLight} !important; }
        .btn-primary:hover { background: ${C.accentLight} !important; transform: translateY(-2px); }
        .btn-outline:hover { border-color: ${C.accentLight} !important; color: ${C.accentLight} !important; }
        .footer-link:hover { color: ${C.accentLight} !important; }
        .support-btn:hover { background: ${C.dark2} !important; transform: translateY(-2px); }
        @media (max-width: 900px) {
          .figma-nav-desktop { display: none !important; }
          .figma-nav-mobile-btn { display: block !important; }
          .figma-about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .figma-stats-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .figma-camp-grid { grid-template-columns: 1fr 1fr !important; }
          .figma-voices-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .figma-footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .figma-stats-grid > div { border-left: none !important; padding-left: 0 !important; }
        }
        @media (max-width: 560px) {
          .figma-camp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.5s, box-shadow 0.5s',
        background: scrolled || menuOpen ? 'rgba(242,245,238,0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
        boxShadow: scrolled || menuOpen ? '0 1px 0 rgba(45,74,47,0.1)' : 'none',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            {/* Circular seal logo */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16.5" stroke={scrolled || menuOpen ? C.accent : 'rgba(242,245,238,0.6)'} strokeWidth="0.8" />
              <circle cx="18" cy="18" r="13" stroke={scrolled || menuOpen ? C.accent : 'rgba(242,245,238,0.3)'} strokeWidth="0.4" strokeDasharray="2 3" />
              <text x="18" y="23" textAnchor="middle"
                style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 600, fill: scrolled || menuOpen ? C.accent : '#F2F5EE' }}>
                种
              </text>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: 17, color: scrolled || menuOpen ? C.text : '#F2F5EE', letterSpacing: '0.06em' }}>种戏</span>
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 300, fontSize: 9, color: scrolled || menuOpen ? C.textLight : 'rgba(242,245,238,0.5)', letterSpacing: '0.18em', marginTop: 2 }}>ZHONGXI</span>
            </div>
          </Link>
          <nav className="figma-nav-desktop" style={{ display: 'flex', gap: 36 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.label} href={l.href} className="nav-link" style={{
                fontWeight: 300, fontSize: 13, letterSpacing: '0.08em',
                color: scrolled || menuOpen ? C.textMid : 'rgba(242,245,238,0.8)',
                textDecoration: 'none', transition: 'color 0.25s',
              }}>{l.label}</Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="菜单"
            className="figma-nav-mobile-btn"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: scrolled || menuOpen ? C.text : '#F2F5EE',
            }}
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'currentColor', marginBottom: 6 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'currentColor' }} />
          </button>
        </div>
        {menuOpen && (
          <div style={{ padding: '8px 32px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 18, color: C.text, textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="hero" style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end',
        overflow: 'hidden',
        background: `linear-gradient(160deg, ${C.dark3} 0%, ${C.dark} 100%)`,
      }}>
        {/* Parallax decorative sprig left */}
        <div style={{
          position: 'absolute', left: -20, top: '50%',
          transform: `translateY(calc(-50% + ${scrollY * 0.15}px))`,
          opacity: 0.6, zIndex: 1,
          animation: 'float 6s ease-in-out infinite',
        }}>
          <SprigLarge color="rgba(90,138,92,0.18)" />
        </div>
        {/* Parallax decorative sprig right */}
        <div style={{
          position: 'absolute', right: -20, bottom: '10%',
          transform: `translateY(${scrollY * -0.1}px)`,
          opacity: 0.5, zIndex: 1,
          animation: 'float 8s ease-in-out infinite 2s',
        }}>
          <SprigLarge color="rgba(90,138,92,0.12)" />
        </div>

        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(90,138,92,0.04) 0px, rgba(90,138,92,0.04) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(90deg, rgba(90,138,92,0.04) 0px, rgba(90,138,92,0.04) 1px, transparent 1px, transparent 80px)
          `,
        }} />

        {/* Top accent line with draw animation */}
        {heroReady && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2, zIndex: 3,
            background: `linear-gradient(90deg, transparent, ${C.accent} 20%, ${C.accentLight} 50%, ${C.accent} 80%, transparent)`,
            transformOrigin: 'left',
            animation: 'drawLine 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
          }} />
        )}

        {/* Rotating circle watermark */}
        <div style={{
          position: 'absolute', right: 80, top: '20%', zIndex: 1,
          width: 280, height: 280,
          border: `1px solid rgba(90,138,92,0.12)`,
          borderRadius: '50%',
          animation: 'rotateSlow 40s linear infinite',
        }}>
          <div style={{
            position: 'absolute', inset: 20,
            border: `1px solid rgba(90,138,92,0.08)`,
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', inset: 40,
            border: `1px dashed rgba(90,138,92,0.06)`,
            borderRadius: '50%',
          }} />
          {/* Tick marks */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: 1, height: 12,
              background: 'rgba(90,138,92,0.2)',
              left: '50%',
              top: 0,
              transformOrigin: '50% 140px',
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
            }} />
          ))}
        </div>

        {/* Main content */}
        <div style={{ position: 'relative', zIndex: 4, maxWidth: 1200, margin: '0 auto', padding: '120px 32px 100px', width: '100%' }}>
          {/* Vertical label */}
          <div style={{
            position: 'absolute', left: -8, top: '30%',
            writingMode: 'vertical-rl', fontSize: 10, letterSpacing: '0.3em',
            color: 'rgba(139,184,140,0.3)', fontWeight: 300,
            opacity: heroReady ? 1 : 0,
            transition: 'opacity 1s 1.2s',
          }}>
            ZHONGXI · THEATER · EDUCATION · 2022
          </div>

          <div style={{ maxWidth: 700 }}>
            <h1 style={{
              fontFamily: "'Noto Serif SC', serif",
              fontWeight: 700,
              fontSize: 'clamp(72px, 11vw, 128px)',
              lineHeight: 0.95,
              color: '#F2F5EE',
              marginBottom: 8,
              letterSpacing: '-0.02em',
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? 'none' : 'translateY(32px)',
              transition: 'opacity 0.9s 0.4s, transform 0.9s 0.4s',
            }}>
              种戏
            </h1>

            {/* Animated underline */}
            <div style={{
              height: 2, width: '40%', marginBottom: 28,
              background: `linear-gradient(90deg, ${C.accent}, transparent)`,
              transformOrigin: 'left',
              transform: heroReady ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 1s 1s ease',
            }} />

            <p style={{
              fontFamily: "'Noto Serif SC', serif",
              fontWeight: 300, fontSize: 'clamp(18px, 2.5vw, 26px)',
              color: 'rgba(242,245,238,0.7)', marginBottom: 28,
              letterSpacing: '0.06em', lineHeight: 1.6,
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s 0.7s, transform 0.8s 0.7s',
            }}>
              种下心中戏剧的种子
            </p>

            <p style={{
              fontWeight: 300, fontSize: 15, lineHeight: 1.9,
              color: 'rgba(242,245,238,0.5)', marginBottom: 52, maxWidth: 480,
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s 0.9s, transform 0.8s 0.9s',
            }}>
              为零基础县域青年提供免费的戏剧教育与舞台实践，在共创与持续中练习表达，在观众面前被真正看见。
            </p>

            <div style={{
              display: 'flex', gap: 16, flexWrap: 'wrap',
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s 1.1s, transform 0.8s 1.1s',
            }}>
              <Link href="/about" className="btn-primary" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 36px',
                background: C.accent,
                color: '#F2F5EE',
                fontWeight: 500, fontSize: 14, letterSpacing: '0.1em',
                textDecoration: 'none', transition: 'background 0.25s, transform 0.25s',
              }}>
                了解种戏
              </Link>
              <Link href="/camps/2026-summer" className="btn-outline" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 36px',
                border: `1px solid rgba(90,138,92,0.45)`,
                color: C.accentLight,
                fontWeight: 300, fontSize: 14, letterSpacing: '0.1em',
                textDecoration: 'none', transition: 'border-color 0.25s, color 0.25s',
              }}>
                2026 夏令营进行中 →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 36, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          zIndex: 4,
          opacity: heroReady ? 1 : 0,
          transition: 'opacity 1s 1.5s',
        }}>
          <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${C.accent}, transparent)`, animation: 'scrollBounce 2s ease-in-out infinite' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(139,184,140,0.4)' }}>SCROLL</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: C.cream, padding: '120px 32px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative large character */}
        <div style={{
          position: 'absolute', right: -40, top: '10%',
          fontFamily: "'Noto Serif SC', serif",
          fontSize: 320, fontWeight: 700,
          color: 'rgba(90,138,92,0.04)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }}>
          剧
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="figma-about-grid">
            <Reveal>
              <div>
                <p style={{ fontSize: 11, letterSpacing: '0.25em', color: C.accent, marginBottom: 20, fontWeight: 500 }}>ABOUT ZHONGXI</p>
                <h2 style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontWeight: 600, fontSize: 'clamp(40px, 5vw, 60px)',
                  lineHeight: 1.1, color: C.text, marginBottom: 32,
                }}>
                  关于<br />种戏
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.95, color: C.textMid, fontWeight: 300, maxWidth: 400 }}>
                  戏剧为年轻人提供的，不只是一次演出机会，更是一段从「尝试表达」到「被他人听见」的成长旅程。
                </p>
                {/* Decorative sprig */}
                <div style={{ marginTop: 48, opacity: 0.6 }}>
                  <Sprig color={`rgba(90,138,92,0.4)`} size={80} />
                </div>
              </div>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingTop: 8 }}>
              {[
                { num: '01', title: '零门槛', desc: '为从未接触过戏剧的年轻人打开大门。导师不设门槛，属于每一个愿意尝试的人。' },
                { num: '02', title: '纯公益', desc: '导师志愿，学员全程免费：食宿、交通、物资与演出费用由公益资金承担，让戏剧回归教育本质。' },
                { num: '03', title: '聚焦县城', desc: '服务湖南、广西等PEER县域青年，把有限的公益资源，投向最需要被看见的人。' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div style={{
                    padding: '36px 0',
                    borderTop: `1px solid rgba(90,138,92,0.15)`,
                    display: 'grid', gridTemplateColumns: '52px 1fr', gap: 24,
                  }}>
                    <span style={{
                      fontFamily: "'Noto Serif SC', serif",
                      fontWeight: 300, fontSize: 30, color: C.accentPale, lineHeight: 1,
                    }}>{item.num}</span>
                    <div>
                      <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: 18, color: C.text, marginBottom: 10 }}>{item.title}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.85, color: C.textLight, fontWeight: 300 }}>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <div style={{ borderTop: `1px solid rgba(90,138,92,0.15)` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section style={{
        background: `linear-gradient(150deg, ${C.dark3} 0%, ${C.dark} 60%, ${C.dark2} 100%)`,
        padding: '120px 32px', position: 'relative', overflow: 'hidden',
      }}>
        {/* Animated rings */}
        {[240, 400, 560].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            right: -size / 3, top: '50%',
            width: size, height: size,
            marginTop: -size / 2,
            border: `1px solid rgba(90,138,92,${0.06 - i * 0.015})`,
            borderRadius: '50%',
            animation: `rotateSlow ${30 + i * 15}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
          }} />
        ))}

        <div ref={statsReveal.ref} style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{
            opacity: statsReveal.visible ? 1 : 0,
            transform: statsReveal.visible ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.7s, transform 0.7s',
          }}>
            <p style={{ fontSize: 11, letterSpacing: '0.25em', color: C.accentLight, marginBottom: 16, fontWeight: 500 }}>IMPACT</p>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: 'clamp(36px, 5vw, 52px)', color: '#F2F5EE', marginBottom: 16 }}>影响力</h2>
            <p style={{ fontSize: 15, color: 'rgba(242,245,238,0.45)', fontWeight: 300, marginBottom: 80 }}>
              种子正在发芽：每一届营期，都是一次被认真对待的第一次。
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="figma-stats-grid">
            {[
              { num: 50, suffix: '+', label: '累计学员', sub: '三届近五十名伙伴' },
              { num: 95, suffix: '%+', label: '零基础比例', sub: '第一次站上舞台' },
              { num: 8, suffix: '+', label: '演出场次', sub: '乡村 · 古城 · 城市剧演' },
              { num: 4, suffix: '', label: '营期届数', sub: '每届营均持续生长' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '0 0 0 40px',
                borderLeft: i === 0 ? 'none' : `1px solid rgba(90,138,92,0.15)`,
                paddingLeft: i === 0 ? 0 : 40,
              }}>
                <AnimStat {...s} delay={i * 150} active={statsReveal.visible} />
              </div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <div style={{
            marginTop: 80,
            height: 1,
            background: `linear-gradient(90deg, ${C.accent}, rgba(90,138,92,0.1))`,
            transform: statsReveal.visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 1.2s 0.5s ease',
          }} />
        </div>
      </section>

      {/* ── ARCHIVE ── */}
      <section id="archive" style={{ background: C.bgWarm, padding: '120px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: -60, bottom: -40,
          opacity: 0.5,
          animation: 'float 10s ease-in-out infinite 1s',
        }}>
          <SprigLarge color="rgba(90,138,92,0.1)" />
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
            <Reveal>
              <div>
                <p style={{ fontSize: 11, letterSpacing: '0.25em', color: C.accent, marginBottom: 16, fontWeight: 500 }}>ARCHIVE</p>
                <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: 'clamp(36px, 5vw, 52px)', color: C.text, lineHeight: 1.1 }}>历届营期</h2>
              </div>
            </Reveal>
            <Reveal delay={200} style={{ maxWidth: 300, textAlign: 'right' }}>
              <p style={{ fontSize: 14, color: C.textLight, fontWeight: 300, lineHeight: 1.8 }}>
                从广南侗寨到黔阳古城，再到嘉兴舞台——每一届都值得被完整记住。
              </p>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="figma-camp-grid">
            {CAMPS.map((camp, i) => (
              <Reveal key={camp.slug} delay={i * 100}>
                <Link href={`/camps/${camp.slug}`} className="camp-card" style={{
                  position: 'relative', aspectRatio: '3/4', overflow: 'hidden',
                  cursor: 'pointer', background: camp.shade, display: 'block', textDecoration: 'none',
                }}>
                  <div className="camp-img" style={{
                    position: 'absolute', inset: 0,
                    transition: 'transform 0.7s ease',
                  }}>
                    <Image src={camp.cover} alt={camp.title} fill className="object-cover" sizes="25vw" />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(160deg, rgba(12,26,14,0.35) 0%, rgba(12,26,14,0.75) 100%)`,
                    }} />
                  </div>

                  {/* Sprig decoration */}
                  <div style={{ position: 'absolute', top: 16, right: 16, opacity: 0.4 }}>
                    <Sprig color="rgba(139,184,140,0.5)" size={48} />
                  </div>

                  {/* Tag */}
                  <div style={{
                    position: 'absolute', top: 16, left: 16,
                    padding: '4px 12px',
                    background: camp.tag === '进行中' ? C.accent : 'rgba(242,245,238,0.1)',
                    color: camp.tag === '进行中' ? '#F2F5EE' : 'rgba(242,245,238,0.6)',
                    fontSize: 11, letterSpacing: '0.1em', fontWeight: 500,
                  }}>
                    {camp.tag}
                  </div>

                  {/* Hover overlay — vivid sage green wash */}
                  <div className="camp-overlay" style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(160deg, rgba(90,138,92,0.38) 0%, rgba(30,53,32,0.55) 100%)`,
                    opacity: 0, transition: 'opacity 0.4s ease',
                  }} />

                  {/* Content */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: 24,
                    background: 'linear-gradient(to top, rgba(12,26,14,0.95) 0%, transparent 100%)',
                  }}>
                    <p className="camp-label" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 300, fontSize: 11, color: C.accentLight, letterSpacing: '0.12em', marginBottom: 8, transition: 'color 0.4s' }}>{camp.year}</p>
                    <h3 className="camp-title" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: 16, color: '#F2F5EE', lineHeight: 1.45, marginBottom: 6, transition: 'color 0.4s' }}>{camp.title}</h3>
                    <p style={{ fontSize: 12, color: 'rgba(242,245,238,0.45)', fontWeight: 300 }}>{camp.location}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div style={{ marginTop: 48, textAlign: 'center' }}>
              <Link href="/camps" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontSize: 13, letterSpacing: '0.12em', color: C.textLight,
                textDecoration: 'none',
                borderBottom: `1px solid rgba(90,138,92,0.25)`, paddingBottom: 3,
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
                onMouseLeave={e => (e.currentTarget.style.color = C.textLight)}
              >
                进入营期归档 →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VOICES ── */}
      <section id="voices" style={{ background: C.cream, padding: '120px 32px', position: 'relative', overflow: 'hidden' }}>
        {/* Watermark */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Noto Serif SC', serif",
          fontSize: 220, fontWeight: 700,
          color: 'rgba(90,138,92,0.03)',
          whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none',
        }}>
          声音与改变
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="figma-voices-grid">
            {/* Left decorative panel */}
            <Reveal>
              <div style={{
                width: '100%', aspectRatio: '4/5',
                background: `linear-gradient(160deg, ${C.dark3}, ${C.dark})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Grid */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(90,138,92,0.06) 0px, rgba(90,138,92,0.06) 1px, transparent 1px, transparent 48px),
                    repeating-linear-gradient(90deg, rgba(90,138,92,0.06) 0px, rgba(90,138,92,0.06) 1px, transparent 1px, transparent 48px)
                  `,
                }} />
                {/* Large decorative Chinese char */}
                <span style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontWeight: 700,
                  fontSize: 'clamp(100px, 16vw, 180px)',
                  color: 'rgba(90,138,92,0.12)',
                  lineHeight: 1, userSelect: 'none',
                  animation: 'shimmer 4s ease-in-out infinite',
                }}>
                  声
                </span>
                {/* Accent lines */}
                <div style={{
                  position: 'absolute', bottom: 32, left: 32, right: 32,
                  height: 1,
                  background: `linear-gradient(90deg, ${C.accent}, transparent)`,
                }} />
                <div style={{
                  position: 'absolute', top: 32, left: 32,
                  width: 1, height: 60,
                  background: `linear-gradient(to bottom, ${C.accent}, transparent)`,
                }} />
                <div style={{
                  position: 'absolute', top: 32, left: 32,
                  width: 60, height: 1,
                  background: `linear-gradient(to right, ${C.accent}, transparent)`,
                }} />
              </div>
            </Reveal>

            {/* Right quotes */}
            <div>
              <Reveal>
                <p style={{ fontSize: 11, letterSpacing: '0.25em', color: C.accent, marginBottom: 48, fontWeight: 500 }}>VOICES</p>
              </Reveal>

              <div style={{ position: 'relative', minHeight: 220 }}>
                {VOICES.map((v, i) => (
                  <div key={i} style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: i === 0 ? undefined : 0,
                    opacity: activeVoice === i ? 1 : 0,
                    transform: activeVoice === i ? 'translateY(0)' : 'translateY(12px)',
                    transition: 'opacity 0.9s ease, transform 0.9s ease',
                    pointerEvents: activeVoice === i ? 'auto' : 'none',
                  }}>
                    {/* Opening quote mark */}
                    <div style={{
                      fontFamily: "'Noto Serif SC', serif",
                      fontSize: 72, lineHeight: 0.6,
                      color: `rgba(90,138,92,0.2)`,
                      marginBottom: 16, paddingLeft: 24,
                    }}>"</div>
                    <blockquote style={{
                      fontFamily: "'Noto Serif SC', serif",
                      fontWeight: 400, fontSize: 'clamp(17px, 2.2vw, 22px)',
                      lineHeight: 1.75, color: C.text, marginBottom: 28,
                      borderLeft: `3px solid ${C.accent}`,
                      paddingLeft: 24,
                    }}>
                      {v.quote}
                    </blockquote>
                    <p style={{ fontSize: 13, color: C.textLight, fontWeight: 300, letterSpacing: '0.05em', paddingLeft: 24 }}>
                      — {v.author}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div style={{ display: 'flex', gap: 8, marginTop: 52, paddingLeft: 24 }}>
                {VOICES.map((_, i) => (
                  <button key={i} onClick={() => setActiveVoice(i)} style={{
                    width: activeVoice === i ? 32 : 8,
                    height: 2,
                    background: activeVoice === i ? C.accent : `rgba(90,138,92,0.25)`,
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'width 0.4s, background 0.4s',
                  }} />
                ))}
              </div>

              <div style={{ marginTop: 44, paddingLeft: 24 }}>
                <Link href="/stories" style={{
                  fontSize: 13, color: C.textLight, textDecoration: 'none',
                  borderBottom: `1px solid rgba(90,138,92,0.25)`, paddingBottom: 3,
                  letterSpacing: '0.1em', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.textLight)}
                >
                  更多声音与改变 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT CTA ── */}
      <section id="support" style={{
        background: `linear-gradient(135deg, ${C.accent} 0%, ${C.mid} 100%)`,
        padding: '100px 32px', position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative rings */}
        <div style={{
          position: 'absolute', left: -80, top: '50%', transform: 'translateY(-50%)',
          width: 400, height: 400,
          border: '1px solid rgba(242,245,238,0.1)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', left: -40, top: '50%', transform: 'translateY(-50%)',
          width: 280, height: 280,
          border: '1px solid rgba(242,245,238,0.07)',
          borderRadius: '50%',
        }} />
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(242,245,238,0.03) 0px, rgba(242,245,238,0.03) 1px, transparent 1px, transparent 40px)',
        }} />

        <Reveal>
          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 40 }}>
            <div>
              <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: 'clamp(30px, 4vw, 48px)', color: '#F2F5EE', marginBottom: 14 }}>
                参与种戏
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(242,245,238,0.65)', fontWeight: 300, maxWidth: 480, lineHeight: 1.8 }}>
                无论是成为导师志愿者、公益捐助者，还是分享种戏的故事——你的参与，让更多种子有机会发芽。
              </p>
            </div>
            <Link href="/join" className="support-btn" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '18px 40px',
              background: C.dark,
              color: C.accentLight,
              fontWeight: 500, fontSize: 14, letterSpacing: '0.12em',
              textDecoration: 'none', transition: 'background 0.25s, transform 0.25s',
            }}>
              了解如何支持 →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.dark, padding: '80px 32px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 64, marginBottom: 64, paddingBottom: 56, borderBottom: `1px solid rgba(90,138,92,0.12)` }} className="figma-footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Sprig color="rgba(139,184,140,0.4)" size={32} />
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: 22, color: '#F2F5EE' }}>种戏</span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(242,245,238,0.4)', fontWeight: 300, lineHeight: 1.9, maxWidth: 280 }}>
                种下心中戏剧的种子<br />
                零门槛 · 纯公益 · 聚焦县城
              </p>
            </div>
            <div>
              <p style={{ fontSize: 11, letterSpacing: '0.2em', color: C.accentLight, marginBottom: 20, fontWeight: 500 }}>导航</p>
              {NAV_LINKS.map(l => (
                <Link key={l.label} href={l.href} className="footer-link" style={{
                  display: 'block', fontSize: 13, color: 'rgba(242,245,238,0.45)',
                  textDecoration: 'none', marginBottom: 12, fontWeight: 300, transition: 'color 0.2s',
                }}>{l.label}</Link>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, letterSpacing: '0.2em', color: C.accentLight, marginBottom: 20, fontWeight: 500 }}>联系</p>
              <p style={{ fontSize: 13, color: 'rgba(242,245,238,0.45)', fontWeight: 300, lineHeight: 1.9 }}>
                微信公众号<br />
                PEER毅恒挚友<br /><br />
                <span style={{ fontSize: 12, color: 'rgba(242,245,238,0.25)' }}>
                  关注公众号并回复「种戏」了解详情
                </span>
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: 12, color: 'rgba(242,245,238,0.2)', fontWeight: 300 }}>
              © 2025 种戏 · 种下心中戏剧的种子
            </p>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 24, height: 1, background: `rgba(90,138,92,0.3)` }} />
              <Sprig color="rgba(90,138,92,0.2)" size={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
