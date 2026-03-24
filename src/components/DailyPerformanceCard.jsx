import React from 'react'

const bars = [
  { h: '20%', color: 'bg-surface-container' },
  { h: '35%', color: 'bg-surface-container' },
  { h: '30%', color: 'bg-surface-container' },
  { h: '55%', color: 'bg-secondary/20' },
  { h: '45%', color: 'bg-secondary/40' },
  { h: '70%', color: 'bg-secondary/60' },
  { h: '90%', color: 'bg-secondary' },
  { h: '80%', color: 'bg-secondary/80' },
  { h: '65%', color: 'bg-secondary/60' },
  { h: '100%', color: 'bg-secondary' },
]

export default function DailyPerformanceCard() {
  return (
    <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/5">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface">Daily Performance</h4>
        <span className="text-xs font-medium text-secondary flex items-center gap-1">
          <span className="material-symbols-outlined text-xs">trending_up</span>
          +4.2% Today
        </span>
      </div>

      <div className="flex items-end gap-4 h-32">
        {/* Sparkline */}
        <div className="flex-1 flex items-end gap-1 h-full">
          {bars.map((bar, i) => (
            <div key={i} className={`w-full ${bar.h} rounded-t-sm ${bar.color}`}></div>
          ))}
        </div>

        {/* Metrics */}
        <div className="w-32 space-y-4">
          <div>
            <p className="text-[10px] font-semibold text-on-surface-variant uppercase">Win Rate</p>
            <p className="text-xl font-bold">72.4%</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-on-surface-variant uppercase">Net Profit</p>
            <p className="text-xl font-bold text-secondary">+$1,420</p>
          </div>
        </div>
      </div>
    </div>
  )
}
