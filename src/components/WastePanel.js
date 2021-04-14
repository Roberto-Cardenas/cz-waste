import WasteItemList from "./WasteItemList.js";
import xIcon from "../images/x-icon.png";
import "../css/WastePanel.css";
import { useState } from 'react'

const WastePanel = ({ panelData }) => {
  // Set up internal state
  const [open, setOpen] = useState(false);

  // Open and close panel
  const togglePanel = () => {
    setOpen(!open);
  };

  return (
    <div className = {open ? "waste-panel open" : "waste-panel"}>
      {/* Title card for the panel */}
      <div className = "no-select waste-title-card flex-row flex-justify-space-between flex-align-center"
           style = {{ backgroundColor: panelData.titleCardColor }}>
        <div className = "full-relative-height flex-column flex-justify-center">
          <h1 className = "waste-title">{panelData.name}</h1>
        </div>
        <div onClick = {togglePanel} className = "waste-btn-icon">
          <i className = "arrow"></i>
          <img className = "x-icon" alt = "" src = {xIcon} />
        </div>
      </div>

      {/* List of items that go in this panel */}
      <WasteItemList backgroundColor = {panelData.itemsListColor} description = {panelData.description} items = {panelData.entries} />
    </div>
  )
}

export default WastePanel
