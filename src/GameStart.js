import React from "react";
import Card from './Card'
import './GameStart.css';
import './App.css';
import { Button } from '@material-ui/core';




function GameStart()  {
  return (
    <div className="gamestart">
      <div className="Title_info">
PLAYERS JOINED
</div>
<div className="Display_players">
<Card
player_name="Dharu"
/>
<Card
player_name="Dharu"
/><Card
player_name="Dharu"
/><Card
player_name="Dharu"
/><Card
player_name="Dharu"
/>


</div>

<div className="Button_enter">
<Button >Start Game</Button>    
</div>
    </div>
  );
}

export default GameStart;
