import WastePanel from "./WastePanel.js";

const Main = ({ wasteData }) => {
  return (
    <main>
      {/* Create a panel for every instance */}
      {wasteData.map((panelData) => 
        <WastePanel key = {panelData.id} panelData = {panelData} />
      )}
    </main>
  )
}

export default Main
