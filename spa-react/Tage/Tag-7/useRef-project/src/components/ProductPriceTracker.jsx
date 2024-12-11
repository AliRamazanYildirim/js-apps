import { useState, useRef, useEffect } from "react";

const ProductPriceTracker = () => {
    const [price, setPrice] = useState(0);
    const prevPriceRef = useRef(0);

    useEffect(() => {
        prevPriceRef.current = price;
    }, [price]);

    const handlePriceChange = (e) => {
        setPrice(parseFloat(e.target.value));
    };

    return (
      <div>
        <h1>Produktpreistracker</h1>
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Geben Sie einen neuen Preis ein"
        />
        <p>Aktueller Preis: {price} TL</p>
        <p>Vorheriger Preis: {prevPriceRef.current} TL</p>
      </div>
    );
};

export default ProductPriceTracker;