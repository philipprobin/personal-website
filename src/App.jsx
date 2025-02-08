// App.jsx

import "./App.css";
import myImage from "./assets/images/me.jpg";
import gitHubLogo from "./assets/images/github.png";
import linkedInLogo from "./assets/images/linkedin.png";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Apps from './Apps';
import Books from './Books';

function App() {
  return (
    <Router>
      <div className="flex justify-end p-4">
        <div>
          <Link 
            to="/apps" 
            className="mr-4 font-customBold inline-block p-4 rounded-lg shadow transition-transform transform hover:scale-110 hover:shadow-lg" 
          >
            Apps
          </Link>
          <Link 
            to="/books" 
            className="font-customBold inline-block p-4 rounded-lg shadow transition-transform transform hover:scale-110 hover:shadow-lg" 
          >
            Books
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="/books" element={<Books />} />
        <Route 
          path="/" 
          element={
            <>
              <div className="flex justify-center overflow-hidden mb-8">
                <img
                  className="rounded-full h-52 w-52 object-cover"
                  src={myImage}
                  alt="Description of the image"
                />
              </div>

              <div className="text-3xl font-customBold mb-2">
                <h1>Hi, I am Philipp</h1>
              </div>
              <div className="text-1xl text-center flex justify-center font-custom">
                <p>
                  I am a Software Developer interested in AI and Entrepreneurship.
                  <br />
                  I love developing apps and exploring new things.
                  <br />
                  Currently I am living in Langenfeld and working on my Start-up SemanticMap and some side projects
                  while reading books and practicing for a half-marathon.
                  <br />
                  I enjoy exploring various cultures and engaging in games like chess and basketball.
                </p>
              </div>

              <div className="text-3xl font-customBold mt-8 mb-2">
                <h1>These are my priorities:</h1>
              </div>
              <div className="text-1xl text-left flex justify-center font-custom">
                <ul className="md:ml-14" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                  <li>Creating value</li>
                  <li>Failing fast</li>
                  <li>Working on creative projects</li>
                  <li>Making a living from my ideas</li>
                </ul>
              </div>

              <div className="text-3xl mt-8 mb-2 font-customBold">
                <h1>These are my values:</h1>
              </div>
              <div className="text-1xl text-left flex justify-center mb-8 font-custom">
                <ul className="md:ml-14" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                  <li>Being self-sufficient</li>
                  <li>Striving for personal growth and happiness</li>
                  <li>Being always open-minded and curious</li>
                  <li>Pursuing lifelong learning</li>
                </ul>
              </div>

              <div className="text-l font-customBold mt-8 mb-6">
                <h1>Last update: 08. Feb 2025</h1>
              </div>
              <div className="flex justify-center">
                <div className="p-4 hover:bg-gray-100 duration-200">
                  <a target="_blank" href="https://github.com/philipprobin" rel="noreferrer">
                    <img className="h-16 w-16" src={gitHubLogo} alt="GitHub Logo" />
                  </a>
                </div>
                <div className="p-4 hover:bg-gray-100 duration-200">
                  <a target="_blank" href="https://www.linkedin.com/in/philipp-sowik-7462b4215/" rel="noreferrer">
                    <img className="h-16 w-16" src={linkedInLogo} alt="LinkedIn Logo" />
                  </a>
                </div>
              </div>
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
