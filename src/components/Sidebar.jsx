import React from 'react'

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', active: true },
  { icon: 'smart_toy', label: 'Active Bots' },
  { icon: 'analytics', label: 'Backtesting' },
  { icon: 'receipt_long', label: 'History' },
  { icon: 'gpp_maybe', label: 'Risk Engine' },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 w-64 h-screen flex-col py-8 px-4 bg-surface-container-low z-40 border-r-0">
      {/* Logo */}
      <div className="mb-10 px-4">
        <h1 className="text-lg font-black text-on-background">Atelier Pro</h1>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
          Active Engine: v4.2
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-150 active:translate-x-1 ${
              item.active
                ? 'bg-white text-primary shadow-sm dark:bg-inverse-surface dark:text-primary-fixed'
                : 'text-on-surface-variant hover:bg-surface-bright'
            }`}
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <span className="text-sm font-semibold uppercase tracking-widest">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-8 border-t border-outline-variant/10">
        <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white rounded-xl py-3 px-4 font-semibold text-sm mb-6 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
          New Strategy
        </button>
        <div className="space-y-1">
          {[
            { icon: 'help_outline', label: 'Support' },
            { icon: 'logout', label: 'Sign Out' },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-bright rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              <span className="text-xs font-semibold uppercase tracking-widest">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
