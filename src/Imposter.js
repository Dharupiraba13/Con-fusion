import React from "react";
import TimerIcon from '@material-ui/icons/Timer';
import './Imposter.css';
import './App.css';
import { Button } from '@material-ui/core';
import Imposter_clue from "./Imposter_clue";



function Imposter()  {
  return (
    <div className="imposter">
        <div className="Timer">
        <TimerIcon style={{ fontSize: 100 }}/>
        </div>
      <div className="Imposter_detail">
You're the Imposter !!
<br></br>


</div>
<div className="display_clues">

    <Imposter_clue imposterclue_name="Tableglue" />
</div>
<div className="Product_name">
   Enter Your Product Name
<form><input type="text"></input></form>
 <br></br>
 </div>
 <div className="Button_enter">
 <Button >SEND</Button>
 </div>
    </div>
  );
}

export default Imposter;
