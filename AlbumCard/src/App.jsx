import { useState } from "react";
import Card from "./Components/card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const starE =
    "https://cdn.icon-icons.com/icons2/2768/PNG/512/star_icon_176624.png";
  const albumList = [
    {
      artist: "DJ Chinwax",
      albumName: "La débauche",
      imgSrc:
        "https://pepseeactus.com/wp-content/uploads/2023/09/DJ-Chinwax-la-debauche.jpeg",
    },
    {
      artist: "ILoveMakonnen",
      albumName: "I love Makonnen",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/f/ff/ILoveMakonnen_-_ILoveMakonnen.png",
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
