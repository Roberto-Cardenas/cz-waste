import Header from './components/Header.js';
import WastePanels from './components/WastePanels.js';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [wasteData, setWasteData] = useState({
      data: []
  });

  // Use effect
  useEffect(() => {
    const getWasteData = async () => {
      const data = await fetchWasteData();

      setWasteData(data);
    };

    getWasteData();
  }, [])

  // Get waste data
  const fetchWasteData = async () => {
    const res = await fetch('http://localhost/waste/api/read_waste_content.php');
    const data = await res.json();

    return data;
  };

  return (
    <div>
      {/* Normal header */}
      <Header />

      {/* Panels */}
      <WastePanels wasteData = {wasteData.data} />
    </div>
  );
}

export default App;
