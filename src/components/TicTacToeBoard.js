import React from 'react'
import TicTacToeSquare from './TicTacToeSquare'

const TicTacToeBoard = ({ squares, onClick, selectedSquare, winnerLine }) => {
    return (
        <div className="board">
            {squares.map((square, index) => {
                let marker
                if (winnerLine) {
                    marker = winnerLine.includes(index) ? "square selected" : "square"
                } else {
                    marker = index === selectedSquare ? "square selected" : "square"
                }
                return <TicTacToeSquare key={index} value={square} onClick={() => onClick(index)} marker={marker} />
                })}
        </div>
    )
}

export default TicTacToeBoard