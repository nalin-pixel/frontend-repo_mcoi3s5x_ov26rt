import React from 'react';
import { Home, Gamepad2, Brain, Timer, User } from 'lucide-react';

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Games', icon: Gamepad2 },
  { label: 'AI Mentor', icon: Brain },
  { label: 'Focus', icon: Timer },
  { label: 'Profile', icon: User },
];

export default function Navigation() {
  return (
    <>
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-20 flex-col items-center gap-4 border-r border-white/10 bg-[#0D1117]/80 backdrop-blur-xl z-20">
        <div className="mt-6 text-teal-300 font-semibold">EG</div>
        <nav className="mt-6 flex flex-col gap-2">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              aria-label={label}
              className="group relative p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <Icon className="h-5 w-5" />
              <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-white/10 px-2 py-1 text-xs text-gray-200 opacity-0 shadow-lg backdrop-blur-md transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </button>
          ))}
        </nav>
        <div className="mt-auto mb-6 text-xs text-gray-500">v1.0</div>
      </aside>

      {/* Bottom Nav (mobile) */}
      <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-30 flex w-[92%] justify-around rounded-2xl border border-white/10 bg-[#0D1117]/80 py-2 backdrop-blur-xl">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            aria-label={label}
            className="flex flex-col items-center gap-1 px-3 py-1 text-gray-400 hover:text-white active:scale-95 transition-transform"
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px]">{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
