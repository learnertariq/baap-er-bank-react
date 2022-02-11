// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Banking from "./components/Banking";
import Home from "./components/Home";
import { redirect } from "statuses";

function App() {
  return (
    <Router>
      {/* <Header /> */}

      <Routes>
        <Route  path="/login" element={<Login />} />
        <Route  path="/banking" element={<Banking />} />
        <Route  path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
