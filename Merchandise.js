import React, { useState, useEffect } from "react";

function Merchandise() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/merchandise')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="merchandise-store">
      {items.map((item) => (
        <div key={item.id} className="merch-item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Merchandise;
