import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  //creating state for sushi and settter
  const [sushis, setSushis] = useState([]);

  //Creating state and setter for wallet
  const [wallet, setWallet] = useState(100);

  const [plates, setPlates] = useState([]);

  // this is so it fetches sushi when page first renders. Only does it once because of the 2nd argu
  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then((res) => res.json())
    .then((sushiObj) => setSushis(sushiObj))
    .catch((error) => console.log(error))
  }, [])






  return (
    <div className="app">
      <SushiContainer sushis={sushis} wallet={wallet} setWallet={setWallet} plates={plates} setPlates={setPlates} />
      <Table wallet={wallet} setWallet={setWallet} plates={plates}/>
    </div>
  );
}

export default App;
