import { useState, useEffect } from "react";

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  console.log(coins);
  return (
    <div>
      {loading ? (
        <strong>로딩중</strong>
      ) : (
        <select>
          {coins.map((c) => (
            <option key={c.id}>
              {c.name} ({c.symbol}): ${c.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CoinTracker;
