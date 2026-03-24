import React from 'react'

const navItems = [
  { icon: 'dashboard', label: 'Home', active: true },
  { icon: 'smart_toy', label: 'Bots' },
  { icon: 'analytics', label: 'Stats' },
  { icon: 'settings', label: 'Config' },
]

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-outline-variant/10 h-16 flex items-center justify-around z-50">
      {navItems.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`flex flex-col items-center gap-1 ${
            item.active ? 'text-primary' : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] font-bold uppercase">{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
