import type { ChangeEvent } from 'react'
import type { IPlayer } from '../types/player'

export interface PlayerProps {
  player: IPlayer
  showDeleteButton?: boolean
  onIncreaseCounter: () => void
  onDecreaseCounter: () => void
  onDeletePlayer?: () => void
  onUpdateName: (name: string) => void
}

export function Player({
  player,
  showDeleteButton = true,
  onIncreaseCounter,
  onDecreaseCounter,
  onDeletePlayer,
  onUpdateName,
}: PlayerProps) {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdateName(e.target.value)
  }

  return (
    <div className="player-card">
      <div className="player-header">
        <input
          type="text"
          className="player-name-input"
          value={player.name}
          onChange={handleNameChange}
          placeholder="Nombre del jugador"
        />
        {showDeleteButton && onDeletePlayer && (
          <button
            className="btn-delete"
            onClick={onDeletePlayer}
            title="Eliminar jugador"
            aria-label="Eliminar jugador"
          >
            ✕
          </button>
        )}
      </div>

      <div className="life-points">{player.counter}</div>

      <div className="button-group">
        <button className="btn-minus" onClick={onDecreaseCounter}>
          -1 Resta
        </button>
        <button className="btn-plus" onClick={onIncreaseCounter}>
          +1 Suma
        </button>
      </div>
    </div>
  )
}

export default Player
