import './TableCel.css';
import React, { useState } from 'react';

const colorList = ['white', 'red', 'blue', 'grey', 'white'];

function TableCel({ item, disableCountry }) {
  const [color, setColor] = useState('white');

  const changeColor = () => {
    const idx = colorList.indexOf(color);
    setColor(colorList[idx + 1]);
  };

  const nextColorColor = () => {
    const idx = colorList.indexOf(color);
    return colorList[idx + 1];
  };

  return (
    <div className={`row ${color} ${item.disabled ? 'disabled' : ''}`}>
      <div className="col">{item.year}</div>
      <div className="col">{item.quarter}</div>
      <div className="col">{item.month}</div>
      <div className="col">{item.term}</div>
      <div
        className="col clickable"
        onClick={() => {
          disableCountry(item.country);
        }}
      >
        {item.country}
      </div>
      <div className="col">{item.total}</div>
      <div className="col">
        <button onClick={changeColor}>change to {nextColorColor()}</button>
      </div>
    </div>
  );
}

export default TableCel;
