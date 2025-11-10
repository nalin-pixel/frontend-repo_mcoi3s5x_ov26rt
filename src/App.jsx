import React from 'react';
import Navigation from './components/Navigation';
import HeroSpline from './components/HeroSpline';
import BentoDashboard from './components/BentoDashboard';
import AILabeledCard from './components/AILabeledCard';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6E6E6] font-inter antialiased">
      {/* Subtle parallax background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(0,230,230,0.08),transparent),radial-gradient(800px_400px_at_80%_120%,rgba(127,0,255,0.08),transparent)]" />

      <Navigation />

      <main className="relative z-10 md:pl-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="py-5 md:py-8">
          <HeroSpline />
        </div>

        <section className="space-y-6 md:space-y-8 pb-20 md:pb-10">
          <BentoDashboard />

          {/* AI Mentor callout with gradient outline to signal AI content */}
          <AILabeledCard title="Mentor Tip: Master Two-Pointer Patterns">
            Practice sliding window and two-pointer techniques today. Start with problems that involve subarray sums and string windows. I’ve queued a mini‑quest for you in Code‑Kata.
          </AILabeledCard>
        </section>
      </main>
    </div>
  );
}
