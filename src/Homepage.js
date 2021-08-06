import React from "react";

import './Homepage.css';
import './App.css';
import { Button } from '@material-ui/core';




function Homepage()  {
  return (
    <div className="home">
      <div className="Title">
ConFusion
</div>
<div className="User">
   Enter Your Name
   <form>
     <input type="text">
     </input>
   </form>
 <br></br>
  <Button className="Button_enter">Join Game</Button>

</div>
    
    
    </div>
  );
}

export default Homepage;
