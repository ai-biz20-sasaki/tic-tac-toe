'use client';
import { useState } from 'react'
import SquareUseState from './SquareUseState'

export default function Board() {
  const [xIsNext, setXisNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(""))

  function handleClick(i: number) {
    //マスがすでに埋まっている または calculateWinner()が成立する場合は早期リターン
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
    console.log('nextSquares', nextSquares)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner:" + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        {/*これは無限ループになるからダメ <SquareUseState value={squares[0]} onSquareClick={handleClick(0)} />*/}
        <SquareUseState value={squares[0]} onSquareClick={() => handleClick(0)} />
        <SquareUseState value={squares[1]} onSquareClick={() => handleClick(1)} />
        <SquareUseState value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <SquareUseState value={squares[3]} onSquareClick={() => handleClick(3)} />
        <SquareUseState value={squares[4]} onSquareClick={() => handleClick(4)} />
        <SquareUseState value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <SquareUseState value={squares[6]} onSquareClick={() => handleClick(6)} />
        <SquareUseState value={squares[7]} onSquareClick={() => handleClick(7)} />
        <SquareUseState value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

//勝者の判定
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}