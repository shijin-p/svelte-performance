import './App.css';
import React, { useState, useEffect } from 'react';
import RenderNumber from './RenderNumber/RenderNumber';
import TableCel from './TableCel/TableCel';
import { getData } from './services/data.service';

function App() {
  const addCount = (value) => {
    let number = count;
    for (let i = 0; i < value; i++) {
      number += 1;
      setNumber(number);
    }
  };

  useEffect(() => {
    getData().then((response) => {
      response.forEach((item) => {
        item.disabled = false;
      });
      setData(response.slice(0, 1000));
    });
  }, []);

  const toogleList = () => {
    setShow(!show);
  };

  const disableCountry = (country) => {
    setData(
      data.map((item) => {
        if (item.country === country) {
          item.disabled = !item.disabled;
        }
        return item;
      }),
    );
  };

  const [count, setNumber] = useState(0);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const getTable = () => {
    if (!show) {
      return null;
    }
    const table = () => {
      return data.map((item, index) => {
        return (
          <TableCel item={item} disableCountry={disableCountry}></TableCel>
        );
      });
    };
    return (
      <div className="main-table">
        <div className="row table-header">
          <div className="col">Year</div>
          <div className="col">Quarter</div>
          <div className="col">Month</div>
          <div className="col">Term</div>
          <div className="col">Country</div>
          <div className="col">Total</div>
          <div className="col">Action</div>
        </div>
        {table()}
      </div>
    );
  };

  return (
    <div className="App">
      <RenderNumber number={count}></RenderNumber>
      <button onClick={() => addCount(1)}>Add 1</button>
      <button onClick={() => addCount(10)}>Add 10</button>
      <p>----</p>
      <div>Quantity: {data.length}</div>
      <button onClick={toogleList}>{show ? 'Hide' : 'Show'}</button>
      {getTable()}
    </div>
  );
}

export default App;
