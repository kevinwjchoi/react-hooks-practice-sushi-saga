import React, {useState} from "react";

function Sushi({sushi , wallet, setWallet, plates}) {
  const {name, img_url, price} = sushi
  const [eaten, setEaten] = useState(false)
  
  function handleWallet(){
    if(wallet >= price && eaten == false) {
      setWallet(wallet - price)
      setEaten(true);
      plates.push(1);
    }
  }


  function handleEatClick(){
    handleWallet();
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
