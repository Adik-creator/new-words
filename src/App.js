import { Routes, Route } from "react-router-dom";
import { Day } from "./components/Day/Day";
import { Home } from "./components/Home_page";

function App() {
  return (
    <div className="App">
      <Routes basename="/">
        <Route path="/" element={<Home />} />
        <Route path="day/:id" element={<Day />} />
      </Routes>
    </div>
  );
}

export default App;
