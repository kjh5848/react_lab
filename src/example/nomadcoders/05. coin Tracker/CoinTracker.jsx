import React, { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [Coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) =>{ 
        setCoins(json)
        setLoading(false)
      });
  }, []);

  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${Coins.length})`}</h1>
      {loading ? <strong>Loading....</strong> : null}
      <ul>
        {Coins.map((coin) => (
            <li key={coin.id}>
            {coin.name} {(coin.symbol)}: {coin.quotes.USD.price} US
            </li>
        ))}
      </ul>
    </div>
  );
}

export default CoinTracker;
