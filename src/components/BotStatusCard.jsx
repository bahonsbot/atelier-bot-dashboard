import React from 'react'

export default function BotStatusCard() {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between shadow-sm border border-outline-variant/5">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">
            System Pulse
          </span>
          <h2 className="text-3xl font-black tracking-tighter text-on-background">Atelier-01</h2>
        </div>
        <div className="relative flex items-center justify-center h-12 w-12">
          <div className="absolute h-full w-full rounded-full bg-secondary/10 animate-ping"></div>
          <div className="relative h-4 w-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(0,110,40,0.6)]"></div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight text-secondary">ACTIVE</span>
          <span className="text-sm font-medium text-on-surface-variant">Running for 14h 22m</span>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 py-2 px-4 rounded-lg bg-surface-container-low text-on-surface text-xs font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors">
            Pause Engine
          </button>
          <button className="py-2 px-3 rounded-lg bg-surface-container-low text-error hover:bg-error-container/20 transition-colors">
            <span className="material-symbols-outlined text-sm">stop</span>
          </button>
        </div>
      </div>
    </div>
  )
}
