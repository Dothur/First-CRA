import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState([]);
  const onChange = (event) => setMyMoney(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) : {myMoney / coin.quotes.USD.price}{" "}
                {coin.symbol}
              </option>
            ))}
          </select>
          <hr />
          <input
            onChange={onChange}
            value={myMoney}
            type="text"
            placeholder="Write your Money(USD)"
          />
        </div>
      )}
    </div>
  );
}

export default App;
