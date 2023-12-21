import { useState } from "react";
import "./App.css";
import myImage from "./assets/images/me.jpg";
import gitHubLogo from "./assets/images/github.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center overflow-hidden mb-8">
        <img
          className="rounded-full h-52 w-52 object-cover"
          src={myImage}
          alt="Description of the image"
        />
      </div>

      <div
        className="text-3xl font-MyFontBold"
        style={{ fontFamily: "MyFontBold" }}
      >
        <h1>Hi, I am Philipp</h1>
      </div>
      <div style={{ fontFamily: "MyFont" }}>
        {/* Your component content here */}
        <p>This is my Website.</p>
      </div>
      <div className="flex justify-center">
        <a
        target="_blank"
          href="https://github.com/philipprobin"
          className="p-4 hover:bg-gray-100 duration-200"
        >
          <img
            className= 'h-20 w-20'
            src={gitHubLogo}
            alt="Description of the image"
          />
        </a>
      </div>
    </>
  );
}

export default App;
