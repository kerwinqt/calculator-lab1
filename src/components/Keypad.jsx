export default function Keypad({
  onDigit,
  onDecimal,
  onOperator,
  onEquals,
  onClear,
  operators,
}) {
  const btn =
    'rounded-xl text-xl font-semibold py-4 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400'
  const num = `${btn} bg-slate-700 hover:bg-slate-600`
  const op = `${btn} bg-indigo-600 hover:bg-indigo-500`

  return (
    <div className="grid grid-cols-4 gap-3">
      <button className={`${btn} col-span-2 bg-rose-600 hover:bg-rose-500`} onClick={onClear}>
        AC
      </button>
      <button className={op} onClick={() => onOperator(operators[3])}>÷</button>
      <button className={op} onClick={() => onOperator(operators[2])}>×</button>

      <button className={num} onClick={() => onDigit('7')}>7</button>
      <button className={num} onClick={() => onDigit('8')}>8</button>
      <button className={num} onClick={() => onDigit('9')}>9</button>
      <button className={op} onClick={() => onOperator(operators[1])}>−</button>

      <button className={num} onClick={() => onDigit('4')}>4</button>
      <button className={num} onClick={() => onDigit('5')}>5</button>
      <button className={num} onClick={() => onDigit('6')}>6</button>
      <button className={op} onClick={() => onOperator(operators[0])}>+</button>

      <button className={num} onClick={() => onDigit('1')}>1</button>
      <button className={num} onClick={() => onDigit('2')}>2</button>
      <button className={num} onClick={() => onDigit('3')}>3</button>
      <button className={`${btn} row-span-2 bg-emerald-600 hover:bg-emerald-500`} onClick={onEquals}>=</button>

      <button className={`${num} col-span-2`} onClick={() => onDigit('0')}>0</button>
      <button className={num} onClick={onDecimal}>.</button>
    </div>
  )
}
