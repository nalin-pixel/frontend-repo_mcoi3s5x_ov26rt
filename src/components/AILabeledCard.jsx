import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AILabeledCard({ title, children }) {
  return (
    <div className="relative rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl">
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[linear-gradient(135deg,rgba(127,0,255,0.35),rgba(0,230,230,0.35))] opacity-30" />
      <div className="relative">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-2 py-1 text-[11px] font-medium text-violet-200">
          <Sparkles className="h-3.5 w-3.5" /> AI‑Generated
        </div>
        <h3 className="text-[#E6E6E6] font-semibold">{title}</h3>
        <div className="mt-2 text-sm text-[#8B949E]">{children}</div>
      </div>
    </div>
  );
}
