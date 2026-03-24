import React from 'react'

const alerts = [
  {
    type: 'exposure',
    variant: 'tertiary',
    icon: 'warning',
    title: 'Exposure Limit',
    message: 'Total capital at risk exceeds 15% threshold.',
    borderColor: 'border-tertiary',
    bgColor: 'bg-tertiary/5',
    iconColor: 'text-tertiary',
    labelColor: 'text-tertiary',
  },
  {
    type: 'volatility',
    variant: 'amber',
    icon: 'bolt',
    title: 'Volatility Peak',
    message: 'High market noise detected in ETH pairs.',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-500/5',
    iconColor: 'text-amber-600',
    labelColor: 'text-amber-600',
  },
]

export default function RiskAlertsCard() {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/5">
      <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface mb-6">Risk Alerts</h4>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.type}
            className={`p-3 rounded-lg ${alert.bgColor} border-l-4 ${alert.borderColor}`}
          >
            <div className={`flex items-center gap-2 ${alert.iconColor} mb-1`}>
              <span className="material-symbols-outlined text-sm">{alert.icon}</span>
              <p className="text-[10px] font-bold uppercase">{alert.title}</p>
            </div>
            <p className="text-[11px] text-on-surface leading-tight">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
