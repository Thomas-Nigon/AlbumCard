import { useState } from "react";
import Card from "./Components/card";
import "./App.css";
import makonnen from "./assets/makonen.png";
import chinwax from "./assets/chinwax.png";
import starE from "./assets/starE.png";

function App() {
  const [count, setCount] = useState(0);
  const albumList = [
    {
      artist: "DJ Chinwax",
      albumName: "La débauche",
      imgSrc: chinwax,
    },
    {
      artist: "ILoveMakonnen",
      albumName: "I love Makonnen",
      imgSrc: makonnen,
    },
  ];
  return (
    <>
      {albumList.map((element, index) => (
        <Card
          key={`card number:${index}`}
          artist={element.artist}
          albumName={element.albumName}
          imgSrc={element.imgSrc}
          starE={starE}
        />
      ))}
    </>
  );
}

export default App;
