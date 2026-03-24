import React from 'react'

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-30 bg-background/70 backdrop-blur-xl h-16 flex justify-between items-center px-8 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-4">
          {[
            { label: 'Market', active: true },
            { label: 'Portfolio', active: false },
            { label: 'Signals', active: false },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className={`tracking-tight text-sm font-medium transition-colors duration-200 pb-1 ${
                item.active
                  ? 'text-on-background border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:text-primary active:scale-95 transition-all">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-on-surface-variant hover:text-primary active:scale-95 transition-all">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/20">
          <img
            alt="User profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjGXkScJtNrSTxYd3DCiDVwwAoUdrvwBEIts8B_QEq-YSGne99L5Ty-knGkiekjau1gp4KZRhG5AOsgBH-N2Fawf81InlE-FijSm2ezS76j0-8fh2_QXEo8eHnnRRxN9zmPEwDKjymGfsEzPb7hR4t0Ybor5SV0esZDYnZkrVhpoAloFVF4i-sb9u_TjKXVvpw2uCyYIpzY9DhiVM6q_8lETdmZNp0w6_ktIe-YyL237r47Alnn6KkagHC27XR8wI6Tq3R9SqudKo"
          />
        </div>
      </div>
    </header>
  )
}
