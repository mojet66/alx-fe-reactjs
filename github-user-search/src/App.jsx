import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      {console.log(import.meta.env.VITE_APP_GITHUB_API_KEY)};
    </>
  );
}

export default App;
