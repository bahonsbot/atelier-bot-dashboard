import React from 'react'

const positions = [
  {
    asset: 'BTC/USDT',
    exchange: 'Binance Spot',
    initial: 'B',
    type: 'Long',
    typeColor: 'bg-secondary/10 text-secondary',
    entryPrice: '$64,120.50',
    currentPrice: '$65,244.12',
    size: '0.45 BTC',
    pnl: '+$505.62',
    pnlPct: '+1.75%',
    pnlColor: 'text-secondary',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
  },
  {
    asset: 'ETH/USDT',
    exchange: 'Coinbase Pro',
    initial: 'E',
    type: 'Short',
    typeColor: 'bg-tertiary/10 text-tertiary',
    entryPrice: '$3,450.20',
    currentPrice: '$3,475.90',
    size: '12.00 ETH',
    pnl: '-$308.40',
    pnlPct: '-0.74%',
    pnlColor: 'text-tertiary',
    bgColor: 'bg-on-surface/5',
    textColor: 'text-on-surface',
  },
  {
    asset: 'SOL/USDT',
    exchange: 'Kraken',
    initial: 'S',
    type: 'Long',
    typeColor: 'bg-secondary/10 text-secondary',
    entryPrice: '$142.10',
    currentPrice: '$145.55',
    size: '150.0 SOL',
    pnl: '+$517.50',
    pnlPct: '+2.42%',
    pnlColor: 'text-secondary',
    bgColor: 'bg-secondary/10',
    textColor: 'text-secondary',
  },
]

export default function PositionsTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/5 overflow-hidden">
      <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
        <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface">Active Positions</h4>
        <div className="flex gap-2">
          <button className="text-xs font-bold px-3 py-1.5 rounded-md bg-surface-container-low hover:bg-surface-container-high transition-all">
            Export CSV
          </button>
          <button className="text-xs font-bold px-3 py-1.5 rounded-md bg-surface-container-low hover:bg-surface-container-high transition-all">
            Close All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container-low/30">
              <th className="px-6 py-4">Asset</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4 text-right">Entry Price</th>
              <th className="px-6 py-4 text-right">Current Price</th>
              <th className="px-6 py-4 text-right">Size</th>
              <th className="px-6 py-4 text-right">P&amp;L</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {positions.map((pos) => (
              <tr
                key={pos.asset}
                className="hover:bg-surface-container-low/20 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${pos.bgColor} ${pos.textColor}`}
                    >
                      {pos.initial}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{pos.asset}</p>
                      <p className="text-[10px] text-on-surface-variant">{pos.exchange}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${pos.typeColor}`}>
                    {pos.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">{pos.entryPrice}</td>
                <td className="px-6 py-4 text-right text-sm font-medium">{pos.currentPrice}</td>
                <td className="px-6 py-4 text-right text-sm font-medium">{pos.size}</td>
                <td className="px-6 py-4 text-right">
                  <p className={`text-sm font-bold ${pos.pnlColor}`}>{pos.pnl}</p>
                  <p className={`text-[10px] font-medium ${pos.pnlColor}`}>{pos.pnlPct}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
