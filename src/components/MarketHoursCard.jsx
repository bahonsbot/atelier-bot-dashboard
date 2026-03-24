import React from 'react'

const exchanges = [
  { name: 'London', status: 'Closed' },
  { name: 'Tokyo', status: 'Opening Soon' },
  { name: 'Sydney', status: 'Open' },
  { name: 'Next Session', status: 'Frankfurt', highlight: true },
]

export default function MarketHoursCard() {
  return (
    <div className="bg-surface-container-low rounded-xl overflow-hidden relative min-h-[240px]">
      <img
        alt="Market backdrop"
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMajve7u5ts2FS4KdnDiIkjJ6Qf5sH-0O65R2OkA99iTrFuu7oTbM9VrFFekUbi6qUOTZUTEBbeYlKq2Pe7ikyzIjCnZ3KwLXK07XaKlTPzfnOtXIcKPCymx5Zl53A-o0Pd9pYChgyB7OIhEpNZDVRx9PUHTqg52Z9hHp5uZcrTUjI9N6WC1sPTYZdzIkOAFy05Du6a5eMzlEQb6GeWhhd79JQxqfhVt9vUy_7tw87yqMHQgphuMQNo7cDKs6H6Vi96_SkFeGZiQE"
      />

      <div className="relative p-8 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Global Exchange
            </span>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold tracking-tight">NYSE / NASDAQ</h3>
              <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider">
                Market Open
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Closing In
            </span>
            <p className="text-2xl font-mono font-bold text-on-background">04:22:15</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {exchanges.map((ex) => (
            <div
              key={ex.name}
              className="bg-surface-container-lowest/60 backdrop-blur-md p-4 rounded-lg border border-white/20"
            >
              <p className="text-[9px] font-bold uppercase text-on-surface-variant">{ex.name}</p>
              <p
                className={`text-sm font-bold ${
                  ex.highlight ? 'text-primary' : 'text-on-surface'
                }`}
              >
                {ex.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
