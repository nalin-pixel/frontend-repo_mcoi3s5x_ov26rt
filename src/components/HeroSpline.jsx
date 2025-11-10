import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full h-[52vh] md:h-[58vh] lg:h-[64vh] overflow-hidden rounded-3xl border border-white/10 bg-[#0D1117]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/20 to-[#0D1117]" />
      <div className="relative z-10 p-6 md:p-8 lg:p-10 h-full flex flex-col justify-end">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#E6E6E6]"><span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300">EduGame</span> + <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">AI Mentor</span></h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-[#8B949E]">A premium learning platform that blends immersive games, a personalized AI mentor, and a focus environment—all in a sleek, sci‑fi dashboard.</p>
          <div className="mt-5 flex gap-3">
            <button className="rounded-xl bg-teal-400/90 hover:bg-teal-300 text-[#0D1117] font-semibold px-4 py-2 transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-300">Review Today’s Quests</button>
            <button className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-gray-200 px-4 py-2 transition-colors active:scale-95">Open AI Hub</button>
          </div>
        </div>
      </div>
    </section>
  );
}
