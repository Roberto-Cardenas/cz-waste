import React from 'react'

const WasteItemList = ({ backgroundColor, description, items }) => {
  var itemId = 0;
  
  return (
    <div className = "waste-items-list" style = {{backgroundColor: backgroundColor}}>
      <h5 className = "waste-description">{description}</h5>
      {items.map((item) => 
        <h4 key = {itemId++}>{item}</h4>
      )}
    </div>
  )
}

export default WasteItemList
