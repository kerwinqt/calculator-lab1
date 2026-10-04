export default function Display({ display, operand, operator }) {
  return (
    <div className="bg-slate-950 rounded-xl p-4 mb-4 text-right">
      <div className="text-sm text-slate-500 min-h-[1.25rem]">
        {operand !== null && operator ? `${operand} ${operator}` : ''}
      </div>
      <div className="text-4xl font-mono font-semibold truncate min-h-[2.5rem]">
        {display}
      </div>
    </div>
  )
}
