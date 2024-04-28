import React , {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis , wallet, setWallet , plates, setPlates}) {
  const [sushiMax, setSushiMax] = useState(4);
  const [sushiMin, setSushiMin] = useState(0)
  const limitedSushi = sushis.filter((sushi) => {
    if(sushi.id > sushiMin && sushi.id <= sushiMax) return sushi; 
  })




  const sushiArray = limitedSushi.map((sushi) => {
    return <Sushi  key={sushi.id}  sushi={sushi} wallet={wallet} setWallet={setWallet} plates={plates} setPlates={setPlates}/>
  })

  return (
    <div className="belt">
      {sushiArray}
      <MoreButton sushis={sushis} sushiMax={sushiMax} setSushiMax={setSushiMax} sushiMin={sushiMin} setSushiMin={setSushiMin} />
    </div>
  );
}

export default SushiContainer;
