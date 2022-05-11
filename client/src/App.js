import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter basename="/">
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/about"
      >
        Abount
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h2>Not found home this page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
