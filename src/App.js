import React, { useState } from "react";
import "./App.css"; // Import your CSS file
import header from "./images/s.png";

const defaultTreats = [
  "50 pounds",
  "20 pounds",
  "10 pounds",
  "use my body butter",
  "20 mobile rechage",
];

const App = () => {
  const [selectedTreat, setSelectedTreat] = useState("");
  const [treats, setTreats] = useState(defaultTreats);
  const [newTreatsInput, setNewTreatsInput] = useState("");

  // Function to handle button click
  const handleButtonClick = (treat) => {
    setSelectedTreat(treat);
  };
  const handleNewTreatsSubmit = () => {
    const newTreatsArray = newTreatsInput
      .split("\n")
      .filter((treat) => treat.trim() !== "");
    setTreats(newTreatsArray);
    setNewTreatsInput("");
  };

  return (
    <div className="container">
      <div className="header">
        <img src={header} alt="Header" className="mb-4" />
        <h1 className="text-4xl font-bold mb-4">Choose a Treat</h1>
        {selectedTreat && (
          <p className="text-lg font-medium mb-4">
            Selected Treat: {selectedTreat}
          </p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 10,
          marginBottom: 10,
        }}
      >
        {treats.map((treat, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(treat)}
            className="button"
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <textarea
          rows="4"
          value={newTreatsInput}
          onChange={(e) => setNewTreatsInput(e.target.value)}
          className="w-64 px-4 py-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter new treats (one per line)"
        />
        <button onClick={handleNewTreatsSubmit} className="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
