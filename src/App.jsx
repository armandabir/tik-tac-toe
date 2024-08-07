import { useState } from "react"
import GameBoard from "./components/GameBoard"
import {Header} from "./components/Header"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"
const initialGameboard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]


// gameTurns=[
//   {
//     player:"X",square:{row:0,col:1}
//   },
//   {
//     player:"0",square:{row:1,col:1}
//   }
// ]

const PLAYERS={
  X:"player1",
  O:"player2",
}


function derivedActivePlayer(gameTurns){
  let currenPlayer="X";

  if(gameTurns.length && gameTurns[0].player=="X"){

    currenPlayer="O"
  }

  return currenPlayer;
}

function derivedGameBoard(gameTurns){
  let gameBoard=[...initialGameboard.map((rowArray)=>[...rowArray])]

  for(const trun of gameTurns){
      const {player,square}=trun;
      const {row,col}=square;

      gameBoard[row][col]=player;

    }
    return gameBoard;
}


function derivedWinnner(gameBoard,players){
  let winner;
  for(let combonation of WINNING_COMBINATIONS){
      const firstSquareSymbol=gameBoard[combonation[0].row][combonation[0].column];
      const secondSquareSymbol=gameBoard[combonation[1].row][combonation[1].column];
      const thirdSquareSymbol=gameBoard[combonation[2].row][combonation[2].column];

      if(firstSquareSymbol && 
        firstSquareSymbol==secondSquareSymbol && secondSquareSymbol == thirdSquareSymbol){
          winner=players[firstSquareSymbol]
        }

      }
      return winner
    }
function App() {
  const [players,setPlayers]=useState(PLAYERS);
  const [gameTurns,setGameTurns]=useState([])
  const activePlayer=derivedActivePlayer(gameTurns);
  const gameBoard=derivedGameBoard(gameTurns);
  const winner=derivedWinnner(gameBoard,players)
  const hasDraw=gameTurns.length == 9 && !winner
  function handleSuareClick(rowIndex,colIndex){
    setGameTurns((prevTurns)=>{
      const currentPlayer=derivedActivePlayer(prevTurns)
      const updatedTunns= [{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns] 
      console.log(updatedTunns)
      return updatedTunns

    })

  }


  function handlePlayerChangeName(newName,symbol){
      setPlayers((prevPlayers)=>{
        return {
          ...prevPlayers,[symbol]:newName
        }
      })
  }


  function handleOnRestart(){
    setGameTurns([])
  }
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
              <Player name={players.X} symbol={'X'} isActive={activePlayer =="X"} onChangeName={handlePlayerChangeName}/>
              <Player name={players.O} symbol={'O'} isActive={activePlayer =="O"} onChangeName={handlePlayerChangeName}/>
          </ol>
          {(winner || hasDraw) && (<GameOver winner={winner} onRestart={handleOnRestart}/>)}
          <GameBoard board={gameBoard} onSelectSquare={handleSuareClick} />
        </div>
        <Log turns={gameTurns}/>
    </main>
    </>
  )
}

export default App
