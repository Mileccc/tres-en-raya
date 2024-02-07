import { WINNER_COMBOS } from "../constants"
import confetti from "canvas-confetti"
import { TURNS } from "../constants"
import { saveGameToStorage } from "./storage"


export const checkWinnerFrom = (boardToCheck) => {
    // Revisamos las posibles combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // si hay algo
        boardToCheck[a] === boardToCheck[b] && // si el primero es igual al segundo
        boardToCheck[a] === boardToCheck[c]    // si el primero es igual al tercero
      ) {
        return boardToCheck[a] // Si a === b === c entonces devuelve el ganador
      }
    }
    return null // si no hay ganador
  }

  export const checkEndGame = (newBoard) => {
    // every devuelve false si hay un null, true si no hay null
    return newBoard.every((square) => square !== null)
  }
  
  export const updateBoard = 
  (board, turn, winner, setBoard, setTurn, setWinner, index) => {
    // si ya hay algo en la casilla o tenemos un ganador, no hacer nada más
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guadar aquí la partida
    saveGameToStorage({ board: newBoard, turn: newTurn })
    // Revisamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }
  