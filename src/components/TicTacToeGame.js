import React, { useState } from 'react'
import TicTacToeBoard from './TicTacToeBoard'

const TicTacToeGame = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true)
    const [selected, setSelected] = useState(null)
    const winner = calculateWinner(history[stepNumber]).winner
    const winnerLine = calculateWinner(history[stepNumber]).winnerLine;

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const squares = [...current]
        if (winner || squares[i]) return
        squares[i] = xIsNext ? 'X' : 'O'
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        setXisNext(!xIsNext)
        setSelected(i)
    }

    const jumpTo = step => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })        
    )

    return (
        <>
            <h3 className="m-3">Tic-Tac-Toe game implemented with React Hooks:</h3>
            <TicTacToeBoard squares={history[stepNumber]} onClick={handleClick} selectedSquare={selected} winnerLine={winnerLine} />
            <div className="winner">
                <p>{winner ? "Winner is: " + winner : stepNumber === 9 ? "Draw" : "Next player is: " + (xIsNext ? 'X' : 'O')}</p>
                <ul>
                    {renderMoves()}
                </ul>
            </div>
        </>
    )
}

export default TicTacToeGame

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
        return {winner: squares[a], winnerLine: lines[i]};
      }
    }
    return {};
  }