import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onStockRemoved }) {

const stocksAdded = stocks.map(stock => (
  <Stock 
  key={stock.id}
  stock={stock}
  onClickStock={onStockRemoved}
  />
))
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksAdded}
    </div>
  );
}

export default PortfolioContainer;
