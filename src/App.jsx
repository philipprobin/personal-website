import { useState } from "react";
import "./App.css";
import myImage from "./assets/images/me.jpg";
import gitHubLogo from "./assets/images/github.png";
import linkedInLogo from "./assets/images/linkedin.png";

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
        className="text-3xl font-customBold mb-2"
      >
        <h1>Hi, I am Philipp</h1>
      </div>
      <div
        className="text-1xl text-center flex justify-center font-custom"
      >
        {/* Your component content here */}
        <p>
          I am a Software Developer interested in AI and Entrepreneurship.
          <br />
          I love developing apps and exploring new things. <br />
          Currently I am living in Medellín and working on my Start-up while
          learning spanish. <br />I enjoy exploring various cultures and
          engaging in games like chess and basketball.
        </p>
      </div>

      <div
        className="text-3xl font-customBold mt-8 mb-2"
      >
        <h1>These are my priorities:</h1>
      </div>
      <div
        className="text-1xl text-left flex justify-center font-custom"
      >
        {/* Your component content here */}
        <ul
          className="md:ml-14"
          style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
        >
          <li>Create value</li>
          <li>Fail fast</li>
          <li>Dive into electronic music production</li>
          <li>Make a living from my ideas</li>
        </ul>
      </div>

      <div
        className="text-3xl mt-8 mb-2 font-customBold">
        <h1>These are my values:</h1>
      </div>
      <div
        className="text-1xl text-left flex justify-center mb-8 font-custom"
      >
        {/* Your component content here */}
        <ul
          className="md:ml-14"
          style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
        >
          <li>Having a sustainable impact on society with the work I do</li>
          <li>Striving for personal growth and happiness</li>
          <li>Being always open-minded and curious</li>
          <li>Pursuing lifelong learning</li>
        </ul>
      </div>
      <div
        className="text-l font-customBold mt-8 mb-6"
      >
        <h1>Last update: 22. Dec 2023</h1>
      </div>
      <div className="flex justify-center">
        <div className="p-4 hover:bg-gray-100 duration-200">
          <a target="_blank" href="https://github.com/philipprobin">
            <img className="h-16 w-16" src={gitHubLogo} alt="GitHub Logo" />
          </a>
        </div>
        <div className="p-4 hover:bg-gray-100 duration-200">
          <a target="_blank" href="https://www.linkedin.com/in/philipp-sowik-7462b4215/">
            <img className="h-16 w-16" src={linkedInLogo} alt="LinkedIn Logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
