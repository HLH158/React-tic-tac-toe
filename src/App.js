import React, {useState} from 'react';
import './App.css';
import ChoosePlayer from './components/ChoosePlayer'

function App() {
  const [board, setBoard]= useState(Array(9).fill(null))
  const [player, setPlayer] = useState('')
  const [winner, setWinner] = useState('')
  const [isFull, setIsFull] = useState(false)
  


  function handleClickedBox(index){
    if (board[index] === null && !winner && player){
     
      let newBoard = board
      newBoard[index]=player
      setBoard(newBoard)
      let newPlay = player==="X"? "O" :"X"
      setPlayer(newPlay)
      checkWinner()
    }
  }

 function checkWinner(){
   let winLins=[
     ['0','1','2'],
     ['3','4','5'],
     ['6','7','8'],
     ['0','3','6'],
     ['1','4','7'],
     ['2','5','8'],
     ['0','4','8'],
     ['2','4','6'],
   ]
   
   
   for(let i=0; i<winLins.length; i++){
     let [a,b,c] = winLins[i]
     if(board[a]===board[b] && board[a]===board[c] && board[a]!==null){
       setWinner(player)
     }
   
    }
    let num=0
    board.forEach(item =>{
      if(item !== null){
        num += 1
      }
    })
    if (num === 9){
      setIsFull(true)
    }

 }

 function resetGame(){
  setBoard(Array(9).fill(null))
  setWinner("")
  setPlayer("")
  setIsFull(false)

 }
  return (
    <div className="container">
       <h1>Tic Tac Toe App</h1>
       {!player && <ChoosePlayer player={(e)=>setPlayer(e)} />}
       {winner && <h2 className='winner'>Winner is player {winner}</h2>}
       {(isFull && !winner) && <h2 >It is a Draw!</h2>}
       {(winner || isFull) && <button className='restart' type='button' onClick={()=>resetGame()}>Restart</button>}
       <div className='board'>
       {board.map((box, index)=> <div className='box' key={index} onClick={()=>handleClickedBox(index)}>{box}</div>)}
       </div>

    </div>
  );
}



export default App;
