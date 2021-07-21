import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddingStock }) {

  const listOfStocks = stocks.map(stock => (
    <Stock 
    key={stock.id}
    stock={stock}
    onClickStock={onAddingStock}
    />
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {listOfStocks}
    </div>
  );
}

export default StockContainer;
