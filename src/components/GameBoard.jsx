/* eslint-disable react/prop-types */

import { Square } from './Square.jsx'

export function GameBoard({ board, updateBoard }) {
  return (
    <section className='game'>
      {board.map ((square, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {square}
        </Square>
      ))}
    </section>
  );
}


