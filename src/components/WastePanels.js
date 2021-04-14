import WastePanel from "./WastePanel.js";

const Main = ({ wasteData }) => {
  var panelId = 0;

  return (
    <main>
      {/* Create a panel for every instance */}
      {wasteData.map((panelData) => 
        <WastePanel key = {panelId++} panelData = {panelData} />
      )}
    </main>
  )
}

export default Main
