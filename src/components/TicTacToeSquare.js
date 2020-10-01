import React from 'react'

const TicTacToeSquare = ({value, onClick}) => <button key={value} className="square" onClick={onClick}>{value}</button>

export default TicTacToeSquare