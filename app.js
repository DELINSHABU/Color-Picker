import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  const [colorCode, setColorCode] = useState("#FFFFFF");
  const [copyText, setCopyText] = useState("");

  const randomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };

  const generateRandomColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber()];
    }
    setColorCode(hexColor);
    document.body.style.backgroundColor = hexColor;
    setCopyText(""); // Reset copyText when generating a new color
  };

  const copyToClipboard = () => {
    const textToCopy = colorCode;

    // Create a temporary element to execute the copy command
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setCopyText("Color code Copied"); // Set the state to "Copied" when the copy is successful
    console.log("Text copied: " + textToCopy);
  };

  return (
    <div className="Main-Div">
      <h2>Generate Random Color</h2>
      <h4 id="text-div">
        The color code: <span id="text-to-copy">{colorCode}</span>
      </h4>
      <button className="refresh" onClick={generateRandomColor}>
        !!CLICK HERE!!
      </button>
      <button onClick={copyToClipboard}>Copy the code</button>
      <p idName="copied">{copyText}</p>
    </div>
  );
};

// render
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
