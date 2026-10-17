import { useState } from 'react'
import { Logo } from './components/Logo'
import { Home } from './components/Home'
import { Pending } from './components/Pending'

export default function App() {
  const [submitted, setSubmitted] = useState<string | null>(null)

  return (
    <div className="app">
      <div className="app__bg" aria-hidden="true" />
      <header className="topbar">
        <Logo />
        <span className="topbar__tag">
          <span className="pixel-dot" aria-hidden="true" />
          Demo 预览版
        </span>
      </header>
      <main className="main">
        {submitted === null ? (
          <Home onStart={setSubmitted} />
        ) : (
          <Pending idea={submitted} onBack={() => setSubmitted(null)} />
        )}
      </main>
      <footer className="footer">BlockCraft AI · 把想法，搭成现实</footer>
    </div>
  )
}
