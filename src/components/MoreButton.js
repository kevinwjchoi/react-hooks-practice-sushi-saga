import React, {useState} from "react";

function MoreButton({sushiMax, setSushiMax, sushiMin, setSushiMin}) {
  function handleMoreButton(){
    setSushiMax((sushiMax) => (sushiMax + 4));
    setSushiMin((sushiMin) => (sushiMin + 4));
  }


  return <button onClick={handleMoreButton}>More sushi!</button>;
}

export default MoreButton;
