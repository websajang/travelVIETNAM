import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Food from "./Food";
import Food2 from "./Food2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/food" element={<Food2 />} />
      </Routes>
    </div>
  );
}

export default App;
