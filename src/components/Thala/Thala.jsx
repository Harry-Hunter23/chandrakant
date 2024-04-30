import React, { useState } from "react";
import "./Thala.css";

const Thala = () => {
  const thala_gif = "src/assets/dhoni-funny.gif";
  const thala_audio = new Audio(
    "src/assets/Bole-Jo-Koyal-Bago-Me-[AudioTrimmer.com].mp3"
  );

  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the audio is playing
  const [displayStyle, setDisplayStyle] = useState("none");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const alwaysSeven = () => {
    let length = inputValue.length;
    const thala_always = length - (length - 7);
    let x = `Letters are ${length} Also ${length} - (${length} - 7) = ${thala_always}!!! Thala For a Reason`;

    if (!isPlaying) {
      // Check if the audio is not already playing
      thala_audio.play();
      setIsPlaying(true); // Set isPlaying to true when audio starts playing
      thala_audio.onended = () => setIsPlaying(false); // Reset isPlaying when audio ends
    }

    setOutputValue(x);
    setDisplayStyle((prevStyle) =>
      prevStyle === "none" ? "block" : "return 1"
    );
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="thala_container">
      <h1 className="heading">There's a Reason Behind Everything</h1>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        className="prompt"
        placeholder="Enter the Prompt"
      ></input>
      <p className="output">{outputValue}</p>
      <button onClick={alwaysSeven} className="btn">
        Explore the Reason
      </button>
      <button className="reset" onClick={handleReload}>
        Find More Reasons
      </button>
      <div className="meme_gif_container">
        <img
          src={thala_gif}
          alt="dhoni-gif"
          className="dhoni_gif"
          style={{ display: displayStyle }}
        ></img>
      </div>
    </div>
  );
};

export default Thala;
