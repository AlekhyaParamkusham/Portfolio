import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
