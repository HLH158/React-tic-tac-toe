import React from 'react';

function ChoosePlayer(props){
    
    function handleClicked(e){
       e.preventDefault()
       props.player(e.target.player.value)
       
    }
    return(
        <form onSubmit={(e)=>handleClicked(e)}> 
          <label>Player O</label>
          <input type="radio" name="player" value="O"/>
          <label>Player X</label>
          <input type="radio" name="player" value="X"/>
          <button type="submit" >Start</button>
        </form>
    )
}

export default ChoosePlayer