import { useState } from "react";
import "./styles.css";
import { getRubberDuck } from "./utils/constants/rubberDucks.js";

export default function App() {
  const { name: duckName, imagePath: image } = getRubberDuck(false, "batman");
  const [name, setName] = useState(duckName);
  const [imageUrl, setImageUrl] = useState(image);

  const changeRubberDuckAvatar = () => {
    setName(getRubberDuck(true).name);
    setImageUrl(getRubberDuck(true).imagePath);
  };

  const changeTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="App">
      <h1>Rubber Duck Debugging</h1>
      <p>
        Hi, I'm your <span>Rubber Duck</span>.<br />
        Talk to Me About Your Problems <br />
        <b>I'll listen</b>
      </p>
      <img src={imageUrl} alt={name} />
      <button onClick={changeRubberDuckAvatar}>Change Rubber Duck</button>
      <div>
        <button onClick={changeTheme}>Change Theme</button>
        <button>Help</button>
      </div>
    </div>
  );
}
