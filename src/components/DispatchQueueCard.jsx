import React from 'react'

const tasks = [
  {
    icon: 'data_exploration',
    title: 'Scanning Volatility',
    sub: 'BTC/USDT 15m Frame',
    active: true,
  },
  {
    icon: 'execution',
    title: 'Execute Long Limit',
    sub: 'Pending Signal...',
    active: false,
  },
]

export default function DispatchQueueCard() {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/5">
      <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface mb-6">Dispatch Queue</h4>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.title} className={`flex items-center gap-4 ${!task.active ? 'opacity-50' : ''}`}>
            <div
              className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                task.active ? 'bg-primary/5 text-primary' : 'bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined">{task.icon}</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold">{task.title}</p>
              <p className="text-[10px] text-on-surface-variant">{task.sub}</p>
            </div>
          </div>
        ))}

        {/* Health Metrics */}
        <div className="mt-4 pt-4 border-t border-outline-variant/10">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-2">Health Metrics</p>
          <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[88%]"></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[9px] font-bold">Latency</span>
            <span className="text-[9px] font-bold">12ms</span>
          </div>
        </div>
      </div>
    </div>
  )
}
