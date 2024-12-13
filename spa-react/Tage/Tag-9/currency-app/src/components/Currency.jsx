import { useState } from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import "../styles/currency.css";
import axios from "axios";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const token = import.meta.env.VITE_CURRENCY_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;  

  const exchange = async () => {
    try {
      const { data } = await axios.get(
        `${baseUrl}?apikey=${token}&base_currency=${fromCurrency}`
      );
      const convertedAmount = (data.data[toCurrency] * amount).toFixed(2);
      setResult(convertedAmount);
    } catch (error) {
      alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
      console.error(error);
    }
  };
  

  return (
    <>
      <div className="currency-main">
        <div className="header">
          <h3>
          Währungsumrechner Anwendung
          </h3>
        </div>

        <div className="currency-container">
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount-input"
          />
          <select
            onChange={(e) => setFromCurrency(e.target.value)}
            className="first-currency-option"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>
          <TiArrowRightOutline style={{ marginRight: "10px", fontSize: "2rem", color: "#2c2129", transform: "translateY(10px)" }} />

          <select
            onChange={(e) => setToCurrency(e.target.value)}
            className="second-currency-option"
          >
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

          <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            type="text"
            className="result-input"
          />
        </div>

        <div className="button-main">
          <button
            style={{
              width: "200px",
              height: "40px",
              border: "none",
              backgroundColor: "#2c2129",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "20px",
            }}
            onClick={exchange}
          >
            Geldwechsel
          </button>
        </div>
      </div>
    </>
  );
}

export default Currency;