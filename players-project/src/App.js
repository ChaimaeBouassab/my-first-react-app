import React from "react";
import PlayersList from "./PlayersList";

function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column", // Arrange children vertically
    alignItems: "center", // Center align horizontally
    justifyContent: "center", // Center align vertically
    height: "100vh", // Use the full viewport height
    backgroundImage: "url('/pexels-riccardo-41257.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="App" style={containerStyle}>
      <h1 style={{ color: "white" }}>"Players Of Excellence"</h1>
      <PlayersList />
    </div>
  );
}

export default App;
