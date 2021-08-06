import React from "react";
import TimerIcon from '@material-ui/icons/Timer';
import './Product_demo.css';
import './App.css';
import { Button } from '@material-ui/core';




function Product_demo()  {
  return (
    <div className="product_demo">
        <div className="Timer">
        <TimerIcon style={{ fontSize: 100 }}/>
        </div>
      <div className="Product_display">
PRODUCT DISPLAY  DEMO
<br></br>

</div>
 <div className="Button_enter">
 <Button >START</Button>
 </div>
    </div>
  );
}

export default Product_demo;
