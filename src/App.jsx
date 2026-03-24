import React from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import BotStatusCard from './components/BotStatusCard'
import MarketHoursCard from './components/MarketHoursCard'
import DailyPerformanceCard from './components/DailyPerformanceCard'
import DispatchQueueCard from './components/DispatchQueueCard'
import RiskAlertsCard from './components/RiskAlertsCard'
import PositionsTable from './components/PositionsTable'
import BottomNav from './components/BottomNav'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="md:ml-64 min-h-screen">
        <TopBar />

        {/* Dashboard Canvas */}
        <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto space-y-8">
          {/* Hero / Bot State & Market Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <BotStatusCard />
            </div>
            <div className="lg:col-span-8">
              <MarketHoursCard />
            </div>
          </div>

          {/* Bento Section: Metrics & Reports */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <DailyPerformanceCard />
            <DispatchQueueCard />
            <RiskAlertsCard />
          </div>

          {/* Positions Table */}
          <PositionsTable />
        </div>
      </main>

      {/* Mobile FAB */}
      <button className="fixed bottom-24 right-8 h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-white shadow-xl shadow-primary/40 flex items-center justify-center hover:scale-105 active:scale-95 transition-all md:bottom-8 z-40">
        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
      </button>

      <BottomNav />
    </div>
  )
}
