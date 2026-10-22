import { usePlayers } from './hooks/usePlayers'
import { Player } from './components/Player'
import './App.css'

function App() {
  const {
    players,
    addPlayer,
    removePlayer,
    increaseCounter,
    decreaseCounter,
    updatePlayerName,
    resetPlayerCounter,
    resetPlayers,
  } = usePlayers()

  const haveTwoOrMorePlayers = players.length > 2

  const handleResetCounters = () => {
    const isConfirmed = window.confirm(
      '¿Estás seguro de que quieres reiniciar los puntos de vida a 20 para todos los jugadores?'
    )
    if (isConfirmed) {
      resetPlayerCounter()
    }
  }

  const handleResetAll = () => {
    const isConfirmed = window.confirm(
      '¿Estás seguro de que quieres reiniciar la partida a 2 jugadores con 20 vidas?'
    )
    if (isConfirmed) {
      resetPlayers()
    }
  }

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Magic The Gathering</h1>
        <p className="subtitle">Life Counter</p>
      </header>

      <section className="controls-bar">
        <button className="add-player-button" onClick={addPlayer}>
          + Agregar Jugador
        </button>
        <button className="restart-button" onClick={handleResetCounters}>
          Reiniciar Vidas
        </button>
        {haveTwoOrMorePlayers && (
          <button className="reset-players-button" onClick={handleResetAll}>
            Restablecer a 2 Jugadores
          </button>
        )}
      </section>

      <div className="players-container">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            showDeleteButton={players.length > 2}
            onIncreaseCounter={() => increaseCounter(player)}
            onDecreaseCounter={() => decreaseCounter(player)}
            onDeletePlayer={() => removePlayer(player.id)}
            onUpdateName={(name) => updatePlayerName(player.id, name)}
          />
        ))}
      </div>
    </main>
  )
}

export default App
