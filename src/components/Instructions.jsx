export default function Instructions() {
  return (
    <section className="bg-slate-800 rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4">How to Use</h2>
      <ol className="list-decimal list-inside space-y-2 text-slate-300">
        <li>Tap the number buttons (0–9) to enter a value.</li>
        <li>Press an operator button to choose an operation.</li>
        <li>Enter the second number and press = to see the result.</li>
        <li>Press AC to clear everything, or use Backspace to delete a digit.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">Supported Operations</h2>
      <ul className="space-y-2 text-slate-300">
        <li><span className="text-indigo-400 font-semibold">+</span> Addition</li>
        <li><span className="text-indigo-400 font-semibold">−</span> Subtraction</li>
        <li><span className="text-indigo-400 font-semibold">×</span> Multiplication</li>
        <li><span className="text-indigo-400 font-semibold">÷</span> Division</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Keyboard Support</h2>
      <p className="text-slate-300">
        You can also use your keyboard: numbers 0–9, <code className="bg-slate-700 px-1 rounded">+</code>{' '}
        <code className="bg-slate-700 px-1 rounded">-</code>{' '}
        <code className="bg-slate-700 px-1 rounded">*</code>{' '}
        <code className="bg-slate-700 px-1 rounded">/</code>,{' '}
        <code className="bg-slate-700 px-1 rounded">Enter</code> for equals,{' '}
        <code className="bg-slate-700 px-1 rounded">C</code>/<code className="bg-slate-700 px-1 rounded">Esc</code> to clear, and{' '}
        <code className="bg-slate-700 px-1 rounded">Backspace</code> to delete.
      </p>

      <p className="mt-8 text-slate-400 text-sm">
        Note: dividing by zero shows an error message instead of a result.
      </p>
    </section>
  )
}
