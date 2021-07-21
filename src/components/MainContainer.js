import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [addPortfolio, setAddPortfolio] = useState([])
  const [filtered, setFiltered] = useState("Tech")


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then(data => setStocks(data))
  }, [])

  const handleAddToPortfolio = (newStock) => {
    const stockAdded = addPortfolio.find(
      (stock) => stock.id === newStock.id
    )
    if (!stockAdded) {
      setAddPortfolio([...addPortfolio, newStock])
    }
  }

  const handleRemoveStock = (removedStock) => {
    setAddPortfolio((addPortfolio) => 
    addPortfolio.filter((stock) => stock.id !== removedStock.id)
    )
  }

  const filteringStocks = stocks.filter(stock => stock.type === filtered)


    return (
    <div>
      <SearchBar 
      filtered={filtered}
      onChangeFiltered={setFiltered}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={filteringStocks}
          onAddingStock={handleAddToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          stocks={addPortfolio}
          onStockRemoved={handleRemoveStock}
          
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
