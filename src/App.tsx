import { useState } from 'react'
import './App.css'

function App() {
  const [player1Life, setPlayer1Life] = useState(20)
  const [player2Life, setPlayer2Life] = useState(20)

  const handlePlayer1Minus = () => {
    setPlayer1Life((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handlePlayer1Plus = () => {
    setPlayer1Life((prev) => prev + 1)
  }

  const handlePlayer2Minus = () => {
    setPlayer2Life((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handlePlayer2Plus = () => {
    setPlayer2Life((prev) => prev + 1)
  }

  const handleRestart = () => {
    const isConfirmed = window.confirm("¿Estás seguro de que quieres reiniciar los puntos de vida a 20 para ambos jugadores?")
    if (isConfirmed) {
      setPlayer1Life(20)
      setPlayer2Life(20)
    }
  }

  return (
    <main className="app-container">
      <h1>Magic The Gathering</h1>
      <p className="subtitle">Life Counter</p>
      
      <div className="players-container">
        {/* Jugador 1 */}
        <div className="player-card">
          <h2>Jugador 1</h2>
          <div className="life-points">{player1Life}</div>
          <div className="button-group">
            <button className="btn-minus" onClick={handlePlayer1Minus}>-1 Resta</button>
            <button className="btn-plus" onClick={handlePlayer1Plus}>+1 Suma</button>
          </div>
        </div>

        {/* Jugador 2 */}
        <div className="player-card">
          <h2>Jugador 2</h2>
          <div className="life-points">{player2Life}</div>
          <div className="button-group">
            <button className="btn-minus" onClick={handlePlayer2Minus}>-1 Resta</button>
            <button className="btn-plus" onClick={handlePlayer2Plus}>+1 Suma</button>
          </div>
        </div>
      </div>

      <button className="restart-button" onClick={handleRestart}>Reiniciar</button>
    </main>
  )
}

export default App
