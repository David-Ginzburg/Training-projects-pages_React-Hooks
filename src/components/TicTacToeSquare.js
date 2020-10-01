import React from 'react'

const TicTacToeSquare = ({value, onClick, marker}) => <button key={value} onClick={onClick} className={marker} >{value}</button>

export default TicTacToeSquare