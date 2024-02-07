import './App.css'
import { useState } from 'react'
import { TURNS } from './constants.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Turno } from './components/Turno.jsx'
import { GameBoard } from './components/GameBoard.jsx'
import { updateBoard } from './logic/board';
import { resetGameStorage } from './logic/storage/index.js'

// FUNCION PRINCIPAL APP
function App() {
  const [board, setBoard] = useState(() => {
    const boardSFromStorage = window.localStorage.getItem('board')
    return boardSFromStorage ? JSON.parse(boardSFromStorage) : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnSFromStorage = window.localStorage.getItem('turn')
    return turnSFromStorage ?? TURNS.X
  });
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage();
  }

  return (
    <main className='board'>
      <h1  >Tres en Raya</h1>
      <button onClick={resetGame}>
        Reset del Juego
      </button>

      <GameBoard board={board} updateBoard={(index) =>
        updateBoard(board, turn, winner, setBoard, setTurn, setWinner, index)} />

      <Turno turn={turn} />

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )

}

export default App
