import React from 'react';

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="number"
        placeholder="Note minimale"
        min="0"
        max="10"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
