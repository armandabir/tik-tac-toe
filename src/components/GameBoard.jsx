import { useState } from "react"


export default function GameBoard({board,onSelectSquare}){
    // const [gameBoard,setGameBoard]=useState(initialGameboard);
    // function handleSquareClick(rowIndex,colIndex){
    //         setGameBoard((currentGameBoard)=> {
    //             const updatedGameBorad = [...currentGameBoard.map((innerRow)=>[...innerRow]),]
    //             console.log(updatedGameBorad)
    //             updatedGameBorad[rowIndex][colIndex]=turn
    //             return updatedGameBorad
    //         })

    //         onSelectSquare(turn)
    // }
    return (
        <ol id="game-board">
            {board.map((row , ri)=>(
                <li key={ri}>
                    <ol>
                        {
                            row.map((playerSymbol,ci)=>(
                                <li key={ci}>
                                    <button disabled={playerSymbol != null} onClick={()=>onSelectSquare(ri,ci)}>{playerSymbol}</button>
                                </li>
                            ))
                        }
                    </ol>
                </li>

            ))
            
            
            }
        </ol>
    )
}