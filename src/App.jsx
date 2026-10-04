import Calculator from './components/Calculator'
import Instructions from './components/Instructions'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center py-10 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          React Calculator
        </h1>
        <p className="mt-2 text-slate-400">
          Built with React, Tailwind CSS, and React state &amp; events.
        </p>
      </header>

      <main className="w-full max-w-5xl grid gap-10 lg:grid-cols-2 items-start">
        <Calculator />
        <Instructions />
      </main>
    </div>
  )
}
