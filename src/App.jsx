import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";
import { LightBulbIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <h1 style={{marginRight:'10px'}}>
          Hello, React Router 
        </h1>
        <span><LightBulbIcon width={"35px"} /></span>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
