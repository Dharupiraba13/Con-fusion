import React from "react";
import TimerIcon from '@material-ui/icons/Timer';
import './Product.css';
import './App.css';
import { Button } from '@material-ui/core';
import Clue from './Clue';



function Product()  {
  return (
    <div className="product">
        <div className="Timer">
        <TimerIcon style={{ fontSize: 100 }}/>
        </div>
      <div className="Customer_detail">
Design a product for
<br></br>
TEACHER
</div>
<div className="display_clues">
    <Clue clue_name="table" />
      <Clue clue_name="table"/>
      <Clue clue_name="table" />
      <Clue clue_name="table"/>
      <Clue clue_name="table" />   
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

export default Product;
