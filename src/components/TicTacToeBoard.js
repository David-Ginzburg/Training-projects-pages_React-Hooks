import React from 'react'
import TicTacToeSquare from './TicTacToeSquare'

const TicTacToeBoard = ({ squares, onClick }) => {
    return (
        <div className="board">
            {squares.map((square, index) => <TicTacToeSquare key={index} value={square} onClick={() => onClick(index)} />)}
        </div>
    )
}

export default TicTacToeBoard