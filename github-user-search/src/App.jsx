import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import "./index.css";
// import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/services" element={<h2>Services Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
      </Router>
      <h1>My React App is working</h1>
      <p className="font-bold text-green-600 text-lg">Tailwind is working</p>
      <Search />
    </>
  );
}

export default App;
