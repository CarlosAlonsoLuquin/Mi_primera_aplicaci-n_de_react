import { useState } from 'react'
import type { IPlayer } from '../types/player'

export const DEFAULT_COUNTER = 20

export const DEFAULT_PLAYERS: IPlayer[] = [
  {
    id: crypto.randomUUID(),
    name: 'Jugador 1',
    counter: DEFAULT_COUNTER,
  },
  {
    id: crypto.randomUUID(),
    name: 'Jugador 2',
    counter: DEFAULT_COUNTER,
  },
]

export const usePlayers = () => {
  const [players, setPlayers] = useState<IPlayer[]>(DEFAULT_PLAYERS)

  const addPlayer = () => {
    const newPlayerNumber = players.length + 1
    const newPlayer: IPlayer = {
      id: crypto.randomUUID(),
      name: `Jugador ${newPlayerNumber}`,
      counter: DEFAULT_COUNTER,
    }
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer])
  }

  const removePlayer = (id: string) => {
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id))
  }

  const updateCounter = (id: string, value: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === id) {
          return {
            ...player,
            counter: value,
          }
        }
        return player
      })
    )
  }

  const increaseCounter = (player: IPlayer) => {
    updateCounter(player.id, player.counter + 1)
  }

  const decreaseCounter = (player: IPlayer) => {
    if (player.counter <= 0) {
      return
    }
    updateCounter(player.id, player.counter - 1)
  }

  const updatePlayerName = (id: string, name: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === id) {
          return {
            ...player,
            name,
          }
        }
        return player
      })
    )
  }

  const resetPlayerCounter = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        counter: DEFAULT_COUNTER,
      }))
    )
  }

  const resetPlayers = () => {
    setPlayers([
      {
        id: crypto.randomUUID(),
        name: 'Jugador 1',
        counter: DEFAULT_COUNTER,
      },
      {
        id: crypto.randomUUID(),
        name: 'Jugador 2',
        counter: DEFAULT_COUNTER,
      },
    ])
  }

  return {
    players,
    addPlayer,
    removePlayer,
    increaseCounter,
    decreaseCounter,
    updatePlayerName,
    resetPlayerCounter,
    resetPlayers,
  }
}

export default usePlayers
