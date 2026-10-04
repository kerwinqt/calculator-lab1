import { useEffect, useState } from 'react'
import Display from './Display'
import Keypad from './Keypad'

const OPERATORS = ['+', '−', '×', '÷']

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [operand, setOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [error, setError] = useState(false)

  const clearAll = () => {
    setDisplay('0')
    setOperand(null)
    setOperator(null)
    setWaitingForOperand(false)
    setError(false)
  }

  const inputDigit = (digit) => {
    if (error) clearAll()
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
      return
    }
    setDisplay((prev) => (prev === '0' ? digit : prev + digit).slice(0, 12))
  }

  const inputDecimal = () => {
    if (error) clearAll()
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }
    setDisplay((prev) => (prev.includes('.') ? prev : prev + '.'))
  }

  const compute = (a, b, op) => {
    switch (op) {
      case '+': return a + b
      case '−': return a - b
      case '×': return a * b
      case '÷':
        if (b === 0) return null
        return a / b
      default: return b
    }
  }

  const format = (value) => {
    if (value === null) return 'Error'
    const rounded = Math.round(value * 1e10) / 1e10
    return String(rounded).slice(0, 12)
  }

  const chooseOperator = (op) => {
    if (error) return
    const current = parseFloat(display)
    if (operand !== null && operator && !waitingForOperand) {
      const result = compute(operand, current, operator)
      if (result === null) {
        setDisplay('Error: ÷ by 0')
        setError(true)
        setOperand(null)
        setOperator(null)
        return
      }
      setOperand(result)
      setDisplay(format(result))
    } else {
      setOperand(current)
    }
    setOperator(op)
    setWaitingForOperand(true)
  }

  const equals = () => {
    if (error || operator === null || operand === null) return
    const current = parseFloat(display)
    const result = compute(operand, current, operator)
    if (result === null) {
      setDisplay('Error: ÷ by 0')
      setError(true)
    } else {
      setDisplay(format(result))
    }
    setOperand(null)
    setOperator(null)
    setWaitingForOperand(true)
  }

  const handleKey = (key) => {
    if (/^[0-9]$/.test(key)) inputDigit(key)
    else if (key === '.') inputDecimal()
    else if (key === '+') chooseOperator('+')
    else if (key === '-') chooseOperator('−')
    else if (key === '*') chooseOperator('×')
    else if (key === '/') chooseOperator('÷')
    else if (key === 'Enter' || key === '=') equals()
    else if (key === 'Escape' || key.toLowerCase() === 'c') clearAll()
    else if (key === 'Backspace') {
      if (!error && !waitingForOperand) {
        setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'))
      }
    }
  }

  useEffect(() => {
    const listener = (e) => {
      if (['/', '*', '-', '+'].includes(e.key)) e.preventDefault()
      handleKey(e.key)
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  })

  return (
    <section className="bg-slate-800 rounded-2xl shadow-xl p-6 w-full max-w-sm">
      <Display display={display} operand={operand} operator={operator} />
      <Keypad
        onDigit={inputDigit}
        onDecimal={inputDecimal}
        onOperator={chooseOperator}
        onEquals={equals}
        onClear={clearAll}
        operators={OPERATORS}
      />
    </section>
  )
}
