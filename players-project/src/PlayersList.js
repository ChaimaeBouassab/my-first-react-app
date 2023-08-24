import React from "react";
import Player from "./Player";
import playersData from "./Players"; // Assuming players.js is in the same folder

const PlayersList = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    backgroundImage: "url('/pexels-riccardo-41257.jpg')", // Replace with your image URL
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    color: "white", // Set text color to white
    textAlign: "center", // Center the title
  };

  return (
    <div style={containerStyle}>
      <h1>Elite Squad</h1>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
