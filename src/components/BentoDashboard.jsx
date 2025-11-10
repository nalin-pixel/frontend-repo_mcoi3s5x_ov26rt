import React from 'react';
import { Flame, Coins, Gem, Brain, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl ${className}`}
    >
      {/* subtle inner border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
      {children}
    </motion.div>
  );
}

export default function BentoDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* Profile & Streak */}
      <GlassCard className="p-5 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,230,0.25),transparent_60%)] blur-2xl" />
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-[#8B949E]">Current Streak</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-extrabold text-[#E6E6E6] tracking-tight">32</span>
              <Flame className="text-orange-400" />
              <span className="text-sm text-[#8B949E]">days</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-2 py-1 text-yellow-200">
              <Coins className="h-4 w-4" />
              <span className="text-xs font-medium">1,240</span>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-violet-400/30 bg-violet-400/10 px-2 py-1 text-violet-200">
              <Gem className="h-4 w-4" />
              <span className="text-xs font-medium">42</span>
            </div>
          </div>
        </div>
        <div className="mt-6 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300" />
        </div>
      </GlassCard>

      {/* AI Mentor Hub */}
      <GlassCard className="p-5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-violet-500/20" />
            <div className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
              <Brain className="h-5 w-5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#E6E6E6]">AI Mentor: Personalized Plan</h3>
            <p className="text-sm text-[#8B949E]">2 new hints and 1 project suggestion ready.</p>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="rounded-xl bg-teal-400/90 hover:bg-teal-300 text-[#0D1117] font-semibold px-4 py-2 transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-300">Review Today’s Quests</button>
          <button className="rounded-xl border border-violet-400/40 bg-violet-500/10 hover:bg-violet-500/20 text-violet-200 px-4 py-2 transition-colors active:scale-95">Open Mentor Hub</button>
        </div>
      </GlassCard>

      {/* Quick Launch Games */}
      <GlassCard className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#E6E6E6]">Quick Launch Games</h3>
          <Gamepad2 className="text-cyan-300" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Code‑Kata', icon: '<>' },
            { label: 'Recall Arena', icon: '⚡' },
            { label: 'Math Duel', icon: '+/−' },
          ].map((g) => (
            <button
              key={g.label}
              className="group rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors active:scale-95"
            >
              <div className="mx-auto mb-2 h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-teal-300/20 to-cyan-300/10 text-teal-300 group-hover:from-teal-300/30 group-hover:to-cyan-300/20">
                <span className="font-mono text-lg">{g.icon}</span>
              </div>
              {g.label}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Focus Environment */}
      <GlassCard className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#E6E6E6]">Focus Session</h3>
          <span className="text-xs text-[#8B949E]">Pomodoro • 25:00</span>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="relative h-20 w-20">
            <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
              <defs>
                <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E6E6" />
                  <stop offset="100%" stopColor="#FF8A00" />
                </linearGradient>
              </defs>
              <circle cx="18" cy="18" r="16" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
              <circle cx="18" cy="18" r="16" stroke="url(#timerGrad)" strokeWidth="4" strokeLinecap="round" strokeDasharray="100 100" strokeDashoffset="25" fill="none" />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-[#E6E6E6] font-semibold">25:00</div>
          </div>
          <div className="flex-1">
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-2/5 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400" />
            </div>
            <div className="mt-3 flex gap-2">
              <button className="rounded-lg bg-teal-400/90 hover:bg-teal-300 text-[#0D1117] px-3 py-1 text-sm font-medium active:scale-95">Start</button>
              <button className="rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1 text-sm text-gray-200 active:scale-95">Sound: Lo‑Fi</button>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
